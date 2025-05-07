import Head from "next/head";
import EmptyPage from "@/components/empty/EmptyPage";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us - Waxo App</title>
        <meta
          name="description"
          content="Learn more about Waxo App and our mission."
        />
        <meta name="keywords" content="about us, our story, company info" />
        <meta name="author" content="Waxo App" />
      </Head>
      <EmptyPage />
    </>
  );
}
