import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/lib/providers/ThemeProvider";
import { SunDim, Moon, Menu } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import PageLink from "./PageLink";
import { Toggle } from "@/components/ui/toggle";
import { Menus } from "@/constants/menu";

const Navbar = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section className="w-full backdrop-blur-sm border border-b-slate-500 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto w-full flex justify-between md:justify-evenly xl:justify-between items-center px-6 md:px-0">
        <Link href="/" className="py-4 md:py-0">
          <Image src="/waxo.png" width="100" height="36" alt="logo" />
        </Link>

        <div className="hidden md:flex justify-center gap-x-12 text-xl font-semibold">
          {Menus.map((menu) => (
            <PageLink
              key={menu.title}
              title={menu.title}
              url={menu.url}
              {...{ pathname }}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <Toggle variant="outline" onPressedChange={toggleTheme}>
            {isDarkMode ? <Moon /> : <SunDim />}
          </Toggle>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
          <Menu />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
