import { Request, Response } from 'express'

const createProductContrller = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const result = Product.create(product)
  } catch (error) {
    console.log(error)
  }
}

export default {
  createProductContrller,
}
