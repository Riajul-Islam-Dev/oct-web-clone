"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit2 } from "iconsax-reactjs";

export default function ProfileFlightInformation() {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className="bg-white rounded-md mt-3 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] ">
      <div className="flex items-center gap-4 mb-5">
        <h4 className="font-ubuntu text-lg">Flight Preference</h4>
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
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2">
                KTN/TSK- Precheck number
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>

            <div className="flex-1">
              <Label htmlFor="date" className="mb-2  ">
                Redress number
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Seat preference*</Label>
              <div>
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Window" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="window">Window</SelectItem>
                    <SelectItem value="middle">Middle</SelectItem>
                    <SelectItem value="sideaway">Side Away</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">
                Special meal types
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div>
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="sandwich">Sandwich</SelectItem>
                    <SelectItem value="burger">Burger</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Special assistance*</Label>
              <div>
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Select This" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="value1">Value 1</SelectItem>
                    <SelectItem value="value2">Value 2</SelectItem>
                    <SelectItem value="value3">Value 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">
                Home airport
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div>
                <Input className="rounded-sm" placeholder="Type here" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">
                KTN/TSK- Precheck number
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div className="font-raleway text-sm">5533243423423</div>
            </div>

            <div className="flex-1">
              <Label htmlFor="date" className="mb-2  ">
                Redress number
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div className="font-raleway text-sm">234234234244</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Seat preference*</Label>
              <div className="font-raleway text-sm">Middle</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">
                Special meal types
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div className="font-raleway text-sm">Sandwich</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mb-5">
            <div className="flex-1">
              <Label className="mb-2  ">Special assistance*</Label>
              <div className="font-raleway text-sm">assistance once</div>
            </div>

            <div className="flex-1">
              <Label className="mb-2  ">
                Home airport
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
                      A Known Traveler Number (KTN) is a 8-10 digit alphanumeric
                      code that lets you skip security steps at airports using
                      TSA PreCheck®, Global Entry, NEXUS, or SENTRI. Use numbers
                      and letters only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div className="font-raleway text-sm">
                Dhaka, Dhaka Division, Bangladesh
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
