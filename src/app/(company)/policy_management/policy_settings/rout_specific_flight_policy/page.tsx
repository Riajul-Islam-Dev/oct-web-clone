"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateRouteSpecificFlightPolicySheet } from "@/components/sheet/CreateRouteSpecificFlightPolicySheet";
import RouteSpecificFlightPolicyTable from "@/components/RouteSpecificFlightPolicyTable";

export default function RoutSpecificFlightPolicyPage() {
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
            <h4 className="text-lg font-ubuntu">Route Specific Flight Policy</h4>
            <p className="text-sm font-raleway font-medium">
              Define route-specific flight policies for your organization
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Policy
            </Button>
          </SheetTrigger>
        </div>

        <RouteSpecificFlightPolicyTable />
      </div>
      <CreateRouteSpecificFlightPolicySheet />
    </Sheet>
  );
}