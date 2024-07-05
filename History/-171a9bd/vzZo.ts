import { Request, Response } from 'express'
import { services } from './product.services'

const createProductContrller = async (req: Request, res: Response) => {
  try {
    const product = req.body
    console.log(product)

    const result = await services.createProductIntoDb(product)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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
  } catch (error:any) {

    res.status(500).json({
        success: false,
        message: error.message || 'data can not retrive ',
        error,
  }
}

export default {
  createProductContrller,
}
