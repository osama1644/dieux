export async function getBoxes() {
  const res = await fetch("https://api.dieuxeg.com/api/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
