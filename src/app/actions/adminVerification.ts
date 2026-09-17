"use server";

import { cookies } from "next/headers";

export async function VerifyAdminPassword(input: string) {
  const adminPass = process.env.ADMIN_PASS;
  const secret = process.env.SECRET_KEY;
  // ১. পাসওয়ার্ড মিলল কিনা চেক
  if (input === adminPass) {
    // ২. পাসওয়ার্ড মিললে সার্ভার থেকে সিকিউর কুকি SET করে দেওয়া হচ্ছে
    const cookieStore = await cookies();
    cookieStore.set("admin_session", secret as string, {
      httpOnly: true, // জাভাস্ক্রিপ্ট দিয়ে হ্যাক করে পড়া যাবে না (এক্সট্রা সিকিউর)
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // ৭ দিন লগইন থাকবে
    });

    return { success: true };
  } else {
    return { success: false, error: "Incorrect Password!" };
  }
}
