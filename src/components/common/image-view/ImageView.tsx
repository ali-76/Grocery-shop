import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export function ImageView({src , alt , width , height , className = "" , priority = false , fill = false}: Props) {

  if(!src)    src = "/assets/images/Logo.png"

  const isRemote = src.substring(0,8) === "/uploads";

  if (fill) {
    return (
      <Image
        src={`${isRemote ? 'https://nest.navaxcollege.com'+src : src}`} alt={alt} fill className={className} priority={priority}
      />
    );
  }

  return (
    <Image
      src={`${isRemote ? 'https://nest.navaxcollege.com'+src : src}`} alt={alt} width={width} height={height} className={className} priority={priority}
    />
  );
}