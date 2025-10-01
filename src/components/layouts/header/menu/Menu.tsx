import { IconBox } from "@/components/common";

export function Menu() {
  return (
    <>
      <div id="all_categories" className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
            <IconBox icon={"icon-apps"} size={24} title={"Browse All Categories"} linkClassname={"gap-2"} titleClassname={"text-medium"}/>
            <IconBox icon={"icon-angle-small-down"} size={24} />

            <div id="all_categories_box" className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
              <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                
                <IconBox icon={"icon-groceries-1"} size={30} path={7} title={"Milks and Dairies"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-drinks-1"} size={30} path={5} title={"Wines & Drinks"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-dress-1"} size={30} path={4} title={"Clothing & beauty"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-crab-1"} size={30} path={9} title={"Fresh Seafood"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-pet-food-1"} size={30} path={8} title={"Pet Foods & Toy"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-sweet-1"} size={30} path={7} title={"Fast food"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-dairy-products-1"} size={30} path={5} title={"Baking material"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-grocery-1"} size={30} path={7} title={"Vegetables"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-fruit-1"} size={30} path={3} title={"Fresh Fruit"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>
                <IconBox icon={"icon-milk-products-1"} size={30} path={5} title={"Bread and Juice"} linkClassname={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 transition-all duration-300"} titleClassname={"text-heading-sm text-blue-300"}/>

                <IconBox icon={"icon-add"} size={24} title={"More Categories"}linkClassname={"m-auto mt-[17px] gap-4"} titleClassname={"text-heading-sm text-blue-300"} />
              </div>
            </div>
      </div>
      <nav id="main_menu">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
          <li>
            <a href="#" className="flex flex-row gap-2 items-center">
              <i className="icon-flame text-[24px]"></i>
              <div className="text-heading6 lg:text-heading-sm xl:text-heading6">Hot Deals</div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1">Home</a>
          </li>
          <li>
            <a href="#" className="flex flex-row">Food</a>
          </li>
          <li>
            <a href="#" className="flex flex-row">Vegetables</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
