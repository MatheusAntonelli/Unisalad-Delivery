import { Link } from "react-router-dom";

export type Product = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    description: string;
    imageUri: string;
}


export type OrderLocationData = {
    latitude: number,
    longitude: number;
    addres: string;
}

type ProductId = {
   id: number; 
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;

