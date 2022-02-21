import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Email({
    //   server: {
    //     host: "",
    //     port: '',
    //     auth: {
    //       user: "",
    //       pass: "",
    //     },
    //   from: '',
    //   },
    // })
  ],
  JWT: {
    signInKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/login",
  },
});
