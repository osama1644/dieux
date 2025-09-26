export interface SectionsHeader {
  title: string;
  subtitle: string;
}
export interface Faqs {
  question: string;
  answer: string;
}
/////////////// interfaces for categories
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
export interface Pagination {
  has_next: boolean;
  has_prev: boolean;
  next_num: number | null;
  page: number;
  pages: number;
  prev_num: number | null;
}
export interface CategoriesResponse {
  count: number;
  data: Category[];
  pagination: Pagination;
  success: boolean;
}
/////// end of categories

///// start of products iterfaces
export interface Seo {
  canonical_url?: string | null;
  description?: string;
  keywords?: string;
  slug?: string;
  title?: string;
}
export interface PurchaseLink {
  color?: string | null;
  logo?: string | null;
  name: string;
  url: string;
}
export interface ProductDetail {
  key: string;
  value: string;
}
export interface Product {
  attributes: string[];
  categories: Category[];
  created_at: string;
  description: string;
  id: string;
  images: string[];
  main_image: string;
  notes: string;
  price: string;
  product_details: ProductDetail[];
  purchase_links: PurchaseLink[];
  rate: number;
  seo: Seo;
  subTitle: string;
  title: string;
  total_rate: number;
}
export interface ProductsResponse {
  count: number;
  data: Product[];
  pagination: Pagination;
  success: boolean;
}
export interface OneProduct {
  data: Product;
  success: boolean;
}
// blogs interfaces
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  created_at: string;
  time_ago: string;
  tags: string[];
  seo: {
    canonical_url: string | null;
    description: string;
    keywords: string;
  };
}
export interface Blogs {
  count: number;
  data: BlogPost[];
  pagination: Pagination;
  success: boolean;
}
export interface OneBlog {
  data: BlogPost;

  success: boolean;
}
