import { useRef } from "react";
import fs from "fs";
import path from "path";
import CompanyListSection from "@/components/section/CompanyListSection";
import HeroSection from "@/components/section/HeroSection";
import WhyWaxoSection from "@/components/section/WhyWaxoSection";

export default function Home({ companies, categories }) {
  const filterRef = useRef();

  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-y-12 py-12 px-8 md:px-16 ">
      <HeroSection {...{ filterRef }} />
      <WhyWaxoSection />
      <hr />
      <CompanyListSection {...{ companies, categories, filterRef }} />
    </section>
  );
}

export async function getServerSideProps(context) {
  try {
    const filePath = path.join(process.cwd(), "src/data/companies.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    let companies = JSON.parse(jsonData);
    const categories = Array.from(new Set(companies.map((c) => c.category)));

    const { name, category } = context.query;

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

    return {
      props: {
        companies,
        categories,
        hasError: false,
      },
    };
  } catch (err) {
    console.error("fetching failed:", err);
    return {
      props: {
        companies: [],
        categories: [],
        hasError: true,
      },
    };
  }
}
