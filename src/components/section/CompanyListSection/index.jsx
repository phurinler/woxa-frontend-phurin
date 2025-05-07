import CompanyFilter from "./CompanyFilter";
import CompanyList from "./CompanyList";

const CompanyListSection = ({ companies, categories, filterRef }) => {
  const totalCompanies = companies?.length;

  return (
    <div
      ref={filterRef}
      className="flex flex-col lg:grid lg:grid-cols-3 gap-12"
    >
      <CompanyFilter {...{ totalCompanies, categories, filterRef }} />
      <CompanyList {...{ companies }} />
    </div>
  );
};

export default CompanyListSection;
