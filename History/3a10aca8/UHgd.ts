import express from 'express'
import productsController from './products.controller'

const route = express.Router()

route.post('/', productsController.createProductContrller)

export const productsRoute = route
