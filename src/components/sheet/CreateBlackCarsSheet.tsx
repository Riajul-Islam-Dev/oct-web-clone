"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CreateBlackCarsSheet() {
  const [policyLevel, setPolicyLevel] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("by-attribute");
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [travelerType, setTravelerType] = useState("");
  const [status, setStatus] = useState("enabled");

  const handleAddUser = () => {
    if (newUser.trim() && !selectedUsers.includes(newUser.trim())) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
  };

  const handleRemoveUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW BOOKING LEAD TIME POLICY</SheetTitle>
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
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Policy Assignment Scope:
            </label>
            <RadioGroup value={assignmentScope} onValueChange={setAssignmentScope} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-attribute" id="by-attribute" className="border-[#e2e8f0] text-[#316db4]" />
                <label htmlFor="by-attribute" className="text-[#282828] text-sm font-normal cursor-pointer">
                  By Attribute
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="by-user" id="by-user" className="border-[#e2e8f0] text-[#316db4]" />
                <label htmlFor="by-user" className="text-[#282828] text-sm font-normal cursor-pointer">
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
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Selamat X"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828] px-3 placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleAddUser}
                    className="px-6 py-3 bg-[#316db4] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Add user
                  </button>
                </div>
                {selectedUsers.length > 0 && (
                  <div className="space-y-2">
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {selectedUsers.map((user, index) => (
                        <div key={index} className="flex items-center justify-between bg-[#f7f9fc] p-3 rounded-md">
                          <span className="text-[#282828] text-sm">{user}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveUser(user)}
                            className="text-[#899ab2] hover:text-red-500 p-1"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Traveler Type */}
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Traveler type<span className="text-red-500">*</span>
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

          {/* Status */}
          <div className="space-y-3">
            <label className="block text-[#282828] font-normal text-base">
              Status
            </label>
            <RadioGroup value={status} onValueChange={setStatus} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enabled" id="enabled" className="border-[#e2e8f0] text-[#316db4]" />
                <label htmlFor="enabled" className="text-[#282828] text-sm font-normal cursor-pointer">
                  Enabled
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled" id="disabled" className="border-[#e2e8f0] text-[#316db4]" />
                <label htmlFor="disabled" className="text-[#282828] text-sm font-normal cursor-pointer">
                  Disabled
                </label>
              </div>
            </RadioGroup>
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