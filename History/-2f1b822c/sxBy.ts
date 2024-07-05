import { Tproduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (data: Tproduct) => {
  console.log(data, 'data')

  const result = await Product.create(data)
  return result
}

export const services = {
  createProductIntoDb,
}
