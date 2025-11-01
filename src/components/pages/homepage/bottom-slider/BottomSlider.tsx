import { ProductVerticalList } from "@/components/common";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "@/types/api/Response";
import { ProductType } from "@/types/api/Product";
import { getAllProductsApiCall } from "@/api/Product";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";


export function BottomSlider() {

    const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce : true,
    rootMargin : '100px'
  });

    const {data : recentlyAdded , refetch : refetchRecentlyAdded} = useQuery({
        queryKey : [getAllProductsApiCall.name , "recentlyAdded"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            pagination : {
                page : 1,
                pageSize : 3,
                withCount : false,
            }
        }),
        enabled : false,
    })

    const {data : isTopSelling , refetch : refetchIsTopSelling} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "isTopSelling"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            filters : {is_top_selling : {$eq : true}},
            pagination : {
                page : 1,
                pageSize : 3,
                withCount : false,
            }
        }),
        enabled : false
    })

    const {data : isTrending , refetch : refetchIsTrending} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "isTrending"],
        queryFn : () => getAllProductsApiCall({
           populate : ["thumbnail"],
           filters : {is_trending : {$eq : true}},
           pagination : {
            page : 1,
            pageSize : 3,
            withCount : false,
           }
        }),
        enabled : false,
    })

    const {data : topRated , refetch : refetchTopRated} = useQuery<ApiResponseType<ProductType>>({
        queryKey : [getAllProductsApiCall.name , "rated"],
        queryFn : () => getAllProductsApiCall({
            populate : ["thumbnail"],
            sort : ["rate:desc"],
            pagination : {
                // page : 1,
                // pageSize : 3,
                start : 0,
                limit : 3,
                withCount : false,
            }
        }),
        enabled : false,
    })    

    useEffect(() => {
        if(inView){
            refetchRecentlyAdded();
            refetchIsTopSelling();
            refetchIsTrending();
            refetchTopRated();
        }
    },[inView])

   return (
        <div ref={ref}>
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
        </div>
        
    );
}