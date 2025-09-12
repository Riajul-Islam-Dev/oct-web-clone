"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function CreateLocationSpecificHotelPolicySheet() {
  const [policyType, setPolicyType] = useState("blocked-hotels");
  const [hotelName, setHotelName] = useState("");
  const [reason, setReason] = useState("other");
  const [otherReason, setOtherReason] = useState("");

  const handleAdd = () => {
    // Handle form submission logic here
    console.log({
      policyType,
      hotelName,
      reason,
      otherReason
    });
  };

  return (
    <SheetContent className="min-w-[630px]">
      <SheetHeader>
        <SheetTitle className="text-[#393939] text-lg font-medium">
          CREATE NEW LOCATION-SPECIFIC HOTEL POLICY
        </SheetTitle>
      </SheetHeader>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Policy Type */}
        <div className="space-y-2">
          <Label className="text-[#393939] text-sm font-medium">
            Policy Type <span className="text-red-500">*</span>
          </Label>
          <Select value={policyType} onValueChange={setPolicyType}>
            <SelectTrigger className="w-full border-[#e2e8f0] text-[#656565]">
              <SelectValue placeholder="Blocked hotels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blocked-hotels">Blocked hotels</SelectItem>
              <SelectItem value="preferred-hotels">Preferred hotels</SelectItem>
              <SelectItem value="restricted-hotels">Restricted hotels</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Hotel */}
        <div className="space-y-2">
          <Label className="text-[#393939] text-sm font-medium">
            Search hotel <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Type hotel name"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            className="border-[#e2e8f0] text-[#656565] placeholder:text-[#b4b4b4]"
          />
        </div>

        {/* Reason */}
        <div className="space-y-3">
          <Label className="text-[#393939] text-sm font-medium">Reason</Label>
          <RadioGroup value={reason} onValueChange={setReason} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="standards" id="standards" className="border-[#b4b4b4] text-[#316db4]" />
              <Label htmlFor="standards" className="text-[#656565] text-sm font-normal cursor-pointer">
                Does not meet company standards
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="unsafe" id="unsafe" className="border-[#b4b4b4] text-[#316db4]" />
              <Label htmlFor="unsafe" className="text-[#656565] text-sm font-normal cursor-pointer">
                Unsafe location
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="dirty" id="dirty" className="border-[#b4b4b4] text-[#316db4]" />
              <Label htmlFor="dirty" className="text-[#656565] text-sm font-normal cursor-pointer">
                Dirty
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="service" id="service" className="border-[#b4b4b4] text-[#316db4]" />
              <Label htmlFor="service" className="text-[#656565] text-sm font-normal cursor-pointer">
                Bad service
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="bathroom" id="bathroom" className="border-[#b4b4b4] text-[#316db4]" />
              <Label htmlFor="bathroom" className="text-[#656565] text-sm font-normal cursor-pointer">
                Shared bathroom
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="other" id="other" className="border-[#316db4] text-[#316db4]" />
              <Label htmlFor="other" className="text-[#656565] text-sm font-normal cursor-pointer">
                Other
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Other Reason */}
        <div className="space-y-2">
          <Label className="text-[#393939] text-sm font-medium">
            Other Reason <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Type reason"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            className="border-[#e2e8f0] text-[#656565] placeholder:text-[#b4b4b4]"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 p-6 border-t border-[#e2e8f0]">
        <Button
          variant="outline"
          className="bg-[#eda92c] text-white border-[#eda92c] hover:bg-[#d4941f] hover:border-[#d4941f] px-6"
        >
          Cancel
        </Button>
        <Button onClick={handleAdd} className="bg-[#316db4] text-white hover:bg-[#2a5a96] px-6">
          Add
        </Button>
      </div>
    </SheetContent>
  );
}