import { Banner, BottomSlider, DealsOfTheDaysSlider, FeaturedCategories, IconBox, MiniProductSlider, Section, SimpleProductSlider } from "@/components";
import { dealsOfTheDaysMock } from "@/mock/dealsOfTheDays";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsApiCall } from "@/api/Product";
import ApiResponseType from "@/types/api/Response";
import { ProductType } from "@/types/api/Product";

export default function Home() {

  const {data : PopularProducts} = useQuery<ApiResponseType<ProductType>>({queryKey : [getAllProductsApiCall.name , 'popular_product'] , queryFn : () => getAllProductsApiCall({populate : ["thumbnail" , "categories"] ,filters : {is_popular : true}})})
  const {data : PopularFruit} = useQuery<ApiResponseType<ProductType>>({queryKey : [getAllProductsApiCall.name , 'popular_fruit' ] , queryFn : () => getAllProductsApiCall({populate : ["thumbnail" , "categories"] ,filters : {is_popular_fruit : true}})})
  
  return (
    <main>
      <Section>
        <Banner title={"Don’t miss amazing grocery deals"}
        subTitle={"Sign up for the daily newsletter"}
        img={"/assets/images/fresh-apples.png"}
        bgImg={"/assets/images/banner_bg.png"}/>
      </Section>

      <Section className="mb-[75px]">
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
        </div>
        <FeaturedCategories />
      </Section>

      <Section>
        <MiniProductSlider />
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Products</h2>
          <div className="flex items-center gap-3">
            <IconBox icon="icon-angle-small-left" iconClassName="swiper-nav-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white" size={24} />
            <IconBox icon="icon-angle-small-right" iconClassName="swiper-nav-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white" size={24} />
          </div>
        </div>
        {
          PopularProducts && <SimpleProductSlider items={PopularProducts.data} nextEl={".swiper-nav-right"} prevEl={".swiper-nav-left"}/>
        }
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
          <div className="flex items-center gap-3">
            <IconBox icon="icon-angle-small-left" iconClassName="swiper-nav-left2 cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white" size={24} />
            <IconBox icon="icon-angle-small-right" iconClassName="swiper-nav-right2 cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white" size={24} />
          </div>
        </div>
        {
          PopularFruit && <SimpleProductSlider items={PopularFruit.data} nextEl={".swiper-nav-right2"} prevEl={".swiper-nav-left2"}/>
        }
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best Sellers</h2>
        </div>
        <div className="flex gap-[24px]">
          <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden md:flex">
            <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
            <a href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
              <div className="text-xsmall text-white">Shop now</div>
              <i className="icon-arrow-small-right text-[24px]"></i>
            </a>
          </div>
          {/* <BestSellerSliders items={bestSellersProductMock}/> */}
        </div>
      </Section>
      
      <Section>
        <div className="flex justify-between items-center">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals Of The Days</h2>
          <a className="flex items-center" href="#">All Deals <i className="icon-angle-small-right text-[24px]"></i></a>
        </div>
        <DealsOfTheDaysSlider items={dealsOfTheDaysMock}/>
      </Section>

      <Section>
        <BottomSlider/>
      </Section>
    </main>
  );
}
