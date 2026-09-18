import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  //Domain name
  const hostName = req.headers.get("host") || "";
  // Domain এর পরের path ("/about","/blog")
  const { pathname } = req.nextUrl;
  // Cookie এর ভেলু
  const adminCookie = req.cookies.get("admin_session")?.value;
  const secret = process.env.SECRET_KEY;

  // ১. /admin ড্যাশবোর্ড প্রোটেকশন
  if (pathname.startsWith("/admin") && pathname !== "/admin-verification") {
    if (!adminCookie || adminCookie !== secret) {
      return NextResponse.redirect(new URL("/admin-verification", req.url));
    }
  }

  if (
    pathname === "/admin-verification" &&
    adminCookie &&
    adminCookie === secret
  ) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // ২. API সিকিউরিটি চেক (মেন ডোমেইন /api/* অথবা সাবডোমেইন api.* উভয়ের জন্যই)
  const isApiRequest =
    pathname.startsWith("/api/") || hostName.startsWith("api.");

  if (isApiRequest) {
    // সাধারণ ভিজিটরদের জন্য GET মেথড উন্মুক্ত (ব্লগ পড়তে পারবে)
    // কিন্তু মিউটেশন (POST, PATCH, DELETE) করার জন্য কুকি বাধ্যতামূলক
    if (req.method !== "GET") {
      if (!adminCookie || adminCookie !== secret) {
        return NextResponse.json(
          {
            success: false,
            message: "Unauthorized: Admin authorization required.",
          },
          { status: 401 },
        );
      }
    }
  }

  // ৩. সাবডোমেন হ্যান্ডলিং ও রিরাইট (api.tanvirmahmud.online)
  if (hostName.startsWith("api.")) {
    if (pathname === "/") {
      return NextResponse.json({
        message: "Welcome to Tanvir Mahmud Fuad Portfolio API",
        status: "Running",
      });
    }

    return NextResponse.rewrite(new URL(`/api${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
