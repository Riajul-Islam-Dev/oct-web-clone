import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CountryDropdown } from "../ui/country-dropdown";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DatePicker from "../ui/date-picker";
import { PhoneInput } from "../ui/phone-input";
import FileDropZone from "../FileDropZone/FileDropZone";

export function UpdateCompanyRepresentativeSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>UPDATE COMPANY REPRESENTATIVE</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">Legal name</h4>

            <div className="flex mb-5 gap-4">
              <div className="flex-1">
                <Label htmlFor="fname" className="mb-2 font-normal">
                  First name *
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="fname"
                    placeholder="Type here"
                  />
                </div>
              </div>

              <div className="flex-1">
                <Label htmlFor="lname" className="mb-2 font-normal">
                  Last name *
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="lname"
                    placeholder="Type here"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1  mb-5">
              <Label htmlFor="email" className="mb-2 font-normal">
                Email *
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="email"
                  placeholder="company-name@mail.com"
                />
              </div>
            </div>

            <div className="flex-1  mb-5">
              <Label htmlFor="jobTitle" className="mb-2 font-normal">
                Job title *
              </Label>
              <div>
                <Select>
                  <SelectTrigger className="rounded-sm w-full">
                    <SelectValue placeholder="Select job title" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="value1">Value 1</SelectItem>
                    <SelectItem value="value2">Value 2</SelectItem>
                    <SelectItem value="value3">Value 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex-1  mb-5">
              <Label htmlFor="dob" className="mb-2 font-normal">
                Date of birth *
              </Label>
              <div>
                <DatePicker placeholder="20/20/2020" />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">
              Executive&apos;s home address
            </h4>
            <div className="flex gap-4 mb-5">
              <div className="flex-1 ">
                <Label htmlFor="address1" className="mb-2 font-normal">
                  Address line 1*
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="address1"
                    placeholder="Type here"
                  />
                </div>
              </div>
              <div className="flex-1 ">
                <Label htmlFor="address2" className="mb-2 font-normal">
                  Address line 2*
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="address2"
                    placeholder="Type here"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 mb-5">
              <Label htmlFor="suite" className="mb-2 font-normal">
                Apt. num, suite (optional)*
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="suite"
                  placeholder="xxxxxxxxxx"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-5">
              <div className="flex-1 ">
                <Label htmlFor="city" className="mb-2 font-normal">
                  City*
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="address1"
                    placeholder="Type here"
                  />
                </div>
              </div>

              <div className="flex-1">
                <Label htmlFor="state" className="mb-2 font-normal">
                  State/Province *
                </Label>
                <div>
                  <Select>
                    <SelectTrigger className="rounded-sm w-full">
                      <SelectValue placeholder="Select state" />
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
                <Label htmlFor="postalCode" className="mb-2 font-normal">
                  Postal code
                </Label>
                <div>
                  <Input
                    className="rounded-sm"
                    id="postalCode"
                    placeholder="Type here"
                  />
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="flex-1">
                <Label htmlFor="country" className="mb-2 font-normal">
                  Country *
                </Label>
                <div>
                  <CountryDropdown
                    placeholder="Select country name"
                    defaultValue="USA"
                    isShowFlag
                    // onChange={() => void}
                  />
                </div>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="mb-5">
              <Label htmlFor="phone" className="mb-2 font-normal">
                Phone Number *
              </Label>
              <div>
                <PhoneInput
                  className=""
                  defaultCountry="BD"
                  placeholder="1XXX XXX XXX"
                />
              </div>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">
              Social security number
            </h4>

            <div className="flex-1 mb-5">
              <Label htmlFor="ssn" className="mb-2 font-normal">
                SSN Last 4 digits
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="ssn"
                  placeholder="xxxxxxxxxx"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">
              Attach a document{" "}
              <span className="text-[#5E6369]">(optional)</span>
            </h4>
            <FileDropZone
              label="Please attach documentation to verify your company representative information. If you are
uploading ID document, please upload the front and back of the card."
            />
          </div>

          <div className="flex gap-2 mb-18 mt-8">
            <Button className="bg-[#E8AE2C]">Update</Button>
            <Button className="bg-[#087DC2]">Cancel</Button>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
