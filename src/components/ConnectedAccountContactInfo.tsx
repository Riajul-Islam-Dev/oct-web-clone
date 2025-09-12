"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import { Edit2 } from "iconsax-reactjs";

export default function ConnectedAccountContactInfo() {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className="bg-white rounded py-4 px-4 shadow-[0px_4px_30px_0px_#0000000F] mt-3">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-ubuntu">Contract Info</h4>
        <Button
          onClick={() => setIsUpdating(!isUpdating)}
          size="sm"
          variant={isUpdating ? "secondary" : "default"}
        >
          {isUpdating ? "Update" : "Edit"}
          {isUpdating ? "" : <Edit2 />}
        </Button>
      </div>

      {isUpdating ? (
        <>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Display first name*</Label>
              <Input
                className="bg-[#F7F9FC] border-0 rounded-sm"
                placeholder="Md"
              />
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Display last name*</Label>
              <div>
                <Input
                  className="bg-[#F7F9FC] border-0 rounded-sm"
                  placeholder="Enamul"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Work email address*</Label>
              <div>
                <Input
                  className="bg-[#F7F9FC] border-0 rounded-sm"
                  placeholder="eg. mail@mail.com"
                />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Display last name*</Label>
              <div>
                <PhoneInput
                  isShowFlag={true}
                  className="input-custom-light-bg"
                  defaultCountry="US"
                  placeholder="1XXX XXX XXX"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Display first name*</Label>
              <div className="font-raleway text-sm">MD</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Display last name*</Label>
              <div className="font-raleway text-sm">Enamul</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Work email address*</Label>
              <div className="font-raleway text-sm">mail@mail.com</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Display last name*</Label>
              <div className="font-raleway text-sm">+1(656)555-2422-332</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
