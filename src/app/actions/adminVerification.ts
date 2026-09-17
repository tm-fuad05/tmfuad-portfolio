"use server";

import { cookies } from "next/headers";

export async function VerifyAdminPassword(input: string) {
  const adminPass = process.env.ADMIN_PASS;
  const secret = process.env.SECRET_KEY;

  if (input === adminPass) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", secret as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".tanvirmahmud.online"
          : undefined,
      maxAge: 3600 * 24,
    });
    return { success: true };
  } else {
    return { success: false, error: "Incorrect Password!" };
  }
}

// Delete Cookie (Logout)
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete({
    name: "admin_session",
    path: "/",
    domain:
      process.env.NODE_ENV === "production"
        ? ".tanvirmahmud.online"
        : undefined,
  });
}
