import { ProductDealsCard } from "@/components/common";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props  {
  items : Array<EntityType<ProductType>>;
}

export function DealsOfTheDaysSlider({items} : Props) {
  return (
    <Swiper
    modules={[Autoplay]}
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
        items.map((itemCard : EntityType<ProductType> , index : number) => {
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