import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateCabinClassSheet } from "@/components/sheet/CreateCabinClassSheet";
import { CabinClassTable } from "@/components/CabinClassTable";

// Sample data for Cabin Class
const cabinClassData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    class: "Standard"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Guest",
    class: "First class"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Employee",
    class: "First class"
  }
];

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Cabin Class</h4>
            <p className="text-sm font-raleway font-medium">
              Manage cabin class policies for different traveler types
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Cabin Class
            </Button>
          </SheetTrigger>
        </div>

        <CabinClassTable data={cabinClassData} />
      </div>
      <CreateCabinClassSheet />
    </Sheet>
  );
}