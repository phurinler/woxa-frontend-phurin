import { useState } from "react";
import CompanyCard from "@/components/card/CompanyCard";
import ListPagination from "@/components/pagination/ListPagination";
import { pageLimit } from "@/constants/config";
import { useRouter } from "next/router";
import { formatSearchedFilter } from "@/lib/utils";

const CompanyList = ({ companies: data }) => {
  const router = useRouter();
  const query = router.query;
  const search = formatSearchedFilter(query);
  const [page, setPage] = useState(1);
  const start = (page - 1) * pageLimit;
  const end = start + pageLimit;
  const companies = data.slice(start, end);

  return (
    <div className="flex flex-col gap-y-4 col-span-2">
      <div>
        <p className="text-sm md:text-md font-medium text-slate-500">
          Searching for: {search}
        </p>
      </div>
      {companies.map((company) => (
        <CompanyCard key={company.id} {...{ company }} />
      ))}
      <ListPagination total={data?.length} {...{ page, setPage }} />
    </div>
  );
};

export default CompanyList;
