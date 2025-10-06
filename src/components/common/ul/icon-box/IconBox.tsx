import Link from "next/link";

interface Props {
    icon : string;
    link? : string;
    linkClassName? : string;
    iconClassName? : string;
    size? : number; // px
    title? : string;
    titleClassName? : string;
    badge? : number;
    hideOnMobile? : boolean;
    path? : number // number of decorative spans
}

export function IconBox({icon , link , linkClassName = '' , iconClassName = '' , size = 22 , title = '' , titleClassName = '' , badge = 0 , hideOnMobile = false , path = 0} : Props) {

  let span = [];

  for(let i = 1 ; i <= path ; i++){
    span.push(<span key={i} className={`path${i}`}></span>)
  }


  if(link){
    return (
      <Link href={link} className={`flex items-center cursor-pointer ${linkClassName}`}>
        {
          badge ?
          <div className="relative">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
            <i className={`${icon} ${iconClassName}`} style={{ fontSize: `${size}px`, lineHeight: 1 }} >{span}</i>
          </div>
          :
          <i className={`${icon} ${iconClassName}`} style={{ fontSize: `${size}px`, lineHeight: 1 }}>{span}</i>
  
        }
        {
          title && <span className={`ml-1 ${hideOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassName}`}>{title}</span>
        }
      </Link>
    )
  }else{
    return(
      <div className="flex items-center">
        {
          badge ?
          <div className="relative">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
            <i className={`${icon} ${iconClassName}`} style={{ fontSize: `${size}px`, lineHeight: 1 }} >{span}</i>
          </div>
          :
          <i className={`${icon} ${iconClassName}`} style={{ fontSize: `${size}px`, lineHeight: 1 }}>{span}</i>
        }
        {
          title && <span className={`ml-1 ${hideOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassName}`}>{title}</span>
        }
      </div>
    )
  }
}
