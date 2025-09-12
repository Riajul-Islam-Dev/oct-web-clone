"use client";

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
import DatePicker from "@/components/ui/date-picker";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import { Edit2 } from "iconsax-reactjs";

export default function ProfilePersonalInformation() {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className="bg-white rounded-md mt-3 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] ">
      <div className="flex items-center gap-4 mb-5">
        <h4 className="text-lg font-ubuntu">Personal Information</h4>
        <div className="ml-auto">
          <Button
            onClick={() => setIsUpdating(!isUpdating)}
            size="sm"
            variant={isUpdating ? "secondary" : "default"}
          >
            {isUpdating ? "Update" : "Edit"}
            {isUpdating ? "" : <Edit2 />}
          </Button>
        </div>
      </div>
      {isUpdating ? (
        <>
          <div className="grid grid-cols-2 lg:flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">Legal first name*</Label>
              <div className="">
                <Input className="rounded-sm" placeholder="MD" />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2">Legal middle name*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Enamul" />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2">Legal last name*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Hossen" />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Suffix*</Label>
              <div>
                <Select>
                  <SelectTrigger className=" rounded-sm w-full">
                    <SelectValue placeholder="Sir" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="sir">Sir</SelectItem>
                    <SelectItem value="jr">Jr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Gender*</Label>
              <div>
                <Select>
                  <SelectTrigger className=" rounded-sm w-full">
                    <SelectValue placeholder="Male" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="nonbinary">Non Binary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1">
              <Label htmlFor="date" className="mb-2  ">
                Birthday*
              </Label>
              <div>
                <DatePicker />
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Mobile Number*</Label>
              <PhoneInput
                isShowFlag={true}
                defaultCountry="US"
                placeholder="1XXX XXX XXX"
              />
            </div>
            <div className="flex-1"></div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">Legal first name*</Label>
              <div className="font-raleway text-sm">MD</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Legal middle name*</Label>
              <div className="font-raleway text-sm">Enamul</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Legal last name*</Label>
              <div className="font-raleway text-sm">Hossen</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Suffix*</Label>
              <div className="font-raleway text-sm">Sir</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Gender*</Label>
              <div className="font-raleway text-sm">Male</div>
            </div>

            <div className="flex-1">
              <Label htmlFor="date" className="mb-2  ">
                Birthday*
              </Label>
              <div className="font-raleway text-sm">07/04/1995</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">Mobile Number*</Label>
              <div className="font-raleway text-sm">+1(646)555-8888</div>
            </div>
            <div className="flex-1"></div>
          </div>
        </>
      )}
    </div>
  );
}
