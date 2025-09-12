"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BookingLeadTimeTable } from "@/components/BookingLeadTimeTable";
import { CreateBookingLeadTimeSheet } from "@/components/sheet/CreateBookingLeadTimeSheet";
import { Plus } from "lucide-react";

// Sample data for booking lead time policies
const sampleBookingLeadTimeData = [
  {
    id: "1",
    policyLevel: "Default policy",
    travelerType: "Employee",
    short: "14 Day",
    long: "21 Day"
  },
  {
    id: "2",
    policyLevel: "Director policy",
    travelerType: "Guest",
    short: "Unlimited",
    long: "Unlimited"
  },
  {
    id: "3",
    policyLevel: "Executive policy",
    travelerType: "Employee",
    short: "Unlimited",
    long: "Unlimited"
  }
];

export default function BookingLeadTimePage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Booking Lead Time</h4>
            <p className="text-sm font-raleway font-medium">
              Manage minimum booking lead time requirements for different traveler types
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add New
            </Button>
          </SheetTrigger>
        </div>

        <BookingLeadTimeTable data={sampleBookingLeadTimeData} />
      </div>
      <CreateBookingLeadTimeSheet onOpenChange={setIsSheetOpen} />
    </Sheet>
  );
}