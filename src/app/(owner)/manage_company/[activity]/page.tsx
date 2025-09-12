import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import CalendarWithRange from "@/components/ui/CalendarWithRange";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allActivityData } from "@/utils/helperData";
import { ChevronLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex items-center border-b py-2 w-full">
        <SidebarTriggerClient />
        <h3 className="uppercase font-semibold">Manage Company</h3>
      </div>
      <div className="">
        <div className="m-4 py-3 px-4 bg-white rounded shadow-[0px_4px_30px_0px_#0000000F]">
          <div className="flex mb-5">
            <Link
              className="flex items-center px-2 py-0.5 bg-[#D8E3F0] rounded-full hover:bg-[#abbdd4] transition-all "
              href={"/manage_company"}
            >
              <ChevronLeft className="size-4 text-[#316DB4]" />
              <span className="text-sm mr-1">Back</span>
            </Link>
            <p className="ml-4 font-ubuntu">GILLETTE</p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="flex justify-between">
              <p className="font-ubuntu">Activity Log</p>
              <div className="flex gap-3">
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Select company" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="comp1">Company 1</SelectItem>
                    <SelectItem value="comp2">Company 2</SelectItem>
                    <SelectItem value="comp3">Company 3</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Select User" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="user1">User 1</SelectItem>
                    <SelectItem value="user2">User 2</SelectItem>
                    <SelectItem value="user3">User 3</SelectItem>
                  </SelectContent>
                </Select>

                <CalendarWithRange />
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-2xl mx-auto p-6 bg-white font-ubuntu">
              <div className=".space-y-4">
                {allActivityData.map((item) => {
                  if (item.section) {
                    return (
                      <TimelineDivider key={item.id} label={item.section} />
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 border-b pb-3 mb-3"
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage
                          src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
                          alt={item.name}
                        />
                        <AvatarFallback className="text-xs bg-gray-100 text-gray-600">
                          {item.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          {item.name} {item.action}
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3" />
                          <span className="text-xs">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TimelineDivider({ label }: { label: string }) {
  return (
    <div className="relative flex items-center justify-center border-b py-4 -mt-3 mb-3">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative bg-white">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border text-gray-600 tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
