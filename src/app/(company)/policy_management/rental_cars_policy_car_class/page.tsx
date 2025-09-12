"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateCarClassSheet } from "@/components/sheet/CreateCarClassSheet";
import { CarClassTable } from "@/components/CarClassTable";

// Sample data for Rental Cars Car Class
const sampleCarClassData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    class: "Compact, Economy, Intermediate"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Guest",
    class: "Compact, Economy, Intermediate, Standard"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Employee",
    class: "Compact, Economy, Intermediate, Standard, Premium, Luxury"
  }
];

export default function RentalCarsCarClassPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Rental Cars Car Class</h4>
            <p className="text-sm font-raleway font-medium">
              Manage car class policies for rental car bookings and different traveler types
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="bg-[#316db4] hover:bg-[#087dc2] text-white">
              <Plus />
              + Add New
            </Button>
          </SheetTrigger>
        </div>

        <div className="mb-4">
          <h5 className="text-base font-ubuntu font-medium text-[#18181a] mb-3">Car Class</h5>
        </div>

        <CarClassTable data={sampleCarClassData} />
      </div>
      <CreateCarClassSheet />
    </Sheet>
  );
}