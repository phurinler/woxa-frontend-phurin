import Image from "next/image";
import { Badge } from "../ui/badge";
import StarRating from "../rating/StarRating";

const CompanyCard = () => {
  return (
    <div className="flex flex-col gap-y-3 hover:bg-slate-200 border dark:hover:bg-slate-600 border-slate-300 hover:border-slate-200 dark:hover:border-slate-600 rounded-lg py-4 px-8 cursor-pointer">
      <Image src="/hero.svg" width="80" height="80" alt="company" />
      <div className="flex gap-x-3">
        <Badge>Fintech</Badge>
        <StarRating score={4.5} />
      </div>
      <div className="flex gap-x-3 items-end">
        <h4 className="text-lg font-bold">Company Name</h4>
      </div>
    </div>
  );
};

export default CompanyCard;
