import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

const prisma = new PrismaClient();
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "493176827395-de49aevk11uuseti2d0vffoga6gm6536.apps.googleusercontent.com",
      clientSecret: "iUcGJfJvKsgeSPCD45bw4VCM",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account && account.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name,
              email: user.email!,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      });

      if (dbUser) {
        if (session.user) {
          session.user.id = dbUser.id.toString();
        }
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };