import { SimpleProductCard } from "@/components/common";
import { simpleProductType } from "@/types/simpleProductType";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props  {
  items : simpleProductType[];
  nextEl? : string;
  prevEl? : string;
}

export function SimpleProductSlider({items , nextEl , prevEl} : Props) {
   return (
        <Swiper
        modules={[Autoplay , Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay = {true}
        loop = {true}
        navigation = {{
            nextEl : nextEl,
            prevEl : prevEl
        }}
        breakpoints = {{
          768: {
            slidesPerView: 3,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 22
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24
          }
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