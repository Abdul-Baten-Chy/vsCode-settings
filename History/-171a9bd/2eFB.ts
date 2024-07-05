import { Request, Response } from 'express'
import { services } from './product.services'
import ProductValidated from './product.validation'

const createProductContrller = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const validatedProduct = ProductValidated.parse(product)

    const result = await services.createProductIntoDb(validatedProduct)
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}

const getProductContrller = async (req: Request, res: Response) => {
  try {
    const result = await services.getAllProduct()
    res.status(200).json({
      success: true,
      message: 'data retrive successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'data can not retrive ',
      error,
    })
  }
}

const getSingleProduct = (req: Request, res: Response) => {
  const { productId } = req.params
}

export default {
  createProductContrller,
  getProductContrller,
}
