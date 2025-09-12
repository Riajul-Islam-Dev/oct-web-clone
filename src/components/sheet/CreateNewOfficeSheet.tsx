"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { CountryDropdown } from "../ui/country-dropdown";
import { PhoneInput } from "../ui/phone-input";

export function CreateNewOfficeSheet() {
  const [isActive, setIsActive] = useState(false);
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW OFFICE</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="mt-5">
            <div className="flex-1 mb-4">
              <Label htmlFor="officeName" className="mb-2 ">
                Office Name*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="officeName"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Label htmlFor="address1" className="mb-2 ">
                Address Line 1*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="address1"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="flex-1">
              <Label htmlFor="address2" className="mb-2 ">
                Address Line 2*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="address2"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 mb-4">
            <Label className="mb-2  ">Country*</Label>
            <div>
              <CountryDropdown
                placeholder="Select country name"
                defaultValue="USA"
                // onChange={() => void}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Label htmlFor="city" className="mb-2 ">
                City*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="city"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="flex-1">
              <Label htmlFor="state" className="mb-2 ">
                State*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="state"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="flex-1">
              <Label htmlFor="postCode" className="mb-2 ">
                Post Code*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="postCode"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Label htmlFor="email" className="mb-2 ">
                Email*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="email"
                  placeholder="Type here"
                />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Mobile Number*</Label>
              <PhoneInput
                isShowFlag={true}
                defaultCountry="US"
                placeholder="1XXX XXX XXX"
              />
            </div>
          </div>

          <div className="flex-1 mb-4">
            <Label htmlFor="description" className="mb-2 ">
              Description
            </Label>
            <div className="">
              <Textarea rows={6} id="description" placeholder="Type Here" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Switch
              className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
              onCheckedChange={() => setIsActive(!isActive)}
              checked={isActive}
            />
            <label className="text-sm" htmlFor="">
              {isActive ? "Active" : "Inactive"}
            </label>
          </div>

          <div className="flex gap-2 mb-18 mt-8">
            <Button variant={"tertiary"} className="font-normal font-ubuntu">
              Save
            </Button>
            <Button className="font-normal font-ubuntu">
              Save & Add Another
            </Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
