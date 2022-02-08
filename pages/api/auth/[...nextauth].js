import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  JWT: {
    signInKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
});