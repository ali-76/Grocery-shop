import Link from "next/link";

interface Props {
    icon : string;
    link? : string;
    linkClassname? : string;
    iconClassname? : string;
    size? : number
    title? : string;
    titleClassname? : string;
    badge? : number;
    hideOnMobile? : boolean;
}

export function IconBox({icon , link = '#' , linkClassname = '' , iconClassname = '' , size = 22 , title = '' , titleClassname = '' , badge = 0 , hideOnMobile = false} : Props) {
  return (
    <Link href={link} className={`flex items-center justify-center gap-2 cursor-pointer ${linkClassname}`}>

      {
        badge ?
        <div className="relative">
          <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
          <i className={`${icon} ${iconClassname} text-[${size}px]`}></i>
        </div>
        :
        <i className={`${icon} ${iconClassname} text-[${size}px]`}></i>

      }

      {
        title && <span className={`${hideOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassname}`}>{title}</span>
      }

    </Link>
  )
}
