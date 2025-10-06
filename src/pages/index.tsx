import { Banner, FeaturedCategories, Section } from "@/components";

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
    </main>
  );
}
