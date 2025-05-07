import CompanyCard from "@/components/card/CompanyCard";

const CompanyList = ({ search = "apple, fintech, broker", companies }) => {
  return (
    <div className="flex flex-col gap-y-4 col-span-2">
      <div>
        <p className="font-medium text-slate-500">Searching for: {search}</p>
      </div>
      {companies.map((company) => (
        <CompanyCard key={company.id} {...{ company }} />
      ))}
    </div>
  );
};

export default CompanyList;
