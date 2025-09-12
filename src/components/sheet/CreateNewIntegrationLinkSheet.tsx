"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
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

export function CreateNewIntegrationLinkSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW INTEGRATION LINK</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="flex-1">
            <div className="flex-1 mb-4">
              <Label className="mb-2">Media Name</Label>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Select Media" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Youtube">Youtube</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex-1 mb-4">
              <Label className="mb-2  ">Media Url*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-18 mt-8">
            <Button variant={"tertiary"} className="font-ubuntu font-normal">
              Save Integration Link
            </Button>
            <Button className="font-ubuntu font-normal">Cancel</Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
