import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import DatePicker from "../ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function AddNewTravelerToUserManagementSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>ADD NEW TRAVELER INFORMATION</SheetTitle>
        </SheetHeader>

        <>
          <div className="mx-5 mt-8">
            <div className="bg-white p-3 rounded shadow-[0px_4px_30px_0px_#0000000F]">
              <div className="bg-[#F7F9FC] py-5 flex justify-center">
                <div className="rounded-full relative cursor-pointer">
                  <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/30  rounded-full"></div>
                  <Image
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    height={70}
                    width={70}
                    alt="avatar"
                    className="rounded-full"
                    unoptimized
                  />
                  <div className="absolute top-[38%] left-[38%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#EDA92C"
                        d="M9.75 13a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                      />
                      <path
                        fill="#EDA92C"
                        fillRule="evenodd"
                        d="M7.474 7.642A3.14 3.14 0 0 1 10.616 4.5h2.768a3.14 3.14 0 0 1 3.142 3.142a.03.03 0 0 0 .026.029l2.23.18c.999.082 1.82.82 2.007 1.805a22.1 22.1 0 0 1 .104 7.613l-.097.604a2.505 2.505 0 0 1-2.27 2.099l-1.943.157a56.6 56.6 0 0 1-9.166 0l-1.943-.157a2.505 2.505 0 0 1-2.27-2.1l-.097-.603c-.407-2.525-.371-5.1.104-7.613a2.226 2.226 0 0 1 2.007-1.804l2.23-.181a.03.03 0 0 0 .026-.029M12 9.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <p className="text-sm font-raleway">
                  These details must match your government-issued ID for
                  ticketing purposes
                </p>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <Label className="mb-2  ">Legal first name*</Label>
                    <div className="">
                      <Input
                        className="rounded-sm"
                        placeholder="Type first name"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label className="mb-2  ">Legal middle name*</Label>
                    <div>
                      <Input
                        className="rounded-sm"
                        placeholder="Type middle name"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <Label className="mb-2  ">Legal last name*</Label>
                    <div className="">
                      <Input
                        className="rounded-sm"
                        placeholder="Type last name"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label className="mb-2  ">Suffix*</Label>
                    <div>
                      <Select>
                        <SelectTrigger className="rounded-sm w-full">
                          <SelectValue placeholder="Sir" />
                        </SelectTrigger>
                        <SelectContent className="">
                          <SelectItem value="sir">Sir</SelectItem>
                          <SelectItem value="jr">Jr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <Label className="mb-2  ">Gender*</Label>
                    <div>
                      <Select>
                        <SelectTrigger className="rounded-sm w-full">
                          <SelectValue placeholder="Male" />
                        </SelectTrigger>
                        <SelectContent className="">
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="nonbinary">Non Binary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="date" className="mb-2  ">
                      Birthday*
                    </Label>
                    <div>
                      <DatePicker
                        className="bg-white border"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label className="mb-2  ">Mobile Number*</Label>
                    <PhoneInput
                      isShowFlag={true}
                      defaultCountry="US"
                      placeholder="1XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 mb-8">
              <SheetClose asChild>
                <Button className="font-ubuntu " variant={"secondary"}>
                  Cancel
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="font-ubuntu ">Save</Button>
              </SheetClose>
            </div>
          </div>
        </>
      </ScrollArea>
    </SheetContent>
  );
}
