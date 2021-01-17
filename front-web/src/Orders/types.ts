import { Link } from "react-router-dom";

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}


export type OrderLocationData = {
    latitude: number,
    longitude: number;
    addres: string;
}