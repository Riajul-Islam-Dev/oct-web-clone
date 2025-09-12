import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Search, X } from "lucide-react";

export default function Page() {
  return (
    <div className="px-4 py-4 flex-1 ">
      <div className="mb-4">
        <h4 className="text-lg font-ubuntu">Notification Management</h4>
      </div>

      <div className="border-b pb-2 mb-3">
        <div className="flex items-center gap-3">
          <p className="text-md font-ubuntu">Manager notifications</p>
          <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-75" />
        </div>
        <p className="font-ubuntu text-sm text-[#5E6369]">
          When enabled, managers will receive email notifications for all
          bookings made by their direct reports.
        </p>
      </div>

      <ul className="flex gap-2 flex-wrap items-center text-sm">
        <li className="bg-[#F7F9FC]  text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu font-medium">
          Manager List :
        </li>
        <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
          Sarah Davis
          <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
        </li>
        <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
          Michael Brown
          <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
        </li>
        <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
          Emily Johnson
          <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
        </li>
      </ul>

      <div className="relative w-1/2 mb-3 mt-3">
        <Input
          placeholder="Search Manager"
          className="pr-8 border-0 bg-[#F7F9FC]"
        />
        <div className="absolute right-2.5 top-0 bottom-0 flex items-center">
          <Search color="#316DB4" className="size-4" />
        </div>
      </div>

      <div className="mt-8">
        <p className="font-ubuntu text-[#5E6369] border-b pb-2 mb-3">
          Enter an email to cc internal or external individuals on all bookings.
        </p>
        <ul className="flex gap-2 flex-wrap items-center text-sm">
          <li className="bg-[#F7F9FC]  text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu font-medium">
            Email List :
          </li>
          <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
            john.smith@techcorp.com
            <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
          </li>
          <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
            emily.johnson@techcorp.com
            <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
          </li>
          <li className="bg-white shadow-[0px_4px_30px_0px_#0000000F]  px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
            michael.brown@techcorp.com
            <X className="inline size-3 ml-1 cursor-pointer text-red-500" />
          </li>
        </ul>
        <div className="relative w-1/2 mb-3 mt-3">
          <Input
            placeholder="Type email here"
            className="pr-8 border-0 bg-[#F7F9FC]"
          />
          <div className="absolute right-2.5 top-0 bottom-0 flex items-center">
            <Search color="#316DB4" className="size-4" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between border-b pb-2 mb-4">
          <p className="font-ubuntu text-lg ">Banner message for all users</p>
          <div className="flex gap-2 items-center">
            <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA] scale-85" />
            <p className="font-ubuntu text-sm">Published</p>
          </div>
        </div>

        <div className="">
          <div className="mb-5">
            <Label htmlFor="description" className="mb-2 font-normal">
              Message
            </Label>
            <div className="">
              <Textarea
                rows={5}
                id="message"
                placeholder="Your message goes here"
              />
              <p className="text-right text-xs text-[#656565] font-raleway">
                200 character limit. 200 remaining.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <Label className="mb-2">
              URL for &quot;Learn more&quot; link{" "}
              <span className="text-gray-400">(optional)</span>
            </Label>
            <div>
              <Input
                className="rounded-sm"
                placeholder="https://yourlink.com/banner"
              />
            </div>
          </div>

          <div className="mb-5">
            <Label className="mb-2">
              Start and end dates (Pacific time){" "}
              <span className="text-gray-400">(optional)</span>
            </Label>
            <div>
              <DatePicker
                className="bg-white border"
                placeholder="Select dates"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mb-12">
            <Button className="font-ubuntu font-normal" variant={"secondary"}>
              Cancel
            </Button>
            <Button className="font-ubuntu font-normal">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
