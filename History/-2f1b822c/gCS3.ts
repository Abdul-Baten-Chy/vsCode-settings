import { Tproduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (data: Tproduct) => {
  console.log(data, 'data')

  const result = await Product.create(data)

  console.log(result, 'ressss')

  return result
}

const getAllProduct = async (searchTerm: any) => {
  const result = (await searchTerm)
    ? Product.find({ name: { $regex: /searchTerm/i } })
    : Product.find()
  return result
}
const getSingleProduct = async (productId: string) => {
  const result = await Product.find({ _id: productId })
  return result
}
const updateSingleProduct = async (
  productId: string,
  updatedProduct: object
) => {
  const update = {
    $set: updatedProduct,
  }
  const result = await Product.findOneAndUpdate({ _id: productId }, update, {
    new: true,
  })
  return result
}
const deleteSingleProduct = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId })
  return result
}

export const services = {
  createProductIntoDb,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
