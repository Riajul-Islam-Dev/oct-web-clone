import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

export default function DelegatesAddUserSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>WHO CAN SEE MY PERSONAL TRIPS</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-6">
          <div className="relative mb-3">
            <Input
              className="pr-3 bg-[#F7F9FC] border-0 rounded-sm font-medium"
              placeholder="Search guest travelers"
            />
            <Search className="absolute right-3 top-3 text-[#316DB4] h-3.5 w-3.5" />
          </div>

          <div className="">
            {Array.from({ length: 5 }, (_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 font-normal shadow-[0px_4px_30px_0px_#0000000F] px-3 py-3 rounded mb-1"
              >
                <div className="h-9 w-9 rounded-full bg-[#F3F3F3] flex items-center justify-center">
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

                <p className="ml-auto">
                  <Checkbox className="border-[#316DB4] data-[state=checked]:bg-[#316DB4] data-[state=checked]:border-[#316DB4]" />
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-end my-8">
            <SheetClose asChild>
              <Button variant={"secondary"} className="font-ubuntu font-normal">
                Cancel
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="font-ubuntu font-normal">Save</Button>
            </SheetClose>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
