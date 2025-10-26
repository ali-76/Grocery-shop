import { SimpleProductCard } from "@/components/common";
import { ProductType } from "@/types/api/Product";
import { EntityType } from "@/types/api/Response";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props  {
  items : Array<EntityType<ProductType>>;
  nextEl? : string;
  prevEl? : string;
}

export function SimpleProductSlider({items , nextEl , prevEl} : Props) {
  
   return (
        <Swiper
        modules={[Autoplay , Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
              items && items.map((itemCard : EntityType<ProductType> , index : number) => {                
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