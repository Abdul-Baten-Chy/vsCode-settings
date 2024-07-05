import { Tproduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (data: Tproduct) => {
  const result = await Product.create(data)

  return result
}

const getAllProduct = async (searchTerm?: any) => {
  let result
  if (searchTerm) {
    result = await Product.find({ name: { $regex: searchTerm, $options: 'i' } })
  } else {
    result = await Product.find()
  }

  return result
}
const getSingleProduct = async (productId: string) => {
  const result = await Product.find({ _id: productId })
  return result
}
const updateSingleProduct = async (
  productId: string,
  updatedProduct: Tproduct
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
