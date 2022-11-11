import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const members = await prisma.member.findMany();
    res.json(members);
  } else if (req.method === "POST") {
    const member = await prisma.member.create({
      data: {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
      },
    });
    res.json(member);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}