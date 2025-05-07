import CompanyFilter from "./CompanyFilter";
import CompanyList from "./CompanyList";

const CompanyListSection = ({ companies, categories, filterRef }) => {
  return (
    <div
      ref={filterRef}
      className="flex flex-col md:grid md:grid-cols-3 gap-12"
    >
      <CompanyFilter {...{ categories, filterRef }} />
      <CompanyList {...{ companies }} />
    </div>
  );
};

export default CompanyListSection;
