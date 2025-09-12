"use client";

import { useState } from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function CreateApprovalRulesSheet() {
  const [policyLevel, setPolicyLevel] = useState("default-policy");
  const [secondaryPolicyLevel, setSecondaryPolicyLevel] = useState("");
  const [assignmentScope, setAssignmentScope] = useState("by-user");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [travelerType, setTravelerType] = useState("");
  const [travelRequestType, setTravelRequestType] = useState("");
  const [reviewProcess, setReviewProcess] = useState("review-out-of-policy");
  const [approver, setApprover] = useState("department");

  const handleAddUser = () => {
    if (newUser.trim()) {
      setSelectedUsers([...selectedUsers, newUser.trim()]);
      setNewUser("");
    }
  };

  const handleRemoveUser = (userToRemove) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted");
  };



  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW BOOKING APPROVAL POLICY</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6 space-y-8">
        {/* Policy Level */}
        <div className="space-y-3">
          <Label
            htmlFor="policy-level"
            className="text-[#282828] font-normal text-base"
          >
            Policy level <span className="text-red-500">*</span>
          </Label>
          <Select value={policyLevel} onValueChange={setPolicyLevel}>
            <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
              <SelectValue placeholder="Default policy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default-policy">Default policy</SelectItem>
              <SelectItem value="premium-policy">Premium policy</SelectItem>
              <SelectItem value="executive-policy">Executive policy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Secondary Policy Level */}
        <div className="space-y-3">
          <Label
            htmlFor="secondary-policy"
            className="text-[#282828] font-normal text-base"
          >
            Secondary Policy Level
          </Label>
          <Input
            id="secondary-policy"
            value={secondaryPolicyLevel}
            onChange={(e) => setSecondaryPolicyLevel(e.target.value)}
            className="border-[#e2e8f0] bg-[#f7f9fc] h-12"
            placeholder=""
          />
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
                value="by-attribute"
                id="by-attribute"
                className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
              />
              <Label
                htmlFor="by-attribute"
                className="text-[#282828] font-normal"
              >
                By Attribute
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value="by-user"
                id="by-user"
                className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
              />
              <Label htmlFor="by-user" className="text-[#282828] font-normal">
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
              <SelectItem value="executive">Executive</SelectItem>
              <SelectItem value="guest">Guest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Travel Request Type */}
        <div className="space-y-3">
          <Label className="text-[#282828] font-normal text-base">
            Travel request type <span className="text-red-500">*</span>
          </Label>
          <Select
            value={travelRequestType}
            onValueChange={setTravelRequestType}
          >
            <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#899ab2]">
              <SelectValue placeholder="Select travel request type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business Travel</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="client-meeting">Client Meeting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Booking Review Process */}
        <div className="space-y-6">
          <Label className="text-[#282828] font-normal text-base">
            Booking review process
          </Label>
          <RadioGroup
            value={reviewProcess}
            onValueChange={setReviewProcess}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="no-review"
                  id="no-review"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label
                  htmlFor="no-review"
                  className="text-[#282828] font-normal"
                >
                  No review
                </Label>
              </div>
              <p className="text-sm text-[#899ab2] ml-7 leading-relaxed">
                Approvers won't be notified to review any bookings (in or out of
                policy)
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="review-out-of-policy"
                  id="review-out-of-policy"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label
                  htmlFor="review-out-of-policy"
                  className="text-[#282828] font-normal"
                >
                  Review out of policy only
                </Label>
              </div>
              <p className="text-sm text-[#899ab2] ml-7 leading-relaxed">
                Approvers won't be notified out of policy bookings and can
                cancel them. Refund and cancellation details will be included.
              </p>
            </div>
          </RadioGroup>

          {/* Conditional Approver Field */}
          {reviewProcess === "review-out-of-policy" && (
            <div className="ml-7 space-y-3">
              <Label className="text-[#282828] font-normal text-base">
                Approver <span className="text-red-500">*</span>
              </Label>
              <Select value={approver} onValueChange={setApprover}>
                <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
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
