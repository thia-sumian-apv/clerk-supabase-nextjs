import { authMiddleware as clerkAuthMiddleware } from "@clerk/nextjs/server";

export default clerkAuthMiddleware({
  publicRoutes: ["/"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};