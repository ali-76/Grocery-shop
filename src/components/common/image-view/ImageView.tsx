import Image from "next/image";

interface Props {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export function ImageView({src = "/assets/images/Logo.png" , alt , width , height , className = "" , priority = false , fill = false}: Props) {

  const imageSrc = src ? (src.startsWith("/uploads") ? 'https://nest.navaxcollege.com'+src : src) : "/assets/images/Logo.png"

  if (fill) {
    return (
      <Image
        src={imageSrc} alt={alt} fill className={className} priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageSrc} alt={alt} width={width} height={height} className={className} priority={priority}
    />
  );
}