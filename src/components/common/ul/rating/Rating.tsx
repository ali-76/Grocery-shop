import { Star } from "./Star";

interface RatingProps {
  rate: number;
  size?: number;           // default : 16
  max?: number;            // number of stars - default : 5
  gap?: number;            // gap between stars - default : 
  showNumber?: boolean;    // Show rate value
  ariaLabel?: string;
}

export function Rating({
  rate,
  size = 16,
  max = 5,
  gap = 2,
  showNumber = true,
  ariaLabel,
}: RatingProps) {
  const clampedRate = Math.max(0, Math.min(max, rate));

  const indices = Array.from({ length: max }, (_, i) => i);

  const getFill = (idx: number) => {
    const raw = clampedRate - idx;
    const clamped = Math.max(0, Math.min(1, raw)) * 100;
    return clamped;
  };

  const defaultAria = `Rating: ${clampedRate.toFixed(1)} out of ${max}`;

  return (
    <div className="flex items-center" aria-label={ariaLabel ?? defaultAria}>
      <ul className="flex p-0 m-0 list-none" style={{ gap: `${gap}px`}}>
        {indices.map((idx) => {
          const fill = getFill(idx);
          return (
            <li key={idx} className="inline-flex items-center">
              <Star fillPercent={fill} size={size} idx={idx} />
            </li>
          );
        })}
      </ul>

      {showNumber && (
        <div className="text-xsmall text-gray-500 font-lato mr-2 ml-2">
          ( {clampedRate.toFixed(1)} )
        </div>
      )}
    </div>
  );
}

// import { IconBox } from "../icon-box";

// interface Props  {
//   rate : number;
//   size? : number;
// }

// export function Rating({rate , size = 12}: Props) {

  // let star = [];
  // for(let i = 0 ; i < rate ; i++){
  //   star.push(<li className="flex cursor-pointer"><IconBox icon="icon-star-full" size={size}></IconBox></li>)
  // };
  
  // while(star.length < 5){
  //   star.push(<li className="flex cursor-pointer"><IconBox icon="icon-star-empty" size={size}></IconBox></li>)
  // }

  // return (
  //   <>
  //     <ul className="flex gap-1">
  //       {star}
  //     </ul>
  //     <div className="text-xsmall text-gray-500 font-lato">( {rate.toFixed(1)} )</div>
  //   </>
  // );
// }