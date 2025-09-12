"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateUpgradeSheet } from "@/components/sheet/CreateUpgradeSheet";
import { UpgradeTable } from "@/components/UpgradeTable";

// Sample data for Upgrade
const upgradeData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    short: "Seat",
    long: "Seat"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Guest",
    short: "Cabin: if cheaper",
    long: "Seat\nCabin: if cheaper\nRed eye: next class"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Employee",
    short: "Seat\nCabin: if cheaper",
    long: "Seat\nCabin: if cheaper"
  },
  {
    policyLevel: "Other - Shagor Ahmmed",
    travelerType: "Guest",
    short: "Seat\nCabin: if cheaper",
    long: "Seat\nCabin: if cheaper"
  }
];

export default function UpgradePage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Upgrade</h4>
            <p className="text-sm font-raleway font-medium">
              Define upgrade policies and restrictions for different traveler types and flight durations.
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add
            </Button>
          </SheetTrigger>
        </div>
        
        <UpgradeTable data={upgradeData} />
      </div>
      
      <CreateUpgradeSheet />
    </Sheet>
  );
}