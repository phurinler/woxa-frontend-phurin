import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "src/data/companies.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    let companies = JSON.parse(jsonData);
    const categories = Array.from(new Set(companies.map((c) => c.category)));

    const { name, category } = req.query;

    if (name) {
      companies = companies.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (category) {
      const selectedCategories = Array.isArray(category)
        ? category.map((c) => c.toLowerCase())
        : [category.toLowerCase()];
      companies = companies.filter((c) =>
        selectedCategories.includes(c.category.toLowerCase())
      );
    }

    res.status(200).json({ companies, categories });
  } catch (err) {
    console.error("API fetch error:", err);
    res
      .status(500)
      .json({ companies: [], categories: [], error: "Internal Server Error" });
  }
}
