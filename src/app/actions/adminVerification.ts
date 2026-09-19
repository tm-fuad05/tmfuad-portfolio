"use server";

import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function VerifyAdminPassword(input: string) {
  const cookieStore = await cookies();
  const adminPass = process.env.ADMIN_PASS;
  const secret = process.env.SECRET_KEY;

  let attempts = Number(cookieStore.get("login_attempts")?.value || 0);

  if (attempts >= 5) {
    return {
      success: false,
      error: "Too many failed attempts! Locked for 15 minutes",
    };
  }

  const isMatch = await bcrypt.compare(input, adminPass!);

  if (isMatch) {
    cookieStore.delete({
      name: "login_attempts",
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".tanvirmahmud.online"
          : undefined,
    });
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
    attempts += 1;
    cookieStore.set("login_attempts", attempts.toString() as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".tanvirmahmud.online"
          : undefined,
      maxAge: 60 * 15,
    });

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
