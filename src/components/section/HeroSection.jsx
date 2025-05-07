import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-x-15 flex flex-col items-center">
      <div className="flex flex-col justify-center gap-y-4 col-span-7">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start">
          ค้นหาบริษัทการเงินที่คุณวางใจได้
        </h2>
        <p className="text-sm md:text-md text-center md:text-start">
          สำรวจรีวิวจริงจากผู้ใช้งานจริง เพื่อช่วยคุณตัดสินใจเลือกบริษัท
          Fintech, โบรกเกอร์ และผู้ให้บริการชำระเงินที่เชื่อถือได้
          เปรียบเทียบข้อดี ข้อเสีย ก่อนตัดสินใจใช้บริการ
        </p>
        <Button className="max-w-fit mt-4 md:mt-8 mx-auto md:mx-0" size="lg">
          ดูรีวิวบริษัท
        </Button>
      </div>
      <div className="flex flex-col justify-center col-span-5">
        <Image src="/hero.svg" width="384" height="384" alt="hero" priority />
      </div>
    </div>
  );
};

export default HeroSection;
