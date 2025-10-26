import { ProductType } from "@/types/api/Product";
import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";


interface Props {
    populate? : Array<"thumbnail" | "categories" | "gallery">
    filters? : { 
        is_popular? : boolean;
        is_popular_fruit? : boolean;
    };
}

interface Filters {
    is_popular? : {$eq : boolean};
    is_popular_fruit? : {$eq : boolean};
}

export async function getAllProductsApiCall({populate , filters} : Props) : Promise<ApiResponseType<ProductType>>{

    const customFilter : Filters = {}

    if(filters?.is_popular){
        customFilter.is_popular = {$eq : filters.is_popular}
    }

    if(filters?.is_popular_fruit){
        customFilter.is_popular_fruit = {$eq : filters.is_popular_fruit}
    }

    return await apiClient.get("/products" , {
        params: {
            populate : populate?.join(","),
            filters: customFilter
            },
        }
    )
}