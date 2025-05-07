import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { pageLimit } from "@/constants/config";

const CompanyFilter = ({ totalCompanies, categories, filterRef }) => {
  const nameRef = useRef();
  const router = useRouter();
  const query = router.query;
  const [categoryFilter, setCategoryFilter] = useState([]);

  useEffect(() => {
    if (query) {
      if (query.name) nameRef.current.value = query.name;
      if (query.category) setCategoryFilter(query.category);
    }
  }, [query]);

  const handleToggleCategory = (category) => {
    setCategoryFilter((prevState) => {
      if (prevState.includes(category)) {
        return prevState.filter((item) => item !== category);
      } else {
        return [...prevState, category];
      }
    });
  };

  const handleReset = () => {
    nameRef.current.value = "";
    setCategoryFilter([]);
    router
      .push({
        pathname: "/",
        query: {},
      })
      .then(() => {
        filterRef.current.scrollIntoView();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value ?? "";

    const query = {};
    if (name) query.name = name;
    if (categoryFilter?.length) query.category = categoryFilter;

    router
      .push({
        pathname: "/",
        query,
      })
      .then(() => {
        filterRef.current.scrollIntoView();
      });
  };

  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start">
          สำรวจบริษัทที่คุณสนใจ
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center md:text-start">
          ระบบกรองการค้นหา
        </h3>
        <p className="text-sm md:text-md font-bold text-center md:text-start text-slate-500">
          1-{pageLimit} จาก {totalCompanies} ผลลัพธ์
        </p>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="name" className="font-semibold">
                    บริษัท
                  </Label>
                  <Input
                    ref={nameRef}
                    id="name"
                    placeholder="ชื่อบริษัทที่ต้องการค้นหา"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="categories" className="font-semibold">
                    ประเภทธุรกิจ
                  </Label>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <Toggle
                        key={category}
                        variant="outline"
                        pressed={categoryFilter.includes(category)}
                        onPressedChange={() => handleToggleCategory(category)}
                      >
                        {category}
                      </Toggle>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-x-4">
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button onClick={handleSubmit}>Search</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CompanyFilter;
