interface Props  {
  title : string | null;
  price : number;
  sale_price : number | null;
}

export function Badge({title , price , sale_price}: Props) {
    let percentage:number = 0;


    if(sale_price){
        percentage = Math.round((price - sale_price) / price * 100)
    }

    return(
        <div>
            {
                title ?
                    <div className={`badge ${title.toLowerCase() == "hot" ? 'badge--hot' : 'badge--sale'} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{title}</div>
                : (sale_price && <div className={`badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{percentage} %</div> )
            }
        </div>
    )
}