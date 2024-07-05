const createProductIntoDb = async (data) => {
  const result = await ProductModel.create(data)
}
