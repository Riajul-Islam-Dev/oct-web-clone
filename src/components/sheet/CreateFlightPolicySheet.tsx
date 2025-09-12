"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CreateFlightPolicySheetProps {
  onOpenChange?: (open: boolean) => void;
}

export function CreateFlightPolicySheet({ onOpenChange }: CreateFlightPolicySheetProps) {
  const [policyLevel, setPolicyLevel] = useState("");
  const [travelerType, setTravelerType] = useState("");
  const [flightDuration, setFlightDuration] = useState("");
  const [policyType, setPolicyType] = useState("dynamic");
  const [percentage, setPercentage] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("attribute");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [seatsLimit, setSeatsLimit] = useState("limited");
  const [numberOfTravelers, setNumberOfTravelers] = useState("");

  const removeUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      policyLevel,
      travelerType,
      flightDuration,
      policyType,
      percentage,
      maxAmount,
    });
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE MAXIMUM TRAVELERS PER FLIGHT POLICY</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6 space-y-8">
          {/* Policy Level */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Policy level <span className="text-red-500">*</span>
            </Label>
            <Select value={policyLevel} onValueChange={setPolicyLevel}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Select policy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default policy</SelectItem>
                <SelectItem value="custom">Custom policy</SelectItem>
              </SelectContent>
            </Select>
            <button className="text-[#316db4] text-sm mt-2 hover:underline flex items-center gap-1">
              Assignment secondary policy
              <span className="w-4 h-4 rounded-full border border-[#316db4] flex items-center justify-center text-xs">
                ?
              </span>
            </button>
          </div>

          {/* Policy Assignment Scope */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">Policy Assignment Scope:</Label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="assignmentScope"
                  value="attribute"
                  checked={assignmentScope === "attribute"}
                  onChange={(e) => setAssignmentScope(e.target.value)}
                  className="w-4 h-4 text-[#316db4] border-[#b4b4b4]"
                />
                <span className="text-[#393939]">By Attribute</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="assignmentScope"
                  value="user"
                  checked={assignmentScope === "user"}
                  onChange={(e) => setAssignmentScope(e.target.value)}
                  className="w-4 h-4 text-[#316db4] border-[#b4b4b4] accent-[#316db4]"
                />
                <span className="text-[#393939]">By User</span>
              </label>
            </div>
          </div>

          {/* Select Users */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Select users <span className="text-red-500">*</span>
            </Label>
            <div className="border border-[#e2e8f0] rounded-md p-2 min-h-[40px] flex flex-wrap gap-2 items-center">
              {selectedUsers.map((user) => (
                <span
                  key={user}
                  className="bg-[#fdf6e9] text-[#393939] px-2 py-1 rounded text-sm flex items-center gap-1"
                >
                  {user}
                  <button onClick={() => removeUser(user)} className="text-[#656565] hover:text-[#393939]">
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Add user"
                className="flex-1 min-w-[100px] outline-none text-[#8e8e8e] text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Traveler Type */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Traveler type <span className="text-red-500">*</span>
            </Label>
            <Select value={travelerType} onValueChange={setTravelerType}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#899ab2]">
                <SelectValue placeholder="Select traveler type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Seats Limit */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Seats limit <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="seatsLimit"
                  value="limited"
                  checked={seatsLimit === "limited"}
                  onChange={(e) => setSeatsLimit(e.target.value)}
                  className="w-4 h-4 text-[#316db4] border-[#b4b4b4] accent-[#316db4]"
                />
                <span className="text-[#393939]">Limited traveler</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="seatsLimit"
                  value="unlimited"
                  checked={seatsLimit === "unlimited"}
                  onChange={(e) => setSeatsLimit(e.target.value)}
                  className="w-4 h-4 text-[#316db4] border-[#b4b4b4]"
                />
                <span className="text-[#393939]">Unlimited</span>
              </label>
            </div>
          </div>

          {/* Numbers of Traveler */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Numbers of traveler <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={numberOfTravelers}
                onChange={(e) => setNumberOfTravelers(e.target.value)}
                className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
              />
              <span className="text-[#393939] text-sm">Traveler</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end mx-6 mt-8 mb-6">
          <Button
            variant="outline"
            className="px-6 py-3 bg-[#eda92c] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Add
          </Button>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}