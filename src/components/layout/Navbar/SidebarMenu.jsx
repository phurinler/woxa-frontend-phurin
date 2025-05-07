import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { SunDim, Moon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Menus } from "@/constants/menu";
import { Toggle } from "@/components/ui/toggle";

const SidebarMenu = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Sidebar className="md:hidden">
      <SidebarHeader />
      <SidebarContent className="p-6">
        <SidebarGroup>
          <Toggle variant="outline" onPressedChange={toggleTheme}>
            {isDarkMode ? <Moon /> : <SunDim />}
          </Toggle>
        </SidebarGroup>
        <SidebarGroup className="gap-y-4">
          {Menus.map((menu) => (
            <a
              key={menu.title}
              href={menu.url}
              className={cn(
                "inline-flex gap-x-2 font-medium",
                pathname === menu.url && "text-teal-400"
              )}
            >
              <menu.icon />
              <span>{menu.title}</span>
            </a>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default SidebarMenu;
