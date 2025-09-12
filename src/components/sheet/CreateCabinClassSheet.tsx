"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CreateCabinClassSheet() {
  const [policyLevel, setPolicyLevel] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("all-users");
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [travelerType, setTravelerType] = useState("");
  const [shortCabinClass, setShortCabinClass] = useState("");
  const [longCabinClass, setLongCabinClass] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      policyLevel,
      assignmentScope,
      selectedUsers,
      travelerType,
      shortCabinClass,
      longCabinClass,
    });
  };

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
          <SheetTitle>CREATE CABIN CLASS POLICY</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6 space-y-8">
          {/* Policy Level */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Policy Level <span className="text-red-500">*</span>
            </Label>
            <Select value={policyLevel} onValueChange={setPolicyLevel}>
              <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Select policy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="department">Department</SelectItem>
                <SelectItem value="individual">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Assignment Secondary Policy Link */}
          <div className="space-y-4">
            <Label className="text-[#282828] font-normal text-base">
              Assignment Secondary Policy Link <span className="text-red-500">*</span>
            </Label>
            <RadioGroup value={assignmentScope} onValueChange={setAssignmentScope} className="flex gap-8">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="all-users" id="all-users" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="all-users" className="text-[#282828] font-normal">
                  All users
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="specific-users" id="specific-users" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="specific-users" className="text-[#282828] font-normal">
                  Specific users
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Users */}
          {assignmentScope === "specific-users" && (
            <div className="space-y-3">
              <Label className="text-[#282828] font-normal text-base">
                Select users <span className="text-red-500">*</span>
              </Label>
              <div className="border border-[#e2e8f0] rounded-md p-4 bg-[#f7f9fc] min-h-[60px]">
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedUsers.map((user) => (
                    <Badge
                      key={user}
                      variant="secondary"
                      className="bg-[#e2e8f0] text-[#282828] border-0 px-3 py-1 rounded-md font-normal"
                    >
                      {user}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveUser(user)}
                        className="ml-2 h-4 w-4 p-0 hover:bg-transparent text-[#656565]"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span
                    className="text-[#899ab2] text-sm cursor-pointer"
                    onClick={() =>
                      document.getElementById("add-user-input")?.focus()
                    }
                  >
                    Add user
                  </span>
                  <Input
                    id="add-user-input"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    className="border-none shadow-none p-0 h-auto text-[#282828] placeholder:text-[#899ab2] bg-transparent"
                    onKeyPress={(e) => e.key === "Enter" && handleAddUser()}
                  />
                </div>
              </div>
            </div>
          )}

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
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Short Cabin Class */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">Short</Label>
            <RadioGroup value={shortCabinClass} onValueChange={setShortCabinClass} className="flex gap-8">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="economy" id="short-economy" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="short-economy" className="text-[#282828] font-normal">
                  Economy
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="premium-economy" id="short-premium" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="short-premium" className="text-[#282828] font-normal">
                  Premium Economy
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="business" id="short-business" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="short-business" className="text-[#282828] font-normal">
                  Business
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="first" id="short-first" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="short-first" className="text-[#282828] font-normal">
                  First
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Long Cabin Class */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">Long</Label>
            <RadioGroup value={longCabinClass} onValueChange={setLongCabinClass} className="flex gap-8">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="economy" id="long-economy" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="long-economy" className="text-[#282828] font-normal">
                  Economy
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="premium-economy" id="long-premium" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="long-premium" className="text-[#282828] font-normal">
                  Premium Economy
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="business" id="long-business" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="long-business" className="text-[#282828] font-normal">
                  Business
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="first" id="long-first" className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]" />
                <Label htmlFor="long-first" className="text-[#282828] font-normal">
                  First
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