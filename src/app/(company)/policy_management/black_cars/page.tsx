import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateBlackCarsSheet } from "@/components/sheet/CreateBlackCarsSheet";
import { BlackCarsTable } from "@/components/BlackCarsTable";

// Sample data for Black Cars Policy
const sampleBlackCarsData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    status: "Enabled"
  },
  {
    policyLevel: "Default policy",
    travelerType: "Guest",
    status: "Disabled"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Employee",
    status: "Enabled"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Guest",
    status: "Disabled"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Employee",
    status: "Enabled"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Guest",
    status: "Disabled"
  }
];

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Black Cars Policy</h4>
            <p className="text-sm font-raleway font-medium">
              Restrict users travel to specific destinations
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="bg-[#316db4] hover:bg-[#087dc2] text-white">
              <Plus />
              + Add New
            </Button>
          </SheetTrigger>
        </div>

        <BlackCarsTable data={sampleBlackCarsData} />
      </div>
      <CreateBlackCarsSheet />
    </Sheet>
  );
}