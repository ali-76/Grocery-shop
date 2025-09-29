import Image from "next/image";

interface Props {
  src : string;
  alt : string;
  width : number;
  height : number;
  classname? : string;
  priority? : boolean

}

export function ImageView({src , alt , width , height , classname = "" , priority = false} : Props) {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classname}
      priority={priority}
    />
  )
}