import { cookies } from "next/headers";

export async function verifyAdminCookie() {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get("admin_session")?.value;
  const secret = process.env.SECRET_KEY;
  return Boolean(adminCookie && adminCookie === secret);
}
