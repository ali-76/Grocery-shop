import Link from "next/link";
import { ImageView } from "../../image-view";

export function Logo() {
  return (
    <Link href={"/"}>
        <ImageView 
            src = "/assets/images/Logo.png"
            alt = "logo"
            width = {242}
            height = {66}
            classname = {"w-[117px] lg:w-[242px]"}
            priority = {true}
        />
    </Link>
  )
}
