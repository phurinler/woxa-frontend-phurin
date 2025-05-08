import Head from "next/head";
import EmptyPage from "@/components/empty/EmptyPage";

export default function CompanyPage() {
  return (
    <>
      <Head>
        <title>Company - Waxo App</title>
        <meta
          name="description"
          content="Get to know our company and values."
        />
        <meta name="keywords" content="company, values, mission, team" />
        <meta name="author" content="Waxo App" />
      </Head>
      <EmptyPage />
    </>
  );
}
