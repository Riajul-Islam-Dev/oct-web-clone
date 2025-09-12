import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChevronRight, X } from "lucide-react";

export default function Page() {
  return (
    <div className="px-4 py-4 flex-1">
      <div className="mb-4">
        <h4 className="text-lg font-ubuntu">General Setting</h4>
      </div>
      <div className="py-3 px-4 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] w-full mb-3">
        <p className="text-md mb-2 font-medium font-raleway">
          Basic Permission
        </p>
        <div className="bg-[#F7F9FC] px-2 py-1.5 rounded border-l border-l-2 border-[#316DB4] inline-block">
          <div className="flex gap-1 items-center">
            <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />

            <span className="text-sm font-ubuntu font-medium text-[#316DB4]">
              || Need Travel Manager&apos;s approval before submitting Travel
              Request
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="py-3 px-4 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] w-full">
          <p className="text-md mb-2 font-medium font-raleway">
            Financial year start
          </p>
          <p className="text-sm text-[#5E6369] mb-2 font-raleway">
            Select the starting month of your financial/reporting year. This
            will be used for reports, budgets, and compliance tracking
          </p>
          <Select>
            <SelectTrigger className="rounded-sm w-full">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="jan">January</SelectItem>
              <SelectItem value="feb">February</SelectItem>
              <SelectItem value="march">March</SelectItem>
              <SelectItem value="apr">April</SelectItem>
              <SelectItem value="may">May</SelectItem>
              <SelectItem value="jun">June</SelectItem>
              <SelectItem value="jul">July</SelectItem>
              <SelectItem value="aug">August</SelectItem>
              <SelectItem value="sep">September</SelectItem>
              <SelectItem value="oct">October</SelectItem>
              <SelectItem value="nov">November</SelectItem>
              <SelectItem value="dec">December</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="py-3 px-4 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] w-full">
          <p className="text-md mb-2 font-medium font-raleway">Timezone</p>
          <p className="text-sm text-[#5E6369] mb-2 font-raleway">
            Choose the Timezone that should be applied to your reports,
            notifications, and activity tracking
          </p>
          <Select>
            <SelectTrigger className="rounded-sm w-full">
              <SelectValue placeholder="Select Timezone" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="pst">Pacific Standard Time</SelectItem>
              <SelectItem value="mst">Mountain Standard Time</SelectItem>
              <SelectItem value="cst">Central Standard Time</SelectItem>
              <SelectItem value="est">Eastern Standard Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <h4 className=".text-md mb-4 mt-6">Group travel</h4>

      <div className="py-3 px-4 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] w-full mb-3">
        <p className="text-md mb-2 font-medium font-raleway">Event approvals</p>
        <div className="bg-[#F7F9FC] px-2 py-1.5 rounded border-l border-l-2 border-[#316DB4] ">
          <div className="flex gap-1 items-center">
            <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />

            <div>
              <p className="text-sm font-ubuntu font-medium text-[#316DB4]">
                || Require admin approval before sending invites
              </p>
              <p className="text-sm font-raleway text-[#2A2B2F] ">
                When enabled, all group event invites must be reviewed and
                approved by an admin before being sent.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1 ml-12">
            <p className="text-[#316DB4] mb-2 font-medium font-raleway">
              Approval is not required for:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />
                <div className="">
                  <p className="font-medium font-ubuntu text-[#18181A]">
                    || Managers
                  </p>
                  <p className="text-[#5E6369] font-raleway">
                    Let managers send group event invites without needing admin
                    approval.
                  </p>
                </div>
              </li>

              <li className="flex gap-3 text-sm">
                <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />
                <div className="">
                  <p className="font-medium font-ubuntu text-[#18181A]">
                    || Delegates
                  </p>
                  <p className="text-[#5E6369] font-raleway">
                    Let delegates send group event invites without needing admin
                    approval.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="text-[#316DB4] font-medium font-raleway">
              New request notifications
            </p>
            <p className="font-raleway mb-2 text-sm">
              Add the email addresses of admins who should receive a
              notification when a new event approval request is submitted.
            </p>
            <div className="relative mb-3">
              <Input
                placeholder="Type email here"
                className="pr-8 border-0 bg-[#F7F9FC]"
              />
              <div className="absolute right-2.5 top-0 bottom-0 flex items-center">
                <ChevronRight color="#316DB4" className="size-4" />
              </div>
            </div>

            <ul className="flex gap-2 flex-wrap items-center text-sm">
              <li className="bg-[#F7F9FC]  text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu font-medium">
                User List :
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                John Smith
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                John Smith
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                Michael Brown
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                Sarah Davis
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-3 px-4 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] w-full mb-12">
        <p className="text-md mb-2 font-medium font-raleway">Settings</p>
        <div className="bg-[#F7F9FC] px-2 py-1.5 rounded border-l border-l-2 border-[#316DB4] ">
          <div className="flex gap-1 items-center">
            <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />

            <div>
              <p className="text-sm font-ubuntu font-medium text-[#316DB4]">
                || Notification preferences
              </p>
              <p className="text-sm font-raleway text-[#2A2B2F] ">
                Selected users will receive an email notification whenever a new
                group travel event is created.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 mt-6">
          <div className="flex-1 ml-12">
            <div className="relative mb-3">
              <Input
                placeholder="Search coworkers"
                className="pr-8 border-0 bg-[#F7F9FC]"
              />
              <div className="absolute right-2.5 top-0 bottom-0 flex items-center">
                <ChevronRight color="#316DB4" className="size-4" />
              </div>
            </div>

            <ul className="flex gap-2 flex-wrap items-center text-sm">
              <li className="bg-[#F7F9FC]  text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu font-medium">
                User List :
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                John Smith
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                John Smith
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                Michael Brown
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
              <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                Sarah Davis
                <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex gap-3 text-sm">
              <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />
              <div className="">
                <p className="font-medium font-ubuntu text-[#18181A]">
                  || Allow a +1
                </p>
                <p className="text-[#5E6369] font-raleway">
                  Let event organizers allow participants to bring an external
                  guest (e.g., partner, family member).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
