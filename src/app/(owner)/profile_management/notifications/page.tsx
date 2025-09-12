import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Switch } from "@/components/ui/switch";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <div className="flex-1 px-3 pt-3">
      <div className="pb-2 border-b mb-3">
        <h4 className="font-medium font-ubuntu text-lg">Notifications</h4>
        <p className="text-sm font-raleway font-medium">
          Let us know how we should notify you
        </p>
      </div>

      <div className="">
        {[
          "Booking confirmations (when you book for yourself)",
          "Booking confirmations (when someone books for you)",
          "Upcoming trip reminders",
          "Trip proposals",
          "Product marketing",
          "Rewards reminders",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between py-4 border-b"
          >
            <p className="font-ubuntu">{item}</p>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-2">
                <Label className="" htmlFor="email1">
                  Email
                </Label>
                <Switch
                  className="data-[state=checked]:bg-[#316DB4]"
                  id="email1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Label className="" htmlFor="mobile1">
                  Mobile Push
                </Label>
                <Switch
                  className="data-[state=checked]:bg-[#316DB4]"
                  id="mobile1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex border items-center px-2 py-2 rounded border-l-3 border-l-[#EDA92C] my-5 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#EDA92C"
            d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m0 5.627a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
          />
        </svg>
        <p className="font-raleway font-medium ml-1 text-sm text-[#5E6369]">
          <span className="text-[#18181A]">Important note:</span> To receive
          push notifications, ensure they&apos;re enabled on your mobile device.
        </p>
      </div>

      <div className="mt-10 ">
        <div className="pb-2 border-b mb-4">
          <div className="flex items-center justify-between">
            <div className="">
              <h4 className="font-medium font-ubuntu text-lg">
                Notifications for someone else&apos;s trips
              </h4>
              <p className="text-sm font-raleway font-medium">
                If you book travel for others, let us know how we should notify
                you about their trips.
              </p>
            </div>
            <div className="">
              <Button size="sm" variant={"secondary"}>
                <Search />
                Search
              </Button>
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2"
          defaultValue="item-1"
        >
          {Array.from({ length: 7 }, (_, idx) => (
            <AccordionItem
              key={idx}
              className="border rounded"
              value={`item-${idx}`}
            >
              <AccordionTrigger className="bg-[#F7F9FC] px-3 rounded hover:no-underline items-center">
                <div className="flex items-center gap-3 ">
                  <div className="h-11 w-11 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                    <p className="text-[#316DB4]">J</p>
                  </div>
                  <div className="">
                    <p className="text-[#18181A] leading-none text-base font-ubuntu mb-0.5">
                      John Smith
                    </p>
                    <p className="text-sm text-[#5E6369] leading-none font-raleway">
                      emily.johnson@example.com
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="rounded pb-0">
                <div className="">
                  {[
                    "Booking confirmations (when you book for them)",
                    "Booking confirmations (when they book for themselves)",
                    "Upcoming trip reminders",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-4 px-3 border-b last:border-b-0"
                    >
                      <p className="font-ubuntu">{item}</p>
                      <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-2">
                          <Label className="" htmlFor="email1">
                            Email
                          </Label>
                          <Switch
                            className="data-[state=checked]:bg-[#316DB4]"
                            id="email1"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Label className="" htmlFor="mobile1">
                            Mobile Push
                          </Label>
                          <Switch
                            className="data-[state=checked]:bg-[#316DB4]"
                            id="mobile1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-6 mb-10">
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

                {/* <PaginationItem>
                  <PaginationLink href="#">
                    <PaginationEllipsis />
                  </PaginationLink>
                </PaginationItem> */}
              </div>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
