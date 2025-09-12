"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Info, X } from "lucide-react";

interface CreateBookingLeadTimeSheetProps {
  onOpenChange?: (open: boolean) => void;
}

export function CreateBookingLeadTimeSheet({ onOpenChange }: CreateBookingLeadTimeSheetProps = {}) {
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [assignmentScope, setAssignmentScope] = useState("attribute");
  const [timelineActivate, setTimelineActivate] = useState("hours");

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
      e.preventDefault();
      handleAddUser();
    }
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
              <Label className="text-[#282828] font-normal text-base">
                Policy level <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="default">
                <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                  <SelectValue placeholder="Select policy level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default policy</SelectItem>
                  <SelectItem value="executive">Executive policy</SelectItem>
                  <SelectItem value="premium">Premium policy</SelectItem>
                  <SelectItem value="director">Director policy</SelectItem>
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
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="by-attribute"
                    name="assignment"
                    value="attribute"
                    checked={assignmentScope === "attribute"}
                    onChange={(e) => setAssignmentScope(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="by-attribute" className="text-[#282828] text-sm">
                    By Attribute
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="by-user"
                    name="assignment"
                    value="user"
                    checked={assignmentScope === "user"}
                    onChange={(e) => setAssignmentScope(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="by-user" className="text-[#282828] text-sm">
                    By User
                  </label>
                </div>
              </div>
            </div>

            {/* Select Users - Only show when by user is selected */}
            {assignmentScope === "user" && (
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
              <Select defaultValue="employee">
                <SelectTrigger className="w-full border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                  <SelectValue placeholder="Select traveler type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Timeline activate */}
            <div className="space-y-3">
              <Label className="text-[#282828] font-normal text-base">
                Timeline activate
              </Label>
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="unlimited"
                    name="timeline"
                    value="unlimited"
                    checked={timelineActivate === "unlimited"}
                    onChange={(e) => setTimelineActivate(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="unlimited" className="text-[#282828] text-sm">
                    Unlimited
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="hours"
                    name="timeline"
                    value="hours"
                    checked={timelineActivate === "hours"}
                    onChange={(e) => setTimelineActivate(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="hours" className="text-[#282828] text-sm">
                    Hours
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="day"
                    name="timeline"
                    value="day"
                    checked={timelineActivate === "day"}
                    onChange={(e) => setTimelineActivate(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="day" className="text-[#282828] text-sm">
                    Day
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="month"
                    name="timeline"
                    value="month"
                    checked={timelineActivate === "month"}
                    onChange={(e) => setTimelineActivate(e.target.value)}
                    className="w-4 h-4 text-[#316db4] border-[#316db4] focus:ring-[#316db4]"
                  />
                  <label htmlFor="month" className="text-[#282828] text-sm">
                    Month
                  </label>
                </div>
              </div>
            </div>

            {/* Short Flight */}
            <div className="space-y-3">
              <Label htmlFor="shortFlight" className="text-[#282828] font-normal text-base">
                Short Flight
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="shortFlight"
                  type="number"
                  placeholder="50"
                  className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
                  min="0"
                />
                <span className="text-sm text-[#282828] min-w-[40px]">Hours</span>
              </div>
            </div>

            {/* Long Flight */}
            <div className="space-y-3">
              <Label htmlFor="longFlight" className="text-[#282828] font-normal text-base">
                Long Flight
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="longFlight"
                  type="number"
                  placeholder="50"
                  className="flex-1 border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]"
                  min="0"
                />
                <span className="text-sm text-[#282828] min-w-[40px]">Hours</span>
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
          <Button className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Add
          </Button>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}