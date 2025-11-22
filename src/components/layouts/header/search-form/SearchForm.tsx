import { getAllProductsApiCall } from "@/api/Product";
import { IconBox } from "@/components/common";
import useDebounce from "@/hooks/use-debounce";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
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
  const [isSearched , setIsSearched] = useState<boolean>(false)

  const { register, handleSubmit , watch} = useForm<FormInput>();
  const searchText = watch("search_text")

  const mutation = useMutation({
    mutationFn : (data : FilterData) => getAllProductsApiCall({filters : data}),

    onSuccess: (response) => {
      setResultData(response.data);
    },
  })

  const onSubmit = useCallback((data : FormInput) => {
    if(data.search_text.length <= 0) return
    
    mutation.mutate({
      title : {
        "$containsi" : data.search_text.trim()
      },
    })
  }, [mutation]);

  const delay = useDebounce(handleSubmit(onSubmit), 1000)

  useEffect( () => {
    if(searchText && searchText.trim() !== ""){
      delay();
      setIsSearched(true);
    }else{
      setIsSearched(false);
      setResultData([]);
    }
  },[searchText])

  const focusInput = ()=> setIsSearched(true);
  const blurInput = ()=> setIsSearched(false);

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Escape"){
      e.currentTarget.blur();
    }
  };

  const hasResults = resultData.length > 0;
    
  return (
    <div className="relative">
      <form 
        name="search-form" 
        onSubmit={handleSubmit(onSubmit)} 
        action="#" 
        method="post" 
        className="flex items-center"
      >
        <input
          autoComplete="off"
          type="text" 
          {...register("search_text")}
          onKeyDown={handleKeyDown}
          onFocus = {focusInput}
          onBlur={blurInput}
          placeholder="Search for items"
          aria-label="Search input"
          className={`text-xsmall text-gray-600 border-gray-300 w-full focus:outline-none ${inputClassName}`} 
        />
        <button type="submit" aria-label="Search">
          <IconBox icon={"icon-search"} iconClassName={"ml-1"}/>
        </button>
      </form>

      {
        isSearched &&
        <div className="absolute top-full mt-2 -left-2 lg:-left-4 -right-2 lg:-right-4 bg-white z-10 rounded-md border overflow-hidden max-h-40 overflow-y-auto">
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