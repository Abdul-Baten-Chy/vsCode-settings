import { Schema } from "mongoose";
import { Tcars } from "./cars.interface";

const carSchema = new Schema<Tcars>({
    name: {
        type:String,
        required:[true,"Car name is required"]
    },
    description:  {
        type:String,
        required:[true,"Description name is required"]
    },
    color:  {
        type:String,
        required:[true,"color name is required"]
    },
    isElectric:  {
        type:Boolean,
        required:[true,"isElectric value is required"]
    },
    status:  {
        type:String,
        enum:['available' , 'unavailabel';]
        required:[true,"Car name is required"]
    }
    features: string[];
    pricePerHour: number;
    isDeleted: boolean;
})