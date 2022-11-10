import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const category = await prisma.category.findUnique({
      where: { id: req.query.id },
    });
    res.json(category);
  } else if (req.method === "PUT") {
    const category = await prisma.category.update({
      where: { id: req.query.id },
      data: { name: req.body.name },
    });
    res.json(category);
  } else if (req.method === "DELETE") {
    const category = await prisma.category.delete({
      where: { id: req.query.id },
    });
    res.json(category);
  } else {
    res.status(405).end();
  }
}