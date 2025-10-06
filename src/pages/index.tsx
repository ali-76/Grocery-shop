import { Banner, Section } from "@/components";

export default function Home() {
  return (
    <main>
      <Section>
        <Banner title={"Don’t miss amazing grocery deals"} subTitle={"Sign up for the daily newsletter"} img={"/assets/images/fresh-apples.png"} bgImg={"/assets/images/banner_bg.png"}/>
      </Section>
    </main>
  );
}
