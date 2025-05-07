import CompanyFilter from "./CompanyFilter";
import CompanyList from "./CompanyList";

const CompanyListSection = ({ companies, categories, filterRef, error }) => {
  const totalCompanies = companies?.length;

  return (
    <div
      ref={filterRef}
      className="flex flex-col lg:grid lg:grid-cols-3 gap-12"
    >
      <CompanyFilter {...{ totalCompanies, categories, filterRef }} />
      <CompanyList {...{ companies, error }} />
    </div>
  );
};

export default CompanyListSection;
