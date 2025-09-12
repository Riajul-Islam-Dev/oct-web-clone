"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CreateFlightDurationSheetProps {
  onOpenChange: (open: boolean) => void;
}

export function CreateFlightDurationSheet({ onOpenChange }: CreateFlightDurationSheetProps) {
  const [policyLevel, setPolicyLevel] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("by-attribute");
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>(["Mel ennui"]);
  const [travelerType, setTravelerType] = useState("");
  const [shortFlightDuration, setShortFlightDuration] = useState("");
  const [longFlightDuration, setLongFlightDuration] = useState("");

  const handleAddUser = () => {
    if (newUser.trim() && !selectedUsers.includes(newUser.trim())) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
  };

  const handleRemoveUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      policyLevel,
      assignmentScope,
      selectedUsers,
      travelerType,
      shortFlightDuration,
      longFlightDuration,
    });
    onOpenChange(false);
  };

  return (
    <SheetContent className="min-w-[630px]">
      <SheetHeader>
        <SheetTitle className="text-[#393939] text-lg font-medium tracking-wide">
          CREATE FLIGHT DURATION POLICY
        </SheetTitle>
      </SheetHeader>
      
      <ScrollArea className="h-full pr-6">
        <div className="p-6">
          <div className="space-y-8">
            {/* Policy Level */}
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">
                Policy level <span className="text-red-500">*</span>
              </Label>
              <Select value={policyLevel} onValueChange={setPolicyLevel} defaultValue="default">
                <SelectTrigger className="w-full border-[#e2e8f0] text-[#393939]">
                  <SelectValue placeholder="Default policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default policy</SelectItem>
                  <SelectItem value="executive">Executive policy</SelectItem>
                  <SelectItem value="director">Director policy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Assignment Secondary Policy */}
            <div className="flex items-center gap-2 mb-4">
              <Label className="text-[#393939] text-base font-medium">
                Assignment secondary policy
              </Label>
              <div className="w-4 h-4 rounded-full bg-[#316db4] flex items-center justify-center">
                <span className="text-white text-xs">?</span>
              </div>
            </div>

            {/* Policy Assignment Scope */}
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">
                Policy Assignment Scope:
              </Label>
              <RadioGroup value={assignmentScope} onValueChange={setAssignmentScope} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="by-attribute" id="by-attribute" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="by-attribute" className="text-[#393939] text-sm">
                    By Attribute
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="by-user" id="by-user" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="by-user" className="text-[#393939] text-sm">
                    By User
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Select Users */}
            {assignmentScope === "by-user" && (
              <div>
                <Label className="text-[#393939] text-base font-medium mb-4 block">
                  Select users <span className="text-red-500">*</span>
                </Label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add user"
                      value={newUser}
                      onChange={(e) => setNewUser(e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#899ab2] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
                    />
                    <Button
                      type="button"
                      onClick={handleAddUser}
                      className="bg-[#316db4] hover:bg-[#2a5a96] text-white px-4 py-2 rounded-md"
                    >
                      Add user
                    </Button>
                  </div>
                  {selectedUsers.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {selectedUsers.map((user, index) => (
                          <div key={index} className="flex items-center gap-2 bg-[#f1f5f9] px-3 py-1 rounded-full">
                            <span className="text-[#393939] text-sm">{user}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveUser(user)}
                              className="text-[#899ab2] hover:text-red-500"
                            >
                              <X className="h-3 w-3" />
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
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">
                Traveler type<span className="text-red-500">*</span>
              </Label>
              <Select value={travelerType} onValueChange={setTravelerType}>
                <SelectTrigger className="w-full border-[#e2e8f0] text-[#393939]">
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

            {/* Short Flight */}
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">Short flight</Label>
              <Select value={shortFlightDuration} onValueChange={setShortFlightDuration}>
                <SelectTrigger className="w-full border-[#e2e8f0] text-[#393939]">
                  <SelectValue placeholder="Select flight duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 hours</SelectItem>
                  <SelectItem value="2-4">2-4 hours</SelectItem>
                  <SelectItem value="4-6">4-6 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Long Flight */}
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">long flight</Label>
              <Select value={longFlightDuration} onValueChange={setLongFlightDuration}>
                <SelectTrigger className="w-full border-[#e2e8f0] text-[#393939]">
                  <SelectValue placeholder="Select flight duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6-8">6-8 hours</SelectItem>
                  <SelectItem value="8-12">8-12 hours</SelectItem>
                  <SelectItem value="12+">12+ hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                onClick={() => onOpenChange(false)}
                className="bg-[#eda92c] hover:bg-[#d49429] text-white border-[#eda92c] hover:border-[#d49429] px-8 py-2 rounded-full"
              >
                Cancel
              </Button>
              <Button 
                type="button"
                onClick={handleSubmit}
                className="bg-[#316db4] hover:bg-[#2a5a96] text-white px-8 py-2 rounded-full"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}