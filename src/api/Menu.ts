import ApiResponseType from "@/types/api/Response";
import apiClient from "./config/ApiClient";
import { MenuType } from "@/types";


export async function getMenuApiCall () :Promise<ApiResponseType<MenuType>> {
    return await apiClient.get("/menus" , {
        params: {
            populate : "*"
        }
    })
}