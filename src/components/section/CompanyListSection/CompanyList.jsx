import CompanyCard from "@/components/card/CompanyCard";

const CompanyList = ({ search = "apple, fintech, broker" }) => {
  return (
    <div className="flex flex-col gap-y-4 col-span-2">
      <div>
        <p className="font-medium text-slate-500">Searching for: {search}</p>
      </div>
      <CompanyCard />
    </div>
  );
};

export default CompanyList;
