import { ProductType } from "@/types/api/Product";
import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";


interface Props {
    populate? : Array<"thumbnail" | "categories" | "gallery">
    filters? : {};
}

export async function getAllProductsApiCall({populate , filters} : Props) : Promise<ApiResponseType<ProductType>>{

    return await apiClient.get("/products" , {
        params: {
            populate : populate?.join(","),
            filters: filters
            },
        }
    )
}