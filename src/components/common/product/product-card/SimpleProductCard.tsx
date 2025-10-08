import { simpleProductType } from "@/types/simpleProductType";
import { IconBox } from "../../ul";
import { ImageView } from "../../image-view";

interface Props {
  item : simpleProductType
}

export function SimpleProductCard({item} : Props) {
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
      { item.badge && <div className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none">{item.badge}</div>}
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
        <h3 className="text-heading-sm text-blue-300 min-h-[33px] line-clamp-2 overflow-hidden">{item.title}</h3>
        <div className="flex gap-4">
          <ul className="flex gap-1">
            <li className="flex cursor-pointer"><IconBox icon="icon-star-full" size={12}></IconBox></li>
            <li className="flex cursor-pointer"><IconBox icon="icon-star-full" size={12}></IconBox></li>
            <li className="flex cursor-pointer"><IconBox icon="icon-star-full" size={12}></IconBox></li>
            <li className="flex cursor-pointer"><IconBox icon="icon-star-full" size={12}></IconBox></li>
            <li className="flex cursor-pointer"><IconBox icon="icon-star-empty" size={12}></IconBox></li>
          </ul>
          <div className="text-xsmall text-gray-500 font-lato">( {item.rate} )</div>
        </div>
        <div className="font-lato text-xsmall text-gray-500">{item.weight} {item.unit}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-heading5 text-green-200 mr-1">${item.disconnect}</span>
          <span className="text-heading-sm line-through text-gray-500">${item.price}</span>
        </div>
        <div className="add-product">
          <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>
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