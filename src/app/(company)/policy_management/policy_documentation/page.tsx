import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateNewDocumentSheet } from "@/components/sheet/CreateNewDocumentSheet";
import PolicyManagementTable from "@/components/PolicyManagementTable";

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Travel Policy Document</h4>
            <p className="text-sm font-raleway font-medium">
              Your company's travel policy document
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Document
            </Button>
          </SheetTrigger>
        </div>

        <PolicyManagementTable />
      </div>
      <CreateNewDocumentSheet />
    </Sheet>
  );
}