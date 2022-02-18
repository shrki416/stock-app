import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import prisma from "../../lib/prisma";

const secret = process.env.JWT_SIGNING_PRIVATE_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handle(req, res) {
  const session = await getSession({ req });
  const users = await prisma.user.findMany();
  const token = await getToken({ req, secret });

  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2));
  }

  res.json({ session, users });
}
