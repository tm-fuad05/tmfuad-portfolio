import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const hostName = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;
  const adminCookie = req.cookies.get("admin_session")?.value;
  const secret = process.env.SECRET_KEY;

  // ১. সাবডোমেন হ্যান্ডলিং (api.tanvirmahmud.online)
  if (hostName.startsWith("api.")) {
    if (pathname === "/") {
      return NextResponse.json({
        message: "Welcome to Tanvir Mahmud Fuad Portfolio API",
        status: "Running",
      });
    }

    if (!pathname.startsWith("/api/")) {
      return NextResponse.rewrite(new URL(`/api${pathname}`, req.url));
    }
  }

  // ২. /admin ড্যাশবোর্ড প্রোটেকশন
  if (pathname.startsWith("/admin") && pathname !== "/admin-verification") {
    if (!adminCookie || adminCookie !== secret) {
      return NextResponse.redirect(new URL("/admin-verification", req.url));
    }
  }

  // ৩. /api প্রোটেকশন (ব্লগ পোস্ট/এডিট/ডিলিট এবং ক্লাউডিনারি আপলোড)
  if (pathname.startsWith("/api/")) {
    // সাধারণ ভিজিটরদের জন্য GET মেথড উন্মুক্ত (ব্লগ পড়তে পারবে)
    if (req.method === "GET") {
      return NextResponse.next();
    }

    // মিউটেশন (POST, PATCH, DELETE) করার জন্য ভ্যালিড অ্যাডমিন হতে হবে
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
