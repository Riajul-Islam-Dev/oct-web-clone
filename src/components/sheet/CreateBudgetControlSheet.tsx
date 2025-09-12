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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, Info } from "lucide-react";

interface CreateBudgetControlSheetProps {
  onOpenChange?: (open: boolean) => void;
}

export function CreateBudgetControlSheet({ onOpenChange }: CreateBudgetControlSheetProps) {
  const [policyLevel, setPolicyLevel] = useState("");
  const [travelerType, setTravelerType] = useState("");
  const [flightDuration, setFlightDuration] = useState("");
  const [policyType, setPolicyType] = useState("dynamic");
  const [percentage, setPercentage] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("attribute");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [seatsLimit, setSeatsLimit] = useState("limited");
  const [numberOfTravelers, setNumberOfTravelers] = useState("");
  const [shortPolicy, setShortPolicy] = useState(false);
  const [longPolicy, setLongPolicy] = useState(false);
  const [dynamicPolicy, setDynamicPolicy] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("USD");

  const removeUser = (userToRemove: string) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const addUser = () => {
    if (newUser.trim()) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
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
          <SheetTitle>CREATE COST CONTROL POLICY</SheetTitle>
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
              className="flex gap-8"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="attribute"
                  id="attribute"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label htmlFor="attribute" className="text-[#282828] font-normal">
                  By Attribute
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="user"
                  id="user"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label htmlFor="user" className="text-[#282828] font-normal">
                  By User
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Users */}
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
                    className="bg-[#ececec] text-[#282828] hover:bg-[#d4d4d4] px-2 py-1 text-sm flex items-center gap-1"
                  >
                    {user}
                    <button
                      onClick={() => removeUser(user)}
                      className="text-[#656565] hover:text-[#282828] ml-1"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}
              </div>
              <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addUser()}
                placeholder="Add user"
                className="w-full outline-none bg-transparent text-[#282828] text-sm placeholder:text-[#899ab2]"
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
                <SelectValue placeholder="Add traveler type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Policy Type */}
          <div className="space-y-4">
            <Label className="text-[#282828] font-normal text-base">Select Policy Type?</Label>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="short"
                  checked={shortPolicy}
                  onCheckedChange={setShortPolicy}
                  className="mt-1 border-[#316db4] data-[state=checked]:bg-[#316db4]"
                />
                <div>
                  <Label htmlFor="short" className="text-[#282828] font-normal">
                    Short
                  </Label>
                  <p className="text-[#899ab2] text-sm">Less than 7 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="long"
                  checked={longPolicy}
                  onCheckedChange={setLongPolicy}
                  className="mt-1 border-[#b4b4b4]"
                />
                <div>
                  <Label htmlFor="long" className="text-[#282828] font-normal">
                    Long
                  </Label>
                  <p className="text-[#899ab2] text-sm">More than 7 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Short - Dynamic Policy */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base flex items-center gap-2">
              Short - Dynamic policy
              <Info size={16} className="text-[#899ab2]" />
            </Label>
            <div className="flex items-center gap-2">
              <Input
                value={dynamicPolicy}
                onChange={(e) => setDynamicPolicy(e.target.value)}
                className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
              />
              <span className="text-[#899ab2] text-sm">%</span>
            </div>
          </div>

          {/* Short - Max Price */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base flex items-center gap-2">
              Short - Max price per booking
              <Info size={16} className="text-[#899ab2]" />
            </Label>
            <div className="flex items-center gap-2">
              <Input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
              />
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-20 border-[#e2e8f0] bg-[#f7f9fc] h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
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