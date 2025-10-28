import { MiniProductCard } from "@/components";
import ApiResponseType, { EntityType } from "@/types/api/Response";
import { ProductType } from "@/types/api/Product";

interface Props {
  itemCards: ApiResponseType<ProductType>;
  title : string;
}

export function ProductVerticalList({ itemCards , title}: Props) {
  return (
    <>
        <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
        <div className="flex flex-col gap-6">
        {
            itemCards.data.map((itemCard: EntityType<ProductType>, index: number) => {
                return (
                    <MiniProductCard key={index} itemCard={itemCard}/>
                );
            })
        }
        </div>
    </>     
  );
}
