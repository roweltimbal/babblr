export type BlogCategory =
  | "tech-and-games"
  | "sports-and-fitness"
  | "food-and-life";

export type Blog = {
   _id: string;
  slug: string;
  title: string;
  author: string;
  category: BlogCategory;
  image: string;
  excerpt: string;
  body: string;
  datePublished: string;
};

export type BlogDB = {
  _id: string;
  slug: string;
  title: string;
  author: string;
  category: BlogCategory;
  image: string;
  excerpt: string;
  body: string;
  datePublished: Date;
};
