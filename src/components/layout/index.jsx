import Footer from "./Footer";
import Navbar from "./navbar";
import SidebarMenu from "./Navbar/SidebarMenu";

const Layout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col relative w-full min-h-screen h-full bg-slate-50 dark:bg-slate-800">
        <Navbar />
        <SidebarMenu />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
