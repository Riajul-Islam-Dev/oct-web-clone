"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateFlightDurationSheet } from "@/components/sheet/CreateFlightDurationSheet";
import { FlightDurationTable } from "@/components/FlightDurationTable";

// Sample data for Flight Duration
const flightDurations = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    short: "Less than 7 hours",
    long: "More than 7 hours"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Guest",
    short: "Less than 7 hours",
    long: "More than 7 hours"
  }
];

export default function FlightDurationPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Flight Duration</h4>
            <p className="text-sm font-raleway font-medium">
              Define Policy levels and approval rules for your organization.
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add
            </Button>
          </SheetTrigger>
        </div>

        <FlightDurationTable data={flightDurations} />
      </div>
      <CreateFlightDurationSheet onOpenChange={setIsSheetOpen} />
    </Sheet>
  );
}