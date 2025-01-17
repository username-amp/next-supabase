import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies(); // Retrieves the cookies object for this request.

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const cookie = (await cookieStore).get(name); // `get` is available directly.
          return cookie?.value;
        },

        async set(name: string, value: string, options: CookieOptions) {
          try {
            (await cookies()).set(name, value, options); // `set` needs to be called directly.
          } catch (error) {
            console.warn("Failed to set cookie:", error);
          }
        },

        async remove(name: string, options: CookieOptions) {
          try {
            (await cookies()).set(name, "", { ...options, maxAge: -1 }); // `maxAge: -1` removes the cookie.
          } catch (error) {
            console.warn("Failed to remove cookie:", error);
          }
        },
      },
    }
  );
}
