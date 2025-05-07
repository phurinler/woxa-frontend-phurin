import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";

const CompanyFilter = () => {
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start">
          Explore companies
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center md:text-start">
          Filter companies
        </h3>

        <Card>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="name" className="font-semibold">
                    Name
                  </Label>
                  <Input id="name" placeholder="Name of company" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="categories" className="font-semibold">
                    Categories
                  </Label>
                  <div className="flex gap-2">
                    <Toggle variant="outline">Fintech</Toggle>
                    <Toggle variant="outline">Broker</Toggle>
                    <Toggle variant="outline">Payment</Toggle>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-x-4">
            <Button variant="outline">Reset</Button>
            <Button>Search</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CompanyFilter;
