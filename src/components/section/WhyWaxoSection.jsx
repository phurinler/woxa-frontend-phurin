import Image from "next/image";

const WhyWaxoSection = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="max-w-2xl w-full mx-auto flex flex-col justify-center gap-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          ทำไมต้อง Waxo App
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src="/conversation.svg"
            width="384"
            height="384"
            alt="conversation"
          />
        </div>
        <p className="text-sm md:text-base text-center">
          ไม่ว่าคุณจะมองหาบริษัทฟินเทคที่ล้ำสมัย
          โบรกเกอร์ที่น่าเชื่อถือสำหรับการลงทุน
          หรือผู้ให้บริการชำระเงินที่ปลอดภัยและสะดวกสบาย
          ที่นี่คือจุดเริ่มต้นของการตัดสินใจที่มั่นใจมากขึ้น
          ด้วยระบบรีวิวจากผู้ใช้งานจริง คุณสามารถอ่านประสบการณ์ตรง
          เปรียบเทียบข้อดี ข้อเสียของแต่ละบริษัท และดูคะแนนจากหลากหลายแง่มุม
          เช่น ความน่าเชื่อถือ การใช้งาน บริการลูกค้า และความคุ้มค่า
          เราเชื่อว่าข้อมูลที่โปร่งใสและเป็นกลางจะช่วยให้คุณเลือกใช้บริการทางการเงินได้อย่างมั่นใจ
          ไม่ว่าจะเป็นมือใหม่ในโลกการเงิน
          หรือผู้มีประสบการณ์ที่กำลังมองหาทางเลือกใหม่
          เว็บไซต์ของเราคือแหล่งข้อมูลที่ออกแบบมาเพื่อคุณ
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col text-center items-center gap-y-4">
          <Image src="/fintech.svg" width="200" height="200" alt="fintech" />
          <h3 className="text-lg md:text-xl font-medium">Fintech</h3>
          <p className="text-sm md:text-base text-center">
            บริษัทเทคโนโลยีทางการเงินที่พัฒนาแอปหรือแพลตฟอร์มใหม่ๆ
            เพื่อให้บริการด้านการเงิน เช่น การกู้ยืม การลงทุน
          </p>
        </div>
        <div className="flex flex-col text-center items-center gap-y-4">
          <Image src="/broker.svg" width="200" height="200" alt="broker" />
          <h3 className="text-lg md:text-xl font-medium">Broker</h3>
          <p className="text-sm md:text-base text-center">
            นายหน้าหรือบริษัทตัวกลางที่ให้บริการซื้อขายหลักทรัพย์ เช่น หุ้น
            คริปโต หรือฟอเร็กซ์ โดยเชื่อมผู้ใช้งานกับตลาด
          </p>
        </div>
        <div className="flex flex-col text-center items-center gap-y-4">
          <Image src="/payment.svg" width="200" height="200" alt="payment" />
          <h3 className="text-lg md:text-xl font-medium">Payment</h3>
          <p className="text-sm md:text-base text-center">
            ผู้ให้บริการระบบชำระเงินที่ช่วยให้การโอนเงิน การรับจ่าย
            หรือทำธุรกรรมออนไลน์เป็นเรื่องง่าย รวดเร็ว และปลอดภัย
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWaxoSection;
