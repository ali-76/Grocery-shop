import { SimpleProductCard } from "@/components/common";
import { simpleProductType } from "@/types/simpleProductType";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props  {
  items : simpleProductType[];
}

export function BestSellerSliders({items} : Props) {
   return (
        <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay = {true}
        loop = {true}
        breakpoints = {{
            640: {
                slidesPerView: 3,
                spaceBetween: 17
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 18
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 22
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 22
            },
        }}
        >
            
            {
                items.map((itemCard : simpleProductType , index : number) => {
                    return(
                        <SwiperSlide key={index}>
                            <SimpleProductCard item={itemCard}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}