import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "../../../../generated/client/client.js";
import { Session } from "next-auth";
import { randomUUID } from "crypto";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

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
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
              password : randomUUID()
              // provider: account.provider,
              // providerAccountId: account.providerAccountId,
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