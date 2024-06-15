export enum CropType {
  INLINE_SMALL = "inline_small",
  ARTIKEL_TOP = "artikel_top",
  STAAND = "staand",
  LIGGEND_BREED = "liggend_breed",
  LIGGEND = "liggend",
  LIGGEND_BREED_NIEUWSOPENING = "liggend_breed_nieuwsopening",
  SQUARE_MEDIUM = "square_medium",
  SQUARE_SMALL = "square_small",
}

export interface ImageCrop {
  type: string;
  height: number;
  width: number;
  ratio: string;
  path: string;
}

export interface NavLinkType {
  href: string;
  label: string;
}

export interface iImage {
  type: CropType;
  height: number;
  width: number;
  path: string;
}

export type Article = {
  title: string;
  aangemaaktDatum: string;
  image: string;
  urlAlias: string;
  chapeau: string;
  showVideoIcon: boolean;
};

export interface BundleData {
  bundelItems: Article[];
}
