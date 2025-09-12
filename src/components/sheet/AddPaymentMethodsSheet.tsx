import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryDropdown } from "@/components/ui/country-dropdown";

export default function AddPaymentMethodsSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW PAYMENT METHOD</SheetTitle>
        </SheetHeader>

        <>
          <div className="mx-5 mt-4">
            <div className="bg-white p-3 rounded shadow-[0px_4px_30px_0px_#0000000F]">
              <div className="mb-4">
                <p className="font-medium font-ubuntu">Card Information</p>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <Label className="mb-2  ">Card nickname*</Label>
                    <div className="">
                      <Input
                        className="rounded-sm"
                        placeholder="Type first name"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label className="mb-2  ">Name on card*</Label>
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
                    <Label className="mb-2  ">Account Type*</Label>
                    <div>
                      <Select>
                        <SelectTrigger className="rounded-sm w-full">
                          <SelectValue placeholder="Select account type" />
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
                    <Label className="mb-2  ">Card*</Label>
                    <div>
                      <Select>
                        <SelectTrigger className="rounded-sm w-full">
                          <SelectValue placeholder="Select Card" />
                        </SelectTrigger>
                        <SelectContent className="">
                          <SelectItem value="value1">Value 1</SelectItem>
                          <SelectItem value="value2">Value 2</SelectItem>
                          <SelectItem value="value3">Value 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <Label className="mb-2  text-nowrap">
                      Expiration Month*
                    </Label>
                    <div>
                      <Input className="rounded-sm" placeholder="Type here" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Label className="mb-2  text-nowrap">
                      Expiration Year*
                    </Label>
                    <div>
                      <Input className="rounded-sm" placeholder="Type here" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Label className="mb-2  text-nowrap">CVN</Label>
                    <div>
                      <Input className="rounded-sm" placeholder="Type here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 mt-3 rounded shadow-[0px_4px_30px_0px_#0000000F]">
              <h4 className="font-medium font-ubuntu mb-3">Billing address</h4>

              <div className="flex gap-5 justify-between mb-5">
                <div className="flex-1">
                  <Label className="mb-2  ">Country*</Label>
                  <div>
                    <CountryDropdown
                      isShowFlag={true}
                      placeholder="Select country name"
                      defaultValue="USA"
                      // onChange={() => void}
                    />
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>

              <div className="flex gap-5 justify-between mb-5">
                <div className="flex-1">
                  <Label className="mb-2  ">Address line 1*</Label>
                  <div>
                    <Input className="rounded-sm" placeholder="Type here" />
                  </div>
                </div>
                <div className="flex-1">
                  <Label className="mb-2  ">Address line 2*</Label>
                  <div>
                    <Input className="rounded-sm" placeholder="Type here" />
                  </div>
                </div>
              </div>

              <div className="flex gap-5 justify-between mb-5">
                <div className="flex-1">
                  <Label className="mb-2  ">City*</Label>
                  <div>
                    <Input className="rounded-sm" placeholder="Type here" />
                  </div>
                </div>
                <div className="flex-1">
                  <Label className="mb-2  ">State/Province*</Label>
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
                  <Label className="mb-2  ">Postal code</Label>
                  <div>
                    <Input className="rounded-sm" placeholder="Type here" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 mb-12">
              <SheetClose asChild>
                <Button className="font-ubuntu font-normal" variant="secondary">
                  Cancel
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="font-ubuntu font-normal">
                  Save Payment Method
                </Button>
              </SheetClose>
            </div>
          </div>
        </>
      </ScrollArea>
    </SheetContent>
  );
}
