import { ProductDealsCard, SimpleProductCard } from "@/components/common";
import { simpleProductType } from "@/types/simpleProductType";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props  {
  items : simpleProductType[];
}

export function DealsOfTheDaysSlider({items} : Props) {
   return (
        <Swiper
        modules={[Autoplay , Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop = {true}
        breakpoints = {{
          768: {
            slidesPerView: 2,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 22
          }
        }}
        >
            
            {
                items.map((itemCard : simpleProductType , index : number) => {
                    return(
                        <SwiperSlide key={index} className="mt-[47px]">
                            <ProductDealsCard item={itemCard}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}