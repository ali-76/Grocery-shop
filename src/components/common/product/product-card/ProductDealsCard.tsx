import { ImageView } from "../../image-view";
import { IconBox, Rating } from "../../ul";
import { useEffect, useState } from "react";
import { timerHelper } from "@/utils/timer";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props  {
  item : EntityType<ProductType>
}

export function ProductDealsCard({item}: Props) {
    
    const [remainTime , setRemainTime] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    useEffect(()=>{       
        const interval = setInterval(() => {
            if(item.attributes.discount_expire_date){
                const timerObj = timerHelper(item.attributes.discount_expire_date)
                setRemainTime(timerObj)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    },[])

        
  return (
    <div className="relative h-[438px]">
        <ImageView src={item.attributes.thumbnail?.data.attributes.url} alt="item image" width={378} height={335} className="w-full" />
        <div className="absolute z-[20] left-[50%] translate-x-[-50%] top-[195px]">
            <div className="timer1 flex items-center gap-3 h-[60px]">
                <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                    <div className="day text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.days}</div>
                    <div className="font-lato text-gray-500 text-small">Days</div>
                </div>
                <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                    <div className="hour text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.hours}</div>
                    <div className="font-lato text-gray-500 text-small">Hours</div>
                </div>
                <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                    <div className="minute text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.minutes}</div>
                    <div className="font-lato text-gray-500 text-small">Mins</div>
                </div>
                <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                    <div className="second text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.seconds}</div>
                    <div className="font-lato text-gray-500 text-small">Secs</div>
                </div>
            </div>
            <div className="bg-white mt-2.5 px-8 pt-6 pb-4 rounded-[10px] shadow-c-xs">
                <div className="text-heading-sm text-blue-300 line-clamp-2 min-h-8" title={item.attributes.title}>{item.attributes.title}</div>
                <div className="flex justify-between h-4 items-center mt-1">
                    <Rating rate={item.attributes.rate}/>
                </div>
                <div className="font-lato text-xsmall text-gray-500 mt-2">{item.attributes.weight} {item.attributes.unit}</div>
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
                    <div className="add-product">
                        <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>
                        <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                            <input type="number" value="1" className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center" />
                            <div className="flex flex-col justify-between">
                                <IconBox icon="icon-angle-small-up" iconClassName="up" size={10} />
                                <IconBox icon="icon-angle-small-down" iconClassName="down" size={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}