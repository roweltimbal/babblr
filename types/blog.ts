export type BlogCategory =
  | "tech-and-games"
  | "sports-and-fitness"
  | "food-and-life";

export type Blog = {
  id: number;
  slug: string;
  title: string;
  category: BlogCategory;
  image: string;
  excerpt: string;
  body: string;
  datePublished: string;
};
