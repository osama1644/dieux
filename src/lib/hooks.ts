// hooks/useApi.ts
"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getBoxes,
  getProducts,
  getOneProduct,
  getAllBlogs,
  getOneBlog,
  getProductsByCategory,
  searchAll,
  submitContactForm,
} from "@/api/api";
import {
  Blogs,
  CategoriesResponse,
  OneBlog,
  OneProduct,
  ProductsResponse,
  SearchQuery,
} from "@/types";

export const useBoxes = () => {
  return useQuery<CategoriesResponse>({
    queryKey: ["boxes"],
    queryFn: getBoxes,
  });
};

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
export const useOneProduct = (id: string) => {
  return useQuery<OneProduct>({
    queryKey: ["product", id],
    queryFn: () => getOneProduct(id),
  });
};

export const useBlogs = () => {
  return useQuery<Blogs>({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
};

export const useOneBlog = (id: string) => {
  return useQuery<OneBlog>({
    queryKey: ["blog", id],
    queryFn: () => getOneBlog(id),
  });
};
export const useGetProductByCategory = (id: string) => {
  return useQuery<ProductsResponse>({
    queryKey: ["blog", id],
    queryFn: () => getProductsByCategory(id),
  });
};
export const useSearch = (query: string) => {
  return useQuery<SearchQuery>({
    queryKey: ["product", query],
    queryFn: () => searchAll(query),
  });
};
export const useSubmitContact = () => {
  return useMutation({
    mutationFn: submitContactForm,
  });
};

