import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // check method and do operation based on the method
  if (req.method === "GET") {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } else if (req.method === "POST") {
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    res.json(category);
  } else {
    res.status(405).end();
  }
}