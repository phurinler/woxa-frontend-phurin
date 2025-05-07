import Image from "next/image";
import CompanyCard from "../card/CompanyCard";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "../ui/badge";
import StarRating from "../rating/StarRating";
import Link from "next/link";

const CompanyDrawer = ({ company }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <CompanyCard {...{ company }} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-w-7xl w-full mx-auto p-12">
          <div className="flex flex-col justify-center items-center gap-y-6 text-center">
            <Image src="/waxo.png" width="80" height="80" alt="company" />
            <div className="flex flex-col gap-y-2">
              <DrawerTitle className="text-xl md:text-2xl">
                {company.name}
              </DrawerTitle>
              <DrawerDescription className="text-md md:text-lg">
                {company.description}
              </DrawerDescription>
            </div>
            <div className="flex gap-x-3">
              <Badge>{company.category}</Badge>
              <StarRating score={company.averageScore} />
              <Link href={company.website} target="_blank">
                <Button variant="outline">{company.website}</Button>
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CompanyDrawer;
