"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateBudgetControlSheet } from "@/components/sheet/CreateBudgetControlSheet";
import { BudgetControlTable } from "@/components/BudgetControlTable";

// Sample budget control data
const budgetControlData = [
  {
    id: 1,
    policyLevel: "Default policy",
    travelerType: "Employee",
    flightDuration: [
      "Short (Less than 7 hours)",
      "Long (More than 7 hours)"
    ],
    policy: [
      "Dynamic Policy: 20% Max: $0",
      "Dynamic Policy: 20% Max: $0"
    ]
  },
  {
    id: 2,
    policyLevel: "Director policy",
    travelerType: "Guest",
    flightDuration: [
      "Short (Less than 7 hours)",
      "Long (More than 7 hours)"
    ],
    policy: [
      "Dynamic Policy: 20% Max: $0",
      "Dynamic Policy: 20% Max: $0"
    ]
  },
  {
    id: 3,
    policyLevel: "Executive policy",
    travelerType: "Guest",
    flightDuration: [
      "Short (Less than 7 hours)",
      "Long (More than 7 hours)"
    ],
    policy: [
      "Dynamic Policy: 20% Max: $0",
      "Dynamic Policy: 20% Max: $0"
    ]
  }
];

export default function BudgetControlPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Budget Control</h4>
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

        <BudgetControlTable data={budgetControlData} />
      </div>
      <CreateBudgetControlSheet />
    </Sheet>
  );
}