import { Badge, IconBox, Rating } from "@/components";
import { ImageView } from "@/components";
import Link from "next/link";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  item : EntityType<ProductType>
}

export function SimpleProductCard({item} : Props) {         
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
      {(item.attributes.label || item.attributes.sell_price || '') && <Badge title={item.attributes.label} price={item.attributes.price} sale_price={item.attributes.sell_price}/>}      
      <div className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
        <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
          <IconBox icon={"icon-heart"} size={15} iconClassName={"text-brand1"} />
        </div>
        <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
          <IconBox icon={"icon-shuffle"} size={15} />
        </div>
        <div className="p-2.5 hover:bg-green-150">
          <IconBox icon={"icon-eye"} size={15} />
        </div>
      </div>
      <ImageView src={item.attributes.thumbnail?.data.attributes.url} alt="Product image" width={717} height={526} className="m-auto w-full aspect-[3/2] mb-[28px]" />
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-xsmall min-h-5">{item.attributes.categories?.data[0]?.attributes.title}</div>
        <Link href={"#"}><h3 className="text-heading-sm text-blue-300 min-h-[33px] line-clamp-2 overflow-hidden" title={item.attributes.title}>{item.attributes.title}</h3></Link>
        <div className="flex gap-4">
          <Rating rate={item.attributes.rate} />
        </div>
        <div className="font-lato text-xsmall text-gray-500">{item.attributes.weight} {item.attributes.unit}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex flex-wrap">
        {
          item.attributes.sell_price ?
          <div className="flex flex-col sm:flex-row min-h-10">
            <span className="text-heading5 text-green-200 mr-1">${item.attributes.sell_price}</span>
            <span className="text-heading-sm line-through text-gray-500">${item.attributes.price}</span>
          </div>
          :
          <span className="text-heading5 text-green-200 mr-1 min-h-10">${item.attributes.price}</span>
        }
        </div>
      </div> 
        {
          item.attributes.total && item.attributes.sold ?
          <div className="flex flex-col">
            <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
              <div style={{width:`${item.attributes.sold/item.attributes.total*100}%`}} className="bg-green-200 h-[4px] rounded-[2px]"></div>
            </div>
            <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {item.attributes.sold}/{item.attributes.total}</div>
            <div className="mt-[23px]">
              <button className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                <IconBox icon="icon-shopping-cart" title="Add To Card" titleClassName="text-heading-sm"/>
              </button>
            </div>
          </div>
          :
          <div className="add-product">
            <button className="flex items-center justify-center text-heading-xs sm:text-heading-sm text-green-200 bg-green-150 border rounded px-2.5 py-1.5 hover:bg-green-200 hover:text-green-900 transition duration-300 ease-in-out">
              <span className="sm:hidden">+</span>
              <span className="hidden sm:flex">Adds +</span>
            </button>
            <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
              <input type="number" value="1" className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center" />
              <div className="flex flex-col justify-between">
                <IconBox icon={"icon-angle-small-up"} size={10} iconClassName={"up"} />
                <IconBox icon={"icon-angle-small-down"} size={10} iconClassName={"down"} />
              </div>
            </div>
          </div>
        }
    </div>
  );
}