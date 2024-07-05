import { NextFunction, Request, RequestHandler, Response } from "express";


const catchAsyncAwait =(fn:RequestHandler)=>{
   return async (req:Request, res:Response, next:NextFunction)=>{

   Promise.resolve(fn(req,res,next)).catch((error)=>next(error))
}