import { ProductType } from "@/types/api/Product";
import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";


interface Props {
    populate? : Array<"thumbnail" | "categories" | "gallery">
    filters? : {};
    sort? : Array<string>;
    pagination? : {
        withCount? : boolean,
        page? : number,
        pageSize? : number,
        start? : number,
        limit? : number,
    }
}

export async function getAllProductsApiCall({populate , filters , sort , pagination} : Props) : Promise<ApiResponseType<ProductType>>{

    return await apiClient.get("/products" , {
        params: {
            populate : populate?.join(","),
            filters: filters,
            sort : sort,
            pagination : pagination,
        },
    })
}