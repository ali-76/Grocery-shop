import { ProductVerticalList } from "@/components/common";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "@/types/api/Response";
import { ProductType } from "@/types/api/Product";
import { getAllProductsApiCall } from "@/api/Product";



export function BottomSlider() {

    const {data : recentlyAdded} = useQuery({
        queryKey : [getAllProductsApiCall.name , "recentlyAdded"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            pagination : {
                pageSize : 3
            }
        })
    })

    const {data : isTopSelling} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "isTopSelling"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            filters : {is_top_selling : {$eq : true}},
            pagination : {
                pageSize : 3,
            }
        })
    })

    const {data : isTrending} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "isTrending"],
        queryFn : () => getAllProductsApiCall({
           populate : ["thumbnail"],
           filters : {is_trending : {$eq : true}},
           pagination : {
            pageSize : 3
           }
        })
    })

    const {data : topRated} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "rated"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            sort : ["rate:desc"],
            pagination : {
                // page : 1,
                // pageSize : 3,
                start : 0,
                limit : 3,
            }
        })
    })

    console.log(isTopSelling?.data);


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
                {isTopSelling && <ProductVerticalList itemCards={isTopSelling} title={'Top Selling'}/>}
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                {isTrending && <ProductVerticalList itemCards={isTrending} title={'Trending Products'}/>}
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                {recentlyAdded && <ProductVerticalList itemCards={recentlyAdded} title={'Recently Added'}/>}
            </SwiperSlide>

            <SwiperSlide className="mt-[47px]">
                {topRated && <ProductVerticalList itemCards={topRated} title={'Top Rated'}/>}
            </SwiperSlide>
            
        </Swiper>
    );
}