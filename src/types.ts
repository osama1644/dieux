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
