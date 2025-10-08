import { Banner, FeaturedCategories, IconBox, MiniProductSlider, Section, SimpleProductSlider } from "@/components";
import { popularProductMock } from "@/mock/popularProduct";

export default function Home() {
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
        <SimpleProductSlider items={popularProductMock} nextEl={".swiper-nav-right"} prevEl={".swiper-nav-left"}/>
      </Section>
    </main>
  );
}
