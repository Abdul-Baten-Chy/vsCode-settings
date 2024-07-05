import { Tproduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (data: Tproduct) => {
  console.log(data, 'data')

  const result = await Product.create(data)

  console.log(result, 'ressss')

  return result
}

const getAllProduct = async () => {
  const result = await Product.find()
  return result
}

export const services = {
  createProductIntoDb,
  getAllProduct,
}
