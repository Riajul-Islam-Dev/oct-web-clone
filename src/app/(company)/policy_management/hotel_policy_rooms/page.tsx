"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateRoomsSheet } from "@/components/sheet/CreateRoomsSheet";
import { RoomsTable } from "@/components/RoomsTable";

// Sample data for Hotel Policy Rooms
const roomsData = [
  {
    policyLevel: "Default policy",
    travelerType: "Employee",
    policy: "Allow refundable room bookings only"
  },
  {
    policyLevel: "Director policy",
    travelerType: "Guest",
    policy: "Allow refundable and non-refundable room bookings"
  },
  {
    policyLevel: "Executive policy",
    travelerType: "Employee",
    policy: "Allow refundable and non-refundable room bookings"
  }
];

export default function HotelPolicyRoomsPage() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Hotel Policy - Rooms</h4>
            <p className="text-sm font-raleway font-medium">
              Configure room booking policies for hotel accommodations
            </p>
          </div>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add New
            </Button>
          </SheetTrigger>
        </div>

        <div className="space-y-6">
          <RoomsTable data={roomsData} />
        </div>
      </div>
      <CreateRoomsSheet />
    </Sheet>
  );
}