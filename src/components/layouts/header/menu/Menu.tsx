import { IconBox } from "@/components/common";
import { useMenu } from "@/hooks/use-menu";
import { EntityType, MenuItemType } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useOverlay } from "@/hooks/use-overlay";


export function Menu() {
  const {data : mainMenuItems} = useMenu({position : "main_menu"})
  const {data : categoryMenuItems } = useMenu({position : "brows-category"})

  let [showCategoryMenu , setShowCategoryMenu] = useState<boolean>(false)
  let [isDropdownOpen , setIsDropdownOpen] = useState<boolean>(false)

  useOverlay({
    onClick(){
      setShowCategoryMenu(false);
      setIsDropdownOpen(false);
    },
    isDropdownOpen: isDropdownOpen,
  })

  function categoryBtnClickHandler (e : React.MouseEvent<HTMLDivElement>){
    e.stopPropagation()    
    setShowCategoryMenu((prevState) => !prevState)
    setIsDropdownOpen((prevState) => !prevState)
  }

  function categoryBodyClickHandler (e : React.MouseEvent<HTMLDivElement>){
    e.stopPropagation()
  }

  return (
    <>
      <div className="relative">
        <div onClick={categoryBtnClickHandler} className="flex cursor-pointer bg-green-200 hover:bg-green-300 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center transition-all duration-200">
          <IconBox icon={"icon-apps"} size={24} title={"Browse All Categories"} linkClassName={"gap-2"} titleClassName={"text-medium"}/>
          <IconBox icon={`icon-angle-small-down`} iconClassName={`${showCategoryMenu && "-rotate-180"} transition-all duration-300`} size={24} />
        </div>

        <div onClick={categoryBodyClickHandler} className={`${!showCategoryMenu && "hidden"} lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 lg:p-[30px] hover:cursor-default`}>
          <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-[15px]">
            {
              categoryMenuItems &&
              categoryMenuItems.data.map((item : EntityType<MenuItemType> , index : number) => {
                return(
                  <IconBox key={index} icon={item.attributes.icon_name ?? ''} size={30} link={item.attributes.link} path={item.attributes.icon_path} title={item.attributes.title} linkClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassName={"text-heading-sm text-blue-300"}/>
                )
              })
            }
            <IconBox icon={"icon-add"} link="#" size={24} title={"More Categories"} linkClassName={"px-5 pb-3 lg:m-auto bg-red-300 mt-[17px] gap-2"} titleClassName={"text-heading-sm text-blue-300"} />
          </div>
        </div>

      </div>

      <nav id="main_menu">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] pb-6 lg:pb-0 mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
            {
              mainMenuItems &&
              mainMenuItems.data.map((item : EntityType<MenuItemType> , index) => {
                return (
                  <li key={index} className="opacity-80 hover:opacity-100 transition-all duration-200">
                    {
                      item.attributes.icon_name ?
                        <IconBox icon={item.attributes.icon_name} size={24} link={item.attributes.link} title={item.attributes.title} titleClassName={"text-heading6 lg:text-heading-sm xl:text-heading6"} />
                        : <Link href={item.attributes.link} className="flex items-center gap-1">{item.attributes.title}</Link>
                    }
                  </li>
                )
              })
            }
        </ul>
      </nav>
    </>
  )
}