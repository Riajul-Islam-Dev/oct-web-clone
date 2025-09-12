"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "../ui/label";
import ProfileCircle from "@/assets/icons/ProfileCircle";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export function CreateNewRoleSheet() {
  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW ROLE</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6">
          <div className="my-2 rounded pt-4 pb-5 px-3 shadow-[0px_4px_30px_0px_#0000000F]">
            <Label className="mb-2 font-normal ">Role Name</Label>
            <div className="relative">
              <div className="absolute left-2.5 top-3">
                <ProfileCircle size={18} />
              </div>
              <Input className="pl-9" placeholder="Finance manager" />
            </div>
            <div className="inline-flex px-3 py-2 mt-2 rounded bg-[#F5FAFD]">
              <Checkbox
                id="checkManager"
                className="data-[state=checked]:bg-[#087DC2] data-[state=checked]:border-[#087DC2] mr-2"
              />
              <label htmlFor="checkManager">
                <p className="text-xs font-raleway text-[#50A3D4]">
                  Mark as Travel Manager
                </p>
              </label>
            </div>
          </div>

          <MiniNotificationController
            title="Travel Request Management"
            description="Handle and track employee travel requests"
          />
          <MiniNotificationController
            title="User Management"
            description=" Manage team access and permissions"
          />
          <MiniNotificationController
            title="Billing & Invoices"
            description=" View and control company billing"
            advance={false}
          />
          <MiniNotificationController
            title="Reports & Analytics"
            description="Generate insights and performance reports"
          />
          <MiniNotificationController
            title="Policy Management"
            description="Create and manage company policies"
          />

          <div className="flex gap-2 mb-18 mt-6">
            <Button variant={"tertiary"} className="font-ubuntu font-normal">
              Save
            </Button>
            <Button className="font-ubuntu font-normal">Cancel</Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}

type MiniNotificationControllerProps = {
  title: string;
  description: string;
  basic?: boolean;
  advance?: boolean;
  fullAccess?: boolean;
};
function MiniNotificationController({
  title,
  description,
  basic = true,
  advance = true,
  fullAccess = true,
}: MiniNotificationControllerProps) {
  const [selectedValue, setSelectedValue] = useState("basic");
  return (
    <div className="my-2  rounded pt-4 pb-5 px-3 shadow-[0px_4px_30px_0px_#0000000F]">
      <div className="flex justify-between mb-5">
        <div className="w-3/4">
          <h4 className="leading-none mb-0.5 font-ubuntu">{title}</h4>
          <p className="text-sm text-[#2A2B2F] max-w-[42ch] font-raleway">
            {description}
          </p>
        </div>
        <div className="">
          <Switch
            className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
            id="email1"
          />
        </div>
      </div>

      <div className="flex gap-3">
        {basic && (
          <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded items-center">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="radio"
                name="access-level"
                value="basic"
                checked={selectedValue === "basic"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="sr-only"
              />
              <div
                className={`
            w-4 h-4 rounded-full flex items-center justify-center transition-all border-2 ring-2 border-[#E2E8F0] ring-[#E9EFF7]
            ${
              selectedValue === "basic"
                ? "border-blue-500 bg-[#087DC2] ring-[#FFDEE8]"
                : ""
            }
          `}
              >
                {selectedValue === "basic" && (
                  <svg
                    className="w-3 h-3 text-blue-500 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="">
              <span className="text-sm font-ubuntu mb-0.5 leading-none text-gray-900">
                Basic
              </span>
              <p className="text-xs font-raleway text-[#7D7D7D] leading-none text-nowrap">
                View Only
              </p>
            </div>
          </label>
        )}

        {advance && (
          <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded items-center">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="radio"
                name="access-level"
                value="advance"
                checked={selectedValue === "advance"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="sr-only"
              />
              <div
                className={`
            w-4 h-4 rounded-full flex items-center justify-center transition-all border-2 ring-2 border-[#E2E8F0] ring-[#E9EFF7]
            ${
              selectedValue === "advance"
                ? "border-blue-500 bg-[#087DC2] ring-[#FFDEE8]"
                : ""
            }
          `}
              >
                {selectedValue === "advance" && (
                  <svg
                    className="w-3 h-3 text-blue-500 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-sm font-ubuntu text-gray-900 leading-none">
                Advance
              </span>

              <p className="text-xs font-raleway text-[#7D7D7D] leading-none text-nowrap">
                View, Submit & Edit
              </p>
            </div>
          </label>
        )}
        {fullAccess && (
          <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded items-center">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="radio"
                name="access-level"
                value="full-access"
                checked={selectedValue === "full-access"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="sr-only"
              />
              <div
                className={`
            w-4 h-4 rounded-full flex items-center justify-center transition-all border-2 ring-2 border-[#E2E8F0] ring-[#E9EFF7]
            ${
              selectedValue === "full-access"
                ? "border-blue-500 bg-[#087DC2] ring-[#FFDEE8]"
                : ""
            }
          `}
              >
                {selectedValue === "full-access" && (
                  <svg
                    className="w-3 h-3 text-blue-500 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-sm font-ubuntu text-gray-900 leading-none">
                Full Access
              </span>
              <p className="text-xs font-raleway text-[#7D7D7D] leading-none">
                View, Submit, Edit Approve, Cancel & Delete
              </p>
            </div>
          </label>
        )}
      </div>
    </div>
  );
}
