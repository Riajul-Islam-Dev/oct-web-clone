"use client";

import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateRestrictedDestinationsSheet } from "@/components/sheet/CreateRestrictedDestinationsSheet";
import { TravelPolicyManager } from "@/temp";

export default function RestrictedDestinationsPage() {
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
            <h4 className="text-lg font-ubuntu">Restricted Destinations</h4>
            <p className="text-sm font-raleway font-medium">
              Define restricted destinations for your organization
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Restriction
            </Button>
          </SheetTrigger>
        </div>

        {/* Restrictions Table */}
        <TravelPolicyManager />
      </div>
      <CreateRestrictedDestinationsSheet />
    </Sheet>
  );
}