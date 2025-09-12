"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CreateRoomsSheet() {
  const [policyLevel, setPolicyLevel] = useState("default");
  const [assignmentScope, setAssignmentScope] = useState("attribute");
  const [travelerType, setTravelerType] = useState("employee");
  const [policy, setPolicy] = useState("refundable");
  const [selectedUsers, setSelectedUsers] = useState<string[]>(["No selected", "Add user"]);
  const [newUser, setNewUser] = useState("");

  const handleAddUser = () => {
    if (newUser.trim() && !selectedUsers.includes(newUser.trim())) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
  };

  const handleRemoveUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW ROOMS POLICY</SheetTitle>
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
              <Info size={14} />
            </button>
          </div>

          {/* Policy Assignment Scope */}
          <div className="space-y-4">
            <Label className="text-[#282828] font-normal text-base">
              Policy Assignment Scope:
            </Label>
            <RadioGroup
              value={assignmentScope}
              onValueChange={setAssignmentScope}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-attribute" id="by-attribute" className="border-[#316db4] text-[#316db4]" />
                <Label htmlFor="by-attribute" className="text-[#282828] text-sm">
                  By Attribute
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-user" id="by-user" className="border-[#316db4] text-[#316db4]" />
                <Label htmlFor="by-user" className="text-[#282828] text-sm">
                  By User
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Users */}
          {assignmentScope === "by-user" && (
            <div className="space-y-3">
              <Label className="text-[#282828] font-normal text-base">
                Select users <span className="text-red-500">*</span>
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedUsers.map((user, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#fdf6e9] text-[#393939] px-2 py-1 rounded text-sm flex items-center gap-1"
                  >
                    {user}
                    <button
                      onClick={() => handleRemoveUser(user)}
                      className="text-[#656565] hover:text-[#393939]"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type user name"
                  className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
                />
                <Button
                  onClick={handleAddUser}
                  variant="outline"
                  className="px-4 py-2 border-[#316db4] text-[#316db4] hover:bg-[#316db4] hover:text-white"
                >
                  Add User
                </Button>
              </div>
            </div>
          )}

          {/* Traveler Type */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Traveler type <span className="text-red-500">*</span>
            </Label>
            <Select value={travelerType} onValueChange={setTravelerType}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Select traveler type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Policy */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Policy
            </Label>
            <RadioGroup
              value={policy}
              onValueChange={setPolicy}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="refundable" id="refundable" className="border-[#316db4] text-[#316db4]" />
                <Label htmlFor="refundable" className="text-[#282828] text-sm">
                  Allow refundable rom bookings only
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" className="border-[#316db4] text-[#316db4]" />
                <Label htmlFor="both" className="text-[#282828] text-sm">
                  Allow refundable and non-refundable room bookings
                </Label>
              </div>
            </RadioGroup>
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
          <Button className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Add
          </Button>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}