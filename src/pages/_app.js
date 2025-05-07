import "@/styles/globals.css";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </ThemeProvider>
  );
}
