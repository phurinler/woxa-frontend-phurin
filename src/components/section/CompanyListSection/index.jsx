import CompanyFilter from "./CompanyFilter";
import CompanyList from "./CompanyList";

const CompanyListSection = () => {
  const data = [];

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12">
      <CompanyFilter />
      <CompanyList data={data} />
    </div>
  );
};

export default CompanyListSection;
