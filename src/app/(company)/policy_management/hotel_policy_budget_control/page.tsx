"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateBudgetControlSheet } from "@/components/sheet/CreateBudgetControlSheet";
import { BudgetControlTable } from "@/components/BudgetControlTable";

// Sample hotel budget control data
const hotelBudgetControlData = [
  {
    id: 1,
    policyLevel: "Default policy",
    travelerType: "Employee",
    flightDuration: [
      "Standard (1-3 nights)",
      "Extended (4+ nights)"
    ],
    policy: [
      "Dynamic Policy: 25% Max: $0",
      "Dynamic Policy: 25% Max: $0"
    ]
  },
  {
    id: 2,
    policyLevel: "Director policy",
    travelerType: "Guest",
    flightDuration: [
      "Standard (1-3 nights)",
      "Extended (4+ nights)"
    ],
    policy: [
      "Dynamic Policy: 25% Max: $0",
      "Dynamic Policy: 25% Max: $0"
    ]
  },
  {
    id: 3,
    policyLevel: "Executive policy",
    travelerType: "Guest",
    flightDuration: [
      "Standard (1-3 nights)",
      "Extended (4+ nights)"
    ],
    policy: [
      "Dynamic Policy: 25% Max: $0",
      "Dynamic Policy: 25% Max: $0"
    ]
  }
];

export default function HotelBudgetControlPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Hotel Budget Control</h4>
            <p className="text-sm font-raleway font-medium">
              Define Policy levels and approval rules for hotel bookings in your organization.
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add
            </Button>
          </SheetTrigger>
        </div>

        <BudgetControlTable data={hotelBudgetControlData} />
      </div>
      <CreateBudgetControlSheet />
    </Sheet>
  );
}