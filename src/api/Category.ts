import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";
import { CategoryType } from "@/types";


export async function getFeaturedCategory() : Promise<ApiResponseType<CategoryType>> {
    return await apiClient.get("/categories" , {
        params: {
            populate : "thumbnail",
            filters: {
                is_featured: {
                $eq: true,
                },
            },
        }
    })
}