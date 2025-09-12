import DelegatesAddUserSheet from "@/components/sheet/DelegatesAddUserSheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { X } from "lucide-react";

export default function Page() {
  return (
    <Sheet>
      <div className="flex-1 px-3 pt-3">
        <div className="pb-2 border-b">
          <h4 className="font-medium font-ubuntu text-lg">
            Delegates & travel manager
          </h4>
        </div>

        <div className="bg-white rounded-md mt-5 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] mb-8">
          <div className="pb-2 border-b">
            <h4 className="font-medium font-ubuntu text-lg">Delegate info</h4>
            <p className="text-sm text-[#2A2B2F] font-raleway font-medium">
              Let us know who should have access to booking travel on your
              behalf, or request access to booking travel for others.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-raleway font-medium">
              My travel manager access level
            </h4>
            <ul className="flex flex-wrap gap-2 items-center mt-2 text-sm">
              <li className="bg-[#F7F9FC] text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu font-medium">
                Travel Manager Access Level :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369] font-raleway">
                Entire company
              </li>
            </ul>

            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu">
                Office :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Office Name 1
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Office Name 2
              </li>
            </ul>

            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu">
                Department :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Department Name 1
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Department Name 2
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Department Name 3
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-raleway font-medium">
              Who is my travel manager
            </h4>
            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu">
                Entire company travel manager :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                John Smith
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Sarah Davis
              </li>
            </ul>

            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu">
                Travel manager by office :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                John Smith
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Emily Johnson
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Michael Brown
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Sarah Davis
              </li>
            </ul>

            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-ubuntu">
                Travel manager by department :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Amanda Clark
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                James Martinez
              </li>

              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Lisa Anderson
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]">
                Robert Taylor
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-raleway font-medium">
              These users can book travel on my behalf
            </h4>
            <ul className="flex gap-2 flex-wrap items-center mt-2 font-raleway text-sm">
              <li className="bg-[#F7F9FC] font-medium text-[#316DB4] rounded border-l-3 border-[#316DB4] px-3 py-1.5 font-raleway">
                User :
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369] flex items-center">
                John Smith
                <X className="size-4 ml-1.5" color="#FF4242" />
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]  flex items-center">
                Emily Johnson <X className="size-4 ml-1.5" color="#FF4242" />
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]  flex items-center">
                Michael Brown <X className="size-4 ml-1.5" color="#FF4242" />
              </li>
              <li className="bg-[#F7F9FC] px-4 py-1.5 rounded-full text-[#5E6369]  flex items-center">
                Sarah Davis <X className="size-4 ml-1.5" color="#FF4242" />
              </li>
              <SheetTrigger asChild>
                <li className="bg-[#316DB4] text-white px-4 py-1.5 rounded-full cursor-pointer flex items-center">
                  Add User
                </li>
              </SheetTrigger>
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-ubuntu">
              Delegates for personal travel manager
            </h4>
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
            <p className="ml-1 text-sm text-[#5E6369] font-raleway">
              Must be one of the users that can book on your behalf
            </p>
          </div>

          <div className="mt-5">
            <div className="flex-1 mb-4">
              <Label className="mb-2">Users*</Label>
              <div>
                <Input className="rounded-sm" placeholder="Pick user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DelegatesAddUserSheet />
    </Sheet>
  );
}
