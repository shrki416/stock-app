import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handle(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
};
