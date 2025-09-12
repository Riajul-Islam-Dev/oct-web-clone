"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateFlightPolicySheet } from "@/components/sheet/CreateFlightPolicySheet";
import { FlightPolicyTable } from "@/components/FlightPolicyTable";

// Sample flight policy data
const tableData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    seatsLimit: "5 seats"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Manager",
    seatsLimit: "8 seats"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Executive",
    seatsLimit: "12 seats"
  }
];

export default function FlightPolicyPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Maximum Travelers Per Flight</h4>
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

        <FlightPolicyTable data={tableData} />
      </div>
      <CreateFlightPolicySheet />
    </Sheet>
  );
}