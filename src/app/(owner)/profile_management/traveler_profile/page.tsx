"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoreHorizontal, Plus, Search } from "lucide-react";
import { useState } from "react";
import TravelerProfileSheet from "@/components/sheet/TravelerProfileSheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Page() {
  const [sheetType, setSheetType] = useState<"create" | "update">("update");
  return (
    <Sheet>
      <div className="flex-1 px-3 pt-3">
        <div className="pb-2 border-b">
          <h4 className="font-medium font-ubuntu text-lg">
            Guest Traveler Profile
          </h4>
        </div>

        <div className="bg-white rounded mt-5 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] ">
          <div className="flex items-center gap-4 mb-5 border-b pb-2">
            <h4 className="text-lg font-ubuntu ">Business guest travelers</h4>
            <div className="ml-auto">
              <SheetTrigger asChild>
                <Button size="sm" onClick={() => setSheetType("create")}>
                  Create business guest profile
                  <Plus className="w-5 h-5" />
                </Button>
              </SheetTrigger>
            </div>
          </div>

          <div className="flex justify-center border-b mb-5 pb-5">
            <div className="relative w-[85%]">
              <button className="absolute right-2.5 top-3 cursor-pointer">
                <Search className="h-3.5 w-3.5 text-[#3A75BA] font-raleway" />
              </button>
              <Input
                className="bg-[#F7F9FC] border-0 rounded-sm pr-9"
                placeholder="Search guest travelers"
              />
            </div>
          </div>

          <div className="">
            {Array.from({ length: 5 }, (_, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[min-content_1fr_.3fr_min-content] gap-4 .flex items-center border-b pb-3 mb-3"
              >
                <div className="h-11 w-11 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  <p className="text-[#316DB4]">J</p>
                </div>
                <div className="">
                  <p className="text-[#18181A] leading-none font-ubuntu mb-0.5">
                    John Smith
                  </p>
                  <p className="text-sm text-[#5E6369] leading-none font-raleway">
                    emily.johnson@example.com
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm mr-2 text-[#5E6369] font-ubuntu">
                    Claimed account
                  </p>
                  <Tooltip>
                    <TooltipTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#96AECA"
                          d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m0 5.627a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
                        />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[15rem]">
                      <p className="max-w-[15rem]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Necessitatibus, unde.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="">
                  <Menubar className="border-0 p-0 h-auto shadow-none">
                    <MenubarMenu>
                      <MenubarTrigger>
                        <MoreHorizontal className="w-4 h-4 text-[#316DB4]" />
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem className="text-[#316DB4]">
                          Create new trip
                        </MenubarItem>
                        <SheetTrigger asChild>
                          <MenubarItem
                            onClick={() => setSheetType("update")}
                            className="text-[#316DB4]"
                          >
                            Edit profile
                          </MenubarItem>
                        </SheetTrigger>
                        <MenubarItem className="text-[#316DB4]">
                          Resend an invite
                        </MenubarItem>
                        <MenubarItem className="text-red-400">
                          Remove from guest list
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              </div>
            ))}
          </div>

          <Pagination className="text-[#5E6369]">
            <PaginationContent className="justify-between w-full">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>

              <div className="flex gap-2">
                {Array.from({ length: 7 }, (_, idx) => (
                  <PaginationItem key={idx}>
                    <PaginationLink isActive={idx == 2} href="#">
                      {(idx += 1)}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationLink href="#">
                    <PaginationEllipsis />
                  </PaginationLink>
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="bg-white rounded mt-5 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] mb-8">
          <div className="flex items-center gap-4 mb-5 border-b pb-2">
            <h4 className="text-lg font-ubuntu">Personal guest travelers</h4>
            <div className="ml-auto">
              <SheetTrigger>
                <Button size="sm" onClick={() => setSheetType("create")}>
                  Create personal guest profile
                  <Plus className="w-5 h-5" />
                </Button>
              </SheetTrigger>
            </div>
          </div>

          <div className="flex justify-center border-b mb-5 pb-5">
            <div className="relative w-[85%]">
              <button className="absolute right-2.5 top-3 cursor-pointer">
                <Search className="h-3.5 w-3.5 text-[#3A75BA] font-raleway font-medium" />
              </button>
              <Input
                className="bg-[#F7F9FC] border-0 rounded-sm pr-9"
                placeholder="Search guest travelers"
              />
            </div>
          </div>

          <div className="">
            {Array.from({ length: 5 }, (_, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[min-content_1fr_min-content] gap-4 .flex items-center border-b pb-3 mb-3"
              >
                <div className="h-11 w-11 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  <p className="text-[#316DB4]">J</p>
                </div>
                <div className="">
                  <p className="text-[#18181A] leading-none font-ubuntu mb-0.5">
                    John Smith
                  </p>
                  <p className="text-sm text-[#5E6369] leading-none font-raleway">
                    emily.johnson@example.com
                  </p>
                </div>

                <div className="">
                  <Menubar className="border-0 p-0 h-auto shadow-none">
                    <MenubarMenu>
                      <MenubarTrigger>
                        <MoreHorizontal className="w-4 h-4 text-[#316DB4]" />
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem className="text-[#316DB4]">
                          Create new trip
                        </MenubarItem>
                        <SheetTrigger asChild>
                          <MenubarItem
                            onClick={() => setSheetType("update")}
                            className="text-[#316DB4]"
                          >
                            Edit profile
                          </MenubarItem>
                        </SheetTrigger>
                        <MenubarItem className="text-[#316DB4]">
                          Resend an invite
                        </MenubarItem>
                        <MenubarItem className="text-red-400">
                          Remove from guest list
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              </div>
            ))}
          </div>

          <div className="flex border items-center px-2 py-2 rounded border-l-3 border-l-[#316DB4] mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#316DB4"
                d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"
              />
            </svg>
            <p className="ml-1 text-sm font-raleway font-medium text-[#5E6369]">
              Personal guest bookings are not visible to your company
            </p>
          </div>
        </div>
      </div>

      <TravelerProfileSheet sheetType={sheetType} />
    </Sheet>
  );
}
