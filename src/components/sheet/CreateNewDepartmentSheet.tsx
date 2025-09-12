"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function CreateNewDepartmentSheet() {
  const [isActive, setIsActive] = useState(false);
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW DEPARTMENT</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="mt-5">
            <div className="flex-1 mb-4">
              <Label className="mb-2 ">Department Name*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Label htmlFor="description" className="mb-2 ">
              Description
            </Label>
            <div className="">
              <Textarea rows={6} id="description" placeholder="Type Here" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
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
            <Button className="font-ubuntu font-normal">Save</Button>
            <Button variant={"tertiary"} className="font-ubuntu font-normal">
              Save & Add Another
            </Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
