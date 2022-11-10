import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // check the methods
  if (req.method === 'GET') {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    })
    res.json(products)
  } else if (req.method === 'POST') {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId,
      },
    })
    res.json(product)
  } else {
    res.status(405).end()
  }
}