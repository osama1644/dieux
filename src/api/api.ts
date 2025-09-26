export async function getBoxes() {
  const res = await fetch("https://api.dieuxeg.com/api/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
export async function getProducts() {
  const res = await fetch("https://api.dieuxeg.com/api/products");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
export async function getOneProduct(id: string) {
  const res = await fetch(`https://api.dieuxeg.com/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
export async function getAllBlogs() {
  const res = await fetch(`https://api.dieuxeg.com/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
export async function getOneBlog(id: string) {
  const res = await fetch(`https://api.dieuxeg.com/api/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to get the blog");
  return res.json();
}
