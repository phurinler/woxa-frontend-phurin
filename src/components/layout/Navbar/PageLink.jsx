import { cn } from "@/lib/utils";
import Link from "next/link";

const PageLink = ({ title, url = "/", pathname }) => {
  return (
    <Link
      href={url}
      className={cn(
        "py-4 hover:border-b-4 hover:border-slate-500 active:border-b-4 hover:text-slate-500 active:border-teal-400 active:text-teal-400 transition-all",
        pathname === url && "border-b-4 border-teal-400 text-teal-400"
      )}
    >
      {title}
    </Link>
  );
};

export default PageLink;
