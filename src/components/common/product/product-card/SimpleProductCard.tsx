import { simpleProductType } from "@/types/simpleProductType";
import { Badge, IconBox, Rating } from "../../ul";
import { ImageView } from "../../image-view";
import Link from "next/link";

interface Props {
  item : simpleProductType
}

export function SimpleProductCard({item} : Props) {
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
      <Badge title={item.badge} price={item.price} sale_price={item.sale_price}/>
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
      <ImageView src={item.img} alt="Product image" width={717} height={526} className="m-auto w-full aspect-[3/2] mb-[28px]" />
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-xsmall">{item.shopName}</div>
        <Link href={"#"}><h3 className="text-heading-sm text-blue-300 min-h-[33px] line-clamp-2 overflow-hidden">{item.title}</h3></Link>
        <div className="flex gap-4">
          <Rating rate={item.rate} />
        </div>
        <div className="font-lato text-xsmall text-gray-500">{item.weight} {item.unit}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex flex-wrap">
        {
          item.sale_price ?
          <>
            <span className="text-heading5 text-green-200 mr-1">${item.sale_price}</span>
            <span className="text-heading-sm line-through text-gray-500">${item.price}</span>
          </>
          :
          <span className="text-heading5 text-green-200 mr-1">${item.price}</span>
        }
        </div>
        <div className="add-product">
          <button className="
            flex items-center justify-center
            text-heading-xs sm:text-heading-sm
            text-green-200 bg-green-150
            border rounded px-2.5 py-1.5
            hover:bg-green-200 hover:text-green-900
            transition duration-300 ease-in-out
          ">
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
      </div>
    </div>
  );
}