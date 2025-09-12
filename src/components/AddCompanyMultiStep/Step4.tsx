import ProfileCircle from "@/assets/icons/ProfileCircle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Step4() {
  return (
    <>
      <div className="bg-[#F7F9FC] px-3 py-2 rounded mb-8">
        <h4 className="font-medium mb-2">System Roles:</h4>
        <ul className="flex gap-2">
          <li className="bg-[#FCFCFC] py-1 px-2 rounded cursor-pointer hover:bg-white">
            Admin
          </li>
          <li className="bg-[#FCFCFC] py-1 px-2 rounded cursor-pointer hover:bg-white">
            Traveler
          </li>
        </ul>
      </div>
      <div className="mb-12">
        <Label className="mb-2 font-normal ">Role Name</Label>
        <div className="relative">
          <div className="absolute left-2.5 top-3">
            <ProfileCircle size={18} />
          </div>
          <Input className="pl-9" placeholder="Finance manager" />
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
        description="View and control company billing"
      />
      <MiniNotificationController
        title="Reports & Analytics"
        description="Generate insights and performance reports"
      />
      <MiniNotificationController
        title="Policy Management"
        description="Create and manage company policies"
      />
    </>
  );
}

type MiniNotificationControllerProps = { title: string; description: string };
function MiniNotificationController({
  title,
  description,
}: MiniNotificationControllerProps) {
  const [selectedValue, setSelectedValue] = useState("basic");
  return (
    <div className="mb-12">
      <div className="flex justify-between mb-5">
        <div className="w-3/4">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm font-raleway">{description}</p>
        </div>
        <div className="">
          <Switch
            className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
            id="email1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded flex-1 items-center">
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
                  <>
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
                    {/* <div className="w-2 h-2 rounded-full bg-white"></div> */}
                  </>
                )}
              </div>
            </div>

            <div className="">
              <span className="text-sm font-medium leading-none text-gray-900">
                Basic
              </span>
              <p className="text-sm text-[#7D7D7D] leading-none">View Only</p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded flex-1 items-center">
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
                  <>
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
                  </>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-gray-900 leading-none">
                Advance
              </span>

              <p className="text-sm text-[#7D7D7D] leading-none">
                View, Submit & Edit
              </p>
            </div>
          </label>
        </div>

        <label className="flex items-start gap-3 cursor-pointer group bg-[#F7F9FC] px-4 py-3 rounded flex-1 items-center">
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
                <>
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
                </>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-gray-900 leading-none">
              Full Access
            </span>
            <p className="text-sm text-[#7D7D7D] leading-none">
              View, Submit, Edit Approve, Cancel & Delete
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
