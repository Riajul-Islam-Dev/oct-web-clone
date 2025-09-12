"use client";

import { useState } from "react";
import { X, Plane } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateRouteSpecificFlightPolicySheetProps {
  onClose?: () => void;
}

export function CreateRouteSpecificFlightPolicySheet({
  onClose,
}: CreateRouteSpecificFlightPolicySheetProps) {
  const [flightType, setFlightType] = useState("roundtrip");
  const [maxPrice, setMaxPrice] = useState("");
  const [cabinClass, setCabinClass] = useState("economy");

  return (
    <SheetContent className="min-w-[630px]">
      <SheetHeader>
        <SheetTitle className="text-[#393939] text-lg font-medium tracking-wide">
          CREATE NEW ROUTE SPECIFIC FLIGHT POLICY
        </SheetTitle>
      </SheetHeader>
      
      <ScrollArea className="h-full pr-6">
        <div className="p-6">
          <div className="space-y-8">
            {/* Route Section */}
            <div>
              <h2 className="text-[#393939] text-base font-medium mb-4">Route</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="from" className="text-[#393939] text-sm font-medium mb-2 block">
                    From *
                  </Label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 transform -rotate-45 -translate-y-1/2 text-[#316db4] w-4 h-4" />
                    <Input
                      id="from"
                      placeholder="From"
                      className="pl-10 border-[#e2e8f0] text-[#899ab2] placeholder:text-[#899ab2]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="to" className="text-[#393939] text-sm font-medium mb-2 block">
                    To *
                  </Label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#316db4] w-4 h-4" />
                    <Input
                      id="to"
                      placeholder="To"
                      className="pl-10 border-[#e2e8f0] text-[#899ab2] placeholder:text-[#899ab2]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Type Section */}
            <div>
              <h2 className="text-[#393939] text-base font-medium mb-4">What type of flight is the policy for?</h2>
              <RadioGroup value={flightType} onValueChange={setFlightType} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="roundtrip" id="roundtrip" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="roundtrip" className="text-[#393939] text-sm">
                    Roundtrip
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-way" id="one-way" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="one-way" className="text-[#393939] text-sm">
                    One-way
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Maximum Price Section */}
            <div>
              <Label htmlFor="maxPrice" className="text-[#393939] text-base font-medium mb-4 block">
                Maximum price per flight *
              </Label>
              <div className="flex">
                <Input
                  id="maxPrice"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="rounded-r-none border-r-0 border-[#e2e8f0] text-[#393939]"
                />
                <div className="bg-[#e2e8f0] border border-l-0 border-[#e2e8f0] rounded-r-md px-3 py-2 text-[#656565] text-sm flex items-center">
                  USD
                </div>
              </div>
            </div>

            {/* Cabin Class Section */}
            <div>
              <h2 className="text-[#393939] text-base font-medium mb-4">Max cabin class</h2>
              <RadioGroup value={cabinClass} onValueChange={setCabinClass} className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="economy" id="economy" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="economy" className="text-[#393939] text-sm">
                    Economy
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="premium-economy"
                    id="premium-economy"
                    className="border-[#316db4] text-[#316db4]"
                  />
                  <Label htmlFor="premium-economy" className="text-[#393939] text-sm">
                    Premium Economy
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="business" className="text-[#393939] text-sm">
                    Business
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="first" id="first" className="border-[#316db4] text-[#316db4]" />
                  <Label htmlFor="first" className="text-[#393939] text-sm">
                    First
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Policy Level Section */}
            <div>
              <Label className="text-[#393939] text-base font-medium mb-4 block">Policy level *</Label>
              <Select defaultValue="default">
                <SelectTrigger className="w-full border-[#e2e8f0] text-[#393939]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default policy</SelectItem>
                  <SelectItem value="custom">Custom policy</SelectItem>
                  <SelectItem value="premium">Premium policy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                variant="outline"
                className="bg-[#eda92c] hover:bg-[#d49429] text-white border-[#eda92c] hover:border-[#d49429] px-8 py-2 rounded-full"
              >
                Cancel
              </Button>
              <Button className="bg-[#316db4] hover:bg-[#2a5a96] text-white px-8 py-2 rounded-full">
                Add
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}