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
  { name: "inStock" },
  { name: "outOfStock" },
  { name: "limitedStock" },
];

export const orders = [
  { name: "newest", value: "newest" },
  { name: "lowToHigh", value: "lowToHigh" },
  { name: "highToLow", value: "highToLow" },
];

export type SizeType = keyof typeof txKeys.services.shop.sizes;
export const sizes: SizeType[] = ["3xl", "2xl", "xl", "l", "m", "s", "xs"];
