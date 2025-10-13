interface Props  {
  title? : string;
  price : number;
  sale_price? : number
}

export function Badge({title , price , sale_price}: Props) {
    let x;
    if(sale_price){
        x = Math.round(100 - (price / sale_price * 100))
    }

    return(
        <div>
            {
                title ?
                    <div className={`badge ${title.toLowerCase() == "hot" ? 'badge--hot' : 'badge--sale'} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{title}</div>
                : sale_price ?
                <div className={`badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{}</div>
                :
                <></>
            }

        </div>
    )
}