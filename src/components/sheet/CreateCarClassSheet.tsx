"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CreateCarClassSheet() {
  const [policyLevel, setPolicyLevel] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("by-attribute");
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [travelerType, setTravelerType] = useState("");
  const [carClasses, setCarClasses] = useState<string[]>([]);

  const handleAddUser = () => {
    if (newUser.trim() && !selectedUsers.includes(newUser.trim())) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
  };

  const handleRemoveUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const handleCarClassChange = (carClass: string, checked: boolean) => {
    if (checked) {
      setCarClasses([...carClasses, carClass]);
    } else {
      setCarClasses(carClasses.filter(c => c !== carClass));
    }
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW CAR CLASS POLICY</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6 space-y-8">
          {/* Policy Level */}
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Policy level <span className="text-red-500">*</span>
            </label>
            <Select value={policyLevel} onValueChange={setPolicyLevel}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Default policy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default policy</SelectItem>
                <SelectItem value="director">Director policy</SelectItem>
                <SelectItem value="executive">Executive policy</SelectItem>
              </SelectContent>
            </Select>
            <button className="text-[#316db4] text-sm mt-2 hover:underline flex items-center gap-1">
              Assignment secondary policy
            </button>
          </div>

          {/* Policy Assignment Scope */}
          <div className="space-y-4">
            <label className="block text-[#282828] font-normal text-base">
              Policy Assignment Scope:
            </label>
            <RadioGroup
              value={assignmentScope}
              onValueChange={setAssignmentScope}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-attribute" id="by-attribute" className="border-[#316db4] text-[#316db4]" />
                <label htmlFor="by-attribute" className="text-[#282828] text-sm">
                  By Attribute
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-user" id="by-user" className="border-[#316db4] text-[#316db4]" />
                <label htmlFor="by-user" className="text-[#282828] text-sm">
                  By User
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Users */}
          {assignmentScope === "by-user" && (
            <div className="space-y-3">
              <label className="block text-[#282828] font-normal text-base">
                Select users <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="No selected    Add user"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
                />
                <button
                  type="button"
                  onClick={handleAddUser}
                  className="px-4 py-2 border-[#316db4] text-[#316db4] hover:bg-[#316db4] hover:text-white"
                >
                  Add User
                </button>
              </div>
            </div>
          )}

          {/* Traveler Type */}
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Traveler type <span className="text-red-500">*</span>
            </label>
            <Select value={travelerType} onValueChange={setTravelerType}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Class */}
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Class
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                "Compact", "Intermediate", "Standard", 
                "Hybrid", "Electric", "Jeep", 
                "Suv", "Large SUV", "Mini", 
                "Mini Van", "Full Size Van", "Small or Medium Truck"
              ].map((carClass) => (
                <div key={carClass} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={carClass}
                    checked={carClasses.includes(carClass)}
                    onChange={(e) => handleCarClassChange(carClass, e.target.checked)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] rounded focus:ring-[#316db4]"
                  />
                  <label htmlFor={carClass} className="text-[#282828] text-sm font-normal cursor-pointer">
                    {carClass}
                  </label>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end mx-6 mt-8 mb-6">
          <button
            type="button"
            className="px-6 py-3 bg-[#eda92c] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Add
          </button>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}