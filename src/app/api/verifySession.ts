import { cookies } from "next/headers";

export async function verifySession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  const secret = process.env.SECRET_KEY;
  return Boolean(session && session === secret);
}
