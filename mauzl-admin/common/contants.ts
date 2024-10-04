import txKeys from "@/i18n/translations";

export const services = [
  { name: "home", link: "/" },
  { name: "shop", link: "/shop" },
  { name: "blog", link: "/blog" },
  { name: "contact", link: "/contact" },
];

export const categories = [
  { name: "hoodie" },
  { name: "tshirt" },
  { name: "sweater" },
  { name: "longsleeves" },
];

export const status = [
  { name: "onSale" },
  { name: "inStock" },
  { name: "outOfStock" },
  { name: "onBackOrder" },
];

export const sort = [
  { name: "popularity" },
  { name: "averageRating" },
  { name: "latest" },
  { name: "lowToHigh" },
  { name: "highToLow" },
];

export type sizeType = keyof typeof txKeys.services.shop.sizes;
export const sizes: sizeType[] = ["3xl", "2xl", "xl", "l", "m", "s", "xs"];
