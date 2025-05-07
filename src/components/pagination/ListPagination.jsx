import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageLimit } from "@/constants/config";

const ListPagination = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / pageLimit);

  const handlePage = (number) => {
    setPage(number);
  };

  const handlePrevious = () => {
    setPage((prevState) => {
      if (prevState > 1) return prevState - 1;

      return prevState;
    });
  };

  const handleNext = () => {
    setPage((prevState) => {
      if (prevState < totalPages) return prevState + 1;

      return prevState;
    });
  };

  if (!total) return null;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={page === i + 1}
              onClick={() => handlePage(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ListPagination;
