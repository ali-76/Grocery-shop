interface Props  {
  title? : string;
  price : number;
  sale_price? : number
}

export function Badge({title , price , sale_price}: Props) {
    let percentage:number = 0;
    let badgeTitle = title;

    if(sale_price){
        percentage = Math.round((price - sale_price) / price * 100)

        if(percentage > 50){
            badgeTitle = "Hot"
        }
    }

    return(
        <div>
            {
                badgeTitle ?
                    <div className={`badge ${badgeTitle.toLowerCase() == "hot" ? 'badge--hot' : 'badge--sale'} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{badgeTitle}</div>
                : sale_price ?
                <div className={`badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{percentage} %</div>
                :
                <></>
            }

        </div>
    )
}