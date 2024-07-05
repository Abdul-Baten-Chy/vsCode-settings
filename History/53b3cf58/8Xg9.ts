import { z } from "zod";

const carValidation = z.object({
    body:z.object({
        name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: 'available' | 'unavailabel';
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
    })
})