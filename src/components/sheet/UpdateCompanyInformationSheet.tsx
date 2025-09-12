import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
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
import FileDropZone from "../FileDropZone/FileDropZone";

export function UpdateCompanyInformationSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>UPDATE COMPANY INFORMATION</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">Legal Entity</h4>
            <div className="flex-1  mb-5">
              <Label htmlFor="legalName" className="mb-2 font-normal">
                Legal entity name *
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="legalName"
                  placeholder="Type here"
                />
              </div>
            </div>

            <div className="flex-1  mb-5">
              <Label htmlFor="ein" className="mb-2 font-normal">
                Employer Identification Number (EIN) *
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="ein"
                  placeholder="Type here"
                />
              </div>
            </div>

            <div className="flex-1  mb-5">
              <Label htmlFor="legalType" className="mb-2 font-normal">
                Legal entity type *
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="legalType"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">Billing address</h4>
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

            <div className="mb-5">
              <Label htmlFor="website" className="mb-2 font-normal">
                Website *
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="website"
                  placeholder="www.website.com"
                />
              </div>
            </div>

            <div className="mb-5">
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
          </div>

          <div className="pt-4 pb-3 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
            <h4 className="font-medium font-ubuntu mb-5">
              Attach a document{" "}
              <span className="text-[#5E6369]">(optional)</span>
            </h4>
            <FileDropZone />
          </div>

          <div className="flex gap-2 mb-18 mt-8">
            <SheetClose asChild>
              <Button variant="secondary">Update</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button>Cancel</Button>
            </SheetClose>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
