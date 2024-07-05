import { Request, Response } from 'express'
import { services } from './product.services'

const createProductContrller = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const result = await services.createProductIntoDb(product)
    res.status(200).json{
        "success": true,
        "message": "Product created successfully!",
    }
  } catch (error) {
    console.log(error)
  }
}

export default {
  createProductContrller,
}
