"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateLocationSpecificHotelPolicySheet } from "@/components/sheet/CreateLocationSpecificHotelPolicySheet";
import HotelCostControlsTable from "@/components/HotelCostControlsTable";

export default function LocationSpecificHotelPolicyPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Policy Settings</h4>
            <p className="text-sm font-raleway font-medium">
              Configure policy settings and restrictions for your organization
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Location-Specific Hotel Policy</h4>
            <p className="text-sm font-raleway font-medium">
              Define location-specific hotel policies for your organization
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Policy
            </Button>
          </SheetTrigger>
        </div>

        <div className="space-y-6">
          <HotelCostControlsTable />
        </div>
      </div>
      <CreateLocationSpecificHotelPolicySheet />
    </Sheet>
  );
}