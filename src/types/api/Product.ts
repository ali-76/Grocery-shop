import { CategoryType } from "./Category";
import { ImageType } from "./Image";
import { EntityType, PopulateType } from "./Response";

export interface ProductType {
  title: string;
  description: string | null;
  quantity: number;
  price: number;
  sell_price: number | null;
  discount_expire_date: string | null;
  rate: number;
  weight: number | null;
  is_popular: boolean;
  is_top_selling: boolean;
  is_trending: boolean;
  SKU: string | null;
  label: string | null;
  unit: string;
  total: number | null;
  sold: number | null;
  is_popular_fruit: boolean | null;
  is_best_seller: boolean | null;
  thumbnail?: {
    data : EntityType<ImageType>
  };
  categories?: PopulateType<CategoryType>;
  gallery?: PopulateType<galleryType>
}

export interface galleryType {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           PurpleFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: null;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
    Webp = ".webp",
}

export interface PurpleFormats {
    thumbnail: Small;
}

export interface Small {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageWebp = "image/webp",
}

export enum Provider {
    Local = "local",
}