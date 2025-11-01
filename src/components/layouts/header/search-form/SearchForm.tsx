import { getAllProductsApiCall } from "@/api/Product";
import { IconBox } from "@/components/common";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props{
  inputClassName? : string;
}

interface FormInput{
  search_text : string
}

interface FilterData{
  title : {
    "$containsi" : string;
  }
}

export function SearchForm({inputClassName} : Props) {

  const [resultData , setResultData] = useState<Array<EntityType<ProductType>>>([])
  const [searched , setSearched] = useState<boolean>(false)

  const { register, handleSubmit} = useForm<FormInput>();

  const mutation = useMutation({
    mutationFn : (data : FilterData) => getAllProductsApiCall({filters : data})
  })

  const onSubmit = (data : FormInput) => {
    data.search_text ? setSearched(true) : setSearched(false)
    
    mutation.mutate({
      title : {
        "$containsi" : data.search_text
      }
    },{
      onSuccess : (response) =>{
        setResultData(response.data)
      }
    })    
  }

  const hasResults = resultData.length > 0;
    
  return (
    <div className="relative">
      <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
        <input type="text" {...register("search_text")} placeholder="Search for items" aria-label="Search input" className={`text-xsmall text-gray-600 border-gray-300 w-full focus:outline-none ${inputClassName}`} />
        <button type="submit" aria-label="Search">
            <IconBox icon={"icon-search"} iconClassName={"ml-1"}/>
        </button>
      </form>

      {
        searched &&
        <div className="absolute top-full mt-2 -left-4 -right-4 bg-white z-10 rounded-md border overflow-hidden max-h-40 overflow-y-auto">
          <ul>
            {
              hasResults ?
                resultData.map((item : EntityType<ProductType> , index : number) => {
                  const isLast = resultData.length - 1;
                  
                  return(
                    <li key={index} className={`p-2 hover:bg-green-200 hover:text-white cursor-pointer transition-all duration-300 ${isLast !== index ? "border-b" : ''}`}>{item.attributes.title}</li>
                  )
                })
                :
                <li className={`p-2 hover:bg-red hover:text-white transition-all duration-300`}>No results found</li>

            }
          </ul>
        </div>
      }
    </div>
  )
}