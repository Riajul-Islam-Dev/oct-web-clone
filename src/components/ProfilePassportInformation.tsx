"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import DatePicker from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Edit2 } from "iconsax-reactjs";

export default function ProfilePassportInformation() {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className="bg-white rounded-md mt-3 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] mb-8">
      <div className="flex items-center gap-4 mb-5">
        <h4 className="text-lg font-ubuntu">Passport information</h4>
        <div className="ml-auto flex gap-3">
          <Button size="sm" variant={"tertiary"}>
            Add New Passport
            <Plus className="w-5 h-5" />
          </Button>
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
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Issuing country*</Label>
              <div>
                <CountryDropdown
                  placeholder="Select country name"
                  defaultValue="USA"
                  // onChange={() => void}
                />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Country of citizenship*</Label>
              <div>
                <CountryDropdown
                  placeholder="Select country name"
                  defaultValue="USA"
                  // onChange={() => void}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Issue date*</Label>
              <div>
                <DatePicker
                  className="bg-white border"
                  placeholder="DD / MM / YYYY"
                />
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Expiration date*</Label>
              <div>
                <DatePicker
                  className="bg-white border"
                  placeholder="DD / MM / YYYY"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Passport number*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Issuing country*</Label>
              <div className="font-raleway text-sm">Bangladesh</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">Country of citizenship*</Label>
              <div className="font-raleway text-sm">Bangladesh</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">Issue date*</Label>
              <div className="font-raleway text-sm">10/12/2024</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2">Expiration date*</Label>
              <div className="font-raleway text-sm">10/12/2026</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">Passport number*</Label>
              <div className="font-raleway text-sm">983456789</div>
            </div>
            <div className="flex-1"></div>
          </div>
        </>
      )}
    </div>
  );
}
