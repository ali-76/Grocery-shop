import { productVerticalType } from "@/types/productVerticalType";
import { MiniProductCard } from "@/components";

interface Props {
  itemCards: productVerticalType[];
  title : string;
}

export function ProductVerticalList({ itemCards , title}: Props) {
  return (
    <>
        <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
        <div className="flex flex-col gap-6">
        {
            itemCards.map((itemCard: productVerticalType, index: number) => {
                return (
                    <MiniProductCard key={index} itemCard={itemCard}/>
                );
            })
        }
        </div>
    </>     
  );
}
