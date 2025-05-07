import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListPagination from "@/components/pagination/ListPagination";
import EmptyAlert from "@/components/empty/EmptyAlert";
import ErrorAlert from "@/components/error/errorAlert";
import CompanyDrawer from "@/components/drawer/CompanyDrawer";
import { pageLimit } from "@/constants/config";
import { formatSearchedFilter } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingState = () => (
  <Skeleton className="h-[132.33px] md:h-[136.33px] w-full rounded-lg" />
);

const CompanyListContent = ({ companies }) => (
  <>
    {companies.map((company) => (
      <CompanyDrawer key={company.id} {...{ company }} />
    ))}
  </>
);

const CompanyList = ({ companies: data, error }) => {
  const router = useRouter();
  const query = router.query;
  const search = formatSearchedFilter(query);

  const [page, setPage] = useState(1);
  const start = (page - 1) * pageLimit;
  const end = start + pageLimit;
  const companies = data.slice(start, end);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [router]);

  const renderContent = () => {
    if (isLoading) return <LoadingState />;
    if (error) return <ErrorAlert {...{ error }} />;
    if (companies.length === 0 && !error) return <EmptyAlert />;
    return <CompanyListContent companies={companies} />;
  };

  return (
    <div className="flex flex-col gap-y-4 col-span-2">
      <div>
        <p className="text-sm md:text-md font-medium text-slate-500">
          กำลังค้นหา: {search}
        </p>
      </div>
      {renderContent()}
      <ListPagination total={data?.length} {...{ page, setPage }} />
    </div>
  );
};

export default CompanyList;
