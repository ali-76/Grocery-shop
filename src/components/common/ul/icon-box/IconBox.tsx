interface Props {
    icon : string;
    iconClassname? : string;
    size? : number
    title? : string;
    titleClassname? : string;
}

export function IconBox({icon , iconClassname = '' , size = 22 , title = '' , titleClassname = ''} : Props) {
  return (
    <>
        <i className={`${icon} ${iconClassname} text-[${size}px]`}></i>

        {
            title && <span className={titleClassname}>{title}</span>
        }
    </>
  )
}
