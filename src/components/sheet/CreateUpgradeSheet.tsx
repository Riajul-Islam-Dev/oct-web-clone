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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Info, X } from "lucide-react";

export function CreateUpgradeSheet() {
  const [newUser, setNewUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [assignmentScope, setAssignmentScope] = useState("all");
  const [policyLevel, setPolicyLevel] = useState("");
  const [travelerType, setTravelerType] = useState("");
  const [shortOptions, setShortOptions] = useState<string[]>([]);
  const [longOptions, setLongOptions] = useState<string[]>([]);

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
    <SheetContent className="min-w-[630px] p-0">
      <ScrollArea className="h-full">
        <div className="p-6">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-lg font-medium text-[#18181a]">
              CREATE NEW UPGRADE POLICY
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-6">
            {/* Policy Level */}
            <div className="space-y-2">
              <Label htmlFor="policyLevel" className="text-sm font-medium text-[#18181a]">
                Policy level <span className="text-red-500">*</span>
              </Label>
              <Select value={policyLevel} onValueChange={setPolicyLevel}>
                <SelectTrigger className="w-full h-12 bg-white border-[#e2e8f0]">
                  <SelectValue placeholder="Default policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default policy</SelectItem>
                  <SelectItem value="executive">Executive policy</SelectItem>
                  <SelectItem value="premium">Premium policy</SelectItem>
                  <SelectItem value="director">Director policy</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-xs text-[#316db4] cursor-pointer hover:underline">
                Assignment secondary policy
              </div>
            </div>

            {/* Policy Assignment Scope */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-[#18181a]">
                Policy Assignment Scope:
              </Label>
              <RadioGroup value={assignmentScope} onValueChange={setAssignmentScope} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="attribute" id="attribute" className="text-[#316db4]" />
                  <label htmlFor="attribute" className="text-sm text-[#18181a]">
                    By Attribute
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="user" id="user" className="text-[#316db4]" />
                  <label htmlFor="user" className="text-sm text-[#18181a]">
                    By User
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Select Users - Only show when by user is selected */}
            {assignmentScope === "user" && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-[#18181a]">
                  Select users <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Username"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 h-10 bg-white border-[#e2e8f0]"
                  />
                  <Button
                    type="button"
                    onClick={handleAddUser}
                    size="sm"
                    className="bg-[#316db4] hover:bg-[#087dc2] text-white h-10 px-4"
                  >
                    Add user
                  </Button>
                </div>
                {selectedUsers.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUsers.map((user, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#f1f5f9] text-[#18181a] hover:bg-[#e2e8f0] flex items-center gap-1 px-2 py-1"
                      >
                        {user}
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-red-500"
                          onClick={() => handleRemoveUser(user)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Traveler Type */}
            <div className="space-y-2">
              <Label htmlFor="travelerType" className="text-sm font-medium text-[#18181a]">
                Traveler type <span className="text-red-500">*</span>
              </Label>
              <Select value={travelerType} onValueChange={setTravelerType}>
                <SelectTrigger className="w-full h-12 bg-white border-[#e2e8f0]">
                  <SelectValue placeholder="Employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Short */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-[#18181a]">
                Short
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="short-seat" 
                    checked={shortOptions.includes('seat')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setShortOptions([...shortOptions, 'seat']);
                      } else {
                        setShortOptions(shortOptions.filter(opt => opt !== 'seat'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="short-seat" className="text-sm text-[#18181a]">
                    Seat
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="short-cabin" 
                    checked={shortOptions.includes('cabin')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setShortOptions([...shortOptions, 'cabin']);
                      } else {
                        setShortOptions(shortOptions.filter(opt => opt !== 'cabin'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="short-cabin" className="text-sm text-[#18181a]">
                    Cabin: if cheaper
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="short-red-eye" 
                    checked={shortOptions.includes('red-eye')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setShortOptions([...shortOptions, 'red-eye']);
                      } else {
                        setShortOptions(shortOptions.filter(opt => opt !== 'red-eye'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="short-red-eye" className="text-sm text-[#18181a]">
                    Red eye: next class
                  </label>
                </div>
              </div>
            </div>

            {/* Long */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-[#18181a]">
                Long
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="long-seat" 
                    checked={longOptions.includes('seat')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLongOptions([...longOptions, 'seat']);
                      } else {
                        setLongOptions(longOptions.filter(opt => opt !== 'seat'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="long-seat" className="text-sm text-[#18181a]">
                    Seat
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="long-cabin" 
                    checked={longOptions.includes('cabin')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLongOptions([...longOptions, 'cabin']);
                      } else {
                        setLongOptions(longOptions.filter(opt => opt !== 'cabin'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="long-cabin" className="text-sm text-[#18181a]">
                    Cabin: if cheaper
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="long-red-eye" 
                    checked={longOptions.includes('red-eye')}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLongOptions([...longOptions, 'red-eye']);
                      } else {
                        setLongOptions(longOptions.filter(opt => opt !== 'red-eye'));
                      }
                    }}
                    className="border-[#316db4] data-[state=checked]:bg-[#316db4]"
                  />
                  <label htmlFor="long-red-eye" className="text-sm text-[#18181a]">
                    Red eye: next class
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#e2e8f0]">
            <Button
              variant="outline"
              className="px-6 py-2 h-10 border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc] bg-[#f59e0b] text-white hover:bg-[#d97706]"
            >
              Cancel
            </Button>
            <Button className="px-6 py-2 h-10 bg-[#316db4] hover:bg-[#087dc2] text-white">
              Add
            </Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}