import Image from "next/image";
import { Badge } from "../ui/badge";
import StarRating from "../rating/StarRating";

const CompanyCard = ({ company }) => {
  return (
    <div className="group flex flex-col gap-y-3 hover:bg-slate-200 border dark:hover:bg-slate-600 border-slate-300 hover:border-slate-200 dark:hover:border-slate-600 rounded-lg py-4 px-8 cursor-pointer">
      {/* ลิงก์รูปจาก json ใช้งานไม่ได้แล้วจึงใช้เป็นรูปแบบ static */}
      <Image src="/waxo.png" width="80" height="80" alt="company" />
      <div className="flex gap-x-3">
        <Badge>{company.category}</Badge>
        <StarRating score={company.averageScore} />
      </div>
      <div className="flex gap-x-3 justify-between items-end">
        <h4 className="text-md md:text-lg font-bold">{company.name}</h4>
        <span className="text-sm md:text-md text-blue-500 group-hover:text-blue-400 group-hover:underline font-semibold">
          Read More
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
