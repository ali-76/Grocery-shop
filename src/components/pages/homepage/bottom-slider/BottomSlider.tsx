import { ProductVerticalList } from "@/components/common";
import { simpleProductType } from "@/types/simpleProductType";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { productVerticalType } from "@/types/productVerticalType";
import {topSellingMock} from '@/mock/topSelling';
import {trendingProductMock} from '@/mock/trendingProduct';
import {recentlyAddedMock} from '@/mock/recentlyAdded';
import {topRatedMock} from '@/mock/topRated';



export function BottomSlider() {

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
                spaceBetween: 18
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 22
            }
        }}
        >

            <SwiperSlide className="mt-[47px]">
                <ProductVerticalList itemCards={topSellingMock} title={'Top Selling'}/>
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                <ProductVerticalList itemCards={trendingProductMock} title={'Trending Products'}/>
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                <ProductVerticalList itemCards={recentlyAddedMock} title={'Recently Added'}/>
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                <ProductVerticalList itemCards={topRatedMock} title={'Top Rated'}/>
            </SwiperSlide>
            
        </Swiper>
    );
}