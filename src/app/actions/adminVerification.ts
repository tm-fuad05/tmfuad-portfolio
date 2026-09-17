"use server";

import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function VerifyAdminPassword(input: string) {
  const adminPass = process.env.ADMIN_PASS;
  const secret = process.env.SECRET_KEY;

  const isMatch = await bcrypt.compare(input, adminPass!);

  if (isMatch) {
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
      maxAge: 3600 * 2,
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
