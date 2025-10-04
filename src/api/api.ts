import axios from "axios";

export async function getBoxes() {
  try {
    const res = await axios.get("https://api.dieuxeg.com/api/categories/with-count");
    return res.data;
  } catch {
    throw new Error("Failed to fetch categories");
  }
}

export async function getProducts() {
  try {
    const res = await axios.get("https://api.dieuxeg.com/api/products");
    return res.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}

export async function getOneProduct(id: string) {
  try {
    const res = await axios.get(`https://api.dieuxeg.com/api/products/${id}`);
    return res.data;
  } catch {
    throw new Error("Failed to fetch product");
  }
}

export async function getAllBlogs() {
  try {
    const res = await axios.get("https://api.dieuxeg.com/api/blogs");
    return res.data;
  } catch {
    throw new Error("Failed to fetch blogs");
  }
}

export async function getOneBlog(id: string) {
  try {
    const res = await axios.get(`https://api.dieuxeg.com/api/blogs/${id}`);
    return res.data;
  } catch {
    throw new Error("Failed to get the blog");
  }
}
export async function getProductsByCategory(id: string) {
  try {
    const res = await axios.get(`https://api.dieuxeg.com/api/categories/${id}/products`);
    return res.data;
  } catch {
    throw new Error("Failed to get the blog");
  }
}

export async function searchAll(query: string) {
  try {
    const res = await axios.get(`https://api.dieuxeg.com/api/search`, {
      params: { q: query }, 
    });
    return res.data;
  } catch {
    throw new Error("Failed to search");
  }
}

