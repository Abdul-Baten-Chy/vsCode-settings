import express from 'express'
import productsController from './products.controller'

const route = express.Router()

route.post('/', productsController.createProductContrller)
route.get('/', productsController.getProductContrller)
route.get('/:productId', productsController.getSingleProduct)
route.put('/:productId', productsController.updateProduct)
route.delete('/:productId', productsController.deleteProduct)

export const productsRoute = route
