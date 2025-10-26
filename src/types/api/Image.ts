//TODO define type previewUrl & provider_metadata

export interface ImageType {
    name:              string;
    alternativeText?:   string;
    caption?:           string;
    width:             number;
    height:            number;
    formats?:           Format;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl?:        any;
    provider:          string;
    provider_metadata?: any;
}

interface Format {
    thumbnail: Thumbnail;
    small?: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}
