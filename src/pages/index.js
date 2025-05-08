import { useRef } from "react";
import Head from "next/head";
import CompanyListSection from "@/components/section/CompanyListSection";
import HeroSection from "@/components/section/HeroSection";
import WhyWaxoSection from "@/components/section/WhyWaxoSection";

export default function HomePage({ companies, categories, error }) {
  const filterRef = useRef();

  return (
    <>
      <Head>
        <title>Home - Waxo App</title>
        <meta
          name="description"
          content="Welcome to Waxo App - Explore Finance Companies."
        />
        <meta name="keywords" content="Waxo App, homepage, nextjs" />
        <meta name="author" content="Waxo App" />
      </Head>

      <section className="max-w-7xl w-full mx-auto flex flex-col gap-y-12 py-12 px-8 md:px-16 ">
        <HeroSection {...{ filterRef }} />
        <WhyWaxoSection />
        <hr />
        <CompanyListSection {...{ companies, categories, filterRef, error }} />
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const queryParams = new URLSearchParams(query).toString();

  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  const url = `${baseUrl}/api/companies?${queryParams}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: {
        companies: data.companies,
        categories: data.categories,
        error: data.error || null,
      },
    };
  } catch (err) {
    console.error("Fetch failed:", err);
    return {
      props: {
        companies: [],
        categories: [],
        error: "Failed to fetch companies.",
      },
    };
  }
}
