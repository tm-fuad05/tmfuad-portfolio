"use server";

export async function VerifyAdminPassword(input: string) {
  const secret = process.env.ADMIN_PASS;

  if (input === secret) {
    return { success: true };
  } else {
    return { success: false, error: "Incorrect Password!" };
  }
}
