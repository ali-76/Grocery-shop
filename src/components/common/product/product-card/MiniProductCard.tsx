import { ImageView } from "../../image-view";
import { Rating } from "../../ul";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  itemCard: EntityType<ProductType>;
}

export function MiniProductCard({ itemCard }: Props) {
  return (
    <div className="flex gap-3 lg:gap-5">
      <ImageView src={itemCard.attributes.thumbnail?.data.attributes.url} alt="item image" width={120} height={120} />
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-heading6 text-blue-300 mb-1 line-clamp-2 min-h-10" title={itemCard.attributes.title}>{itemCard.attributes.title}</div>
          <Rating rate={itemCard.attributes.rate} />
        </div>
        <div>
          {itemCard.attributes.sell_price ? 
            <div className="flex flex-col sm:flex-row min-h-10">
              <span className="text-heading5 text-green-200 mr-1">
                ${itemCard.attributes.sell_price}
              </span>
              <span className="text-heading-sm line-through text-gray-500">
                ${itemCard.attributes.price}
              </span>
            </div>
           :
            <span className="text-heading5 text-green-200 mr-1 min-h-10">
              ${itemCard.attributes.price}
            </span>
          }
        </div>
      </div>
    </div>
  );
}
