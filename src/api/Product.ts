import { ProductType } from "@/types/api/Product";
import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";


interface Props {
    populate? : Array<"thumbnail" | "categories" | "gallery">
    filters? : { 
        is_popular? : boolean;
        is_popular_fruit? : boolean;
        is_best_seller? : boolean;
        total? : number;
    };
}

interface Filters {
    is_popular? : {$eq : boolean};
    is_popular_fruit? : {$eq : boolean};
    is_best_seller? : {$eq : boolean};
    total? : {$gt : number};
}

export async function getAllProductsApiCall({populate , filters} : Props) : Promise<ApiResponseType<ProductType>>{

    const customFilter : Filters = {}

    filters?.is_popular            && (customFilter.is_popular = {$eq : filters.is_popular})
    filters?.is_popular_fruit      && (customFilter.is_popular_fruit = {$eq : filters.is_popular_fruit})
    filters?.is_best_seller        && (customFilter.is_best_seller = {$eq : filters.is_best_seller})
    filters?.total !== undefined   && (customFilter.total = {$gt : filters.total})


    return await apiClient.get("/products" , {
        params: {
            populate : populate?.join(","),
            filters: customFilter
            },
        }
    )
}