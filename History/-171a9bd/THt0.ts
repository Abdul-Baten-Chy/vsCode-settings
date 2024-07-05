import { Request, Response } from 'express'
import { services } from './product.services'

const createProductContrller = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const result = services.createProductIntoDb(product)
  } catch (error) {
    console.log(error)
  }
}

export default {
  createProductContrller,
}
