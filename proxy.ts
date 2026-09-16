import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.SECRET_KEY;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
