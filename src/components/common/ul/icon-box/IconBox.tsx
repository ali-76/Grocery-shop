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
    path? : number
}

export function IconBox({icon , link = '#' , linkClassname = '' , iconClassname = '' , size = 22 , title = '' , titleClassname = '' , badge = 0 , hideOnMobile = false , path = 0} : Props) {

  let span = [];

  for(let i = 1 ; i <= path ; i++){
    span.push(<span className={`path${i}`}></span>)
  }



  return (
    <Link href={link} className={`flex items-center cursor-pointer ${linkClassname}`}>

      {
        badge ?
        <div className="relative">
          <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
          <i className={`${icon} ${iconClassname} text-[${size}px]`}>{span}</i>
        </div>
        :
        <i className={`${icon} ${iconClassname} text-[${size}px]`}>{span}</i>

      }

      {
        title && <span className={`${hideOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassname}`}>{title}</span>
      }

    </Link>
  )
}
