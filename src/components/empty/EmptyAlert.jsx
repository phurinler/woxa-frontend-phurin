import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const EmptyAlert = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Oops!</AlertTitle>
      <AlertDescription>ไม่พบข้อมูลที่ค้นหา</AlertDescription>
    </Alert>
  );
};

export default EmptyAlert;
