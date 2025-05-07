import { useState } from "react";
import { useRouter } from "next/router";
import ListPagination from "@/components/pagination/ListPagination";
import EmptyAlert from "@/components/empty/EmptyAlert";
import ErrorAlert from "@/components/error/errorAlert";
import CompanyDrawer from "@/components/drawer/CompanyDrawer";
import { pageLimit } from "@/constants/config";
import { formatSearchedFilter } from "@/lib/utils";

const CompanyList = ({ companies: data, error }) => {
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
          กำลังค้นหา: {search}
        </p>
      </div>
      {error ? (
        <ErrorAlert {...{ error }} />
      ) : companies.length === 0 ? (
        <EmptyAlert />
      ) : (
        companies.map((company) => (
          <CompanyDrawer key={company.id} {...{ company }} />
        ))
      )}
      <ListPagination total={data?.length} {...{ page, setPage }} />
    </div>
  );
};

export default CompanyList;
