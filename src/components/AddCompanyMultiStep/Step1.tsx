import { FormDataType } from "../AddCompanyMultiStepForm";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Step1Props = {
  formData: FormDataType;
  handleInputChange: (name: string, value: string | object) => void;
};
export default function Step1({ formData, handleInputChange }: Step1Props) {
  return (
    <>
      <div className="mb-4">
        <Label htmlFor="companyName" className="mb-1 font-normal">
          Company Name*
        </Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          placeholder="Type Here"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="website" className="mb-1 font-normal">
          Website*
        </Label>
        <Input
          id="website"
          value={formData.website}
          onChange={(e) => handleInputChange("website", e.target.value)}
          placeholder="Type Here"
        />
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="contactPersonName" className="mb-1 font-normal">
            Contact Person Name*
          </Label>
          <Input
            id="contactPersonName"
            value={formData.contactPersonName}
            onChange={(e) =>
              handleInputChange("contactPersonName", e.target.value)
            }
            placeholder="Type Here"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="contactPersonEmail" className="mb-1 font-normal">
            Contact Person Email*
          </Label>
          <Input
            id="contactPersonEmail"
            value={formData.contactPersonEmail}
            onChange={(e) =>
              handleInputChange("contactPersonEmail", e.target.value)
            }
            placeholder="Type Here"
          />
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="" className="mb-1 font-normal">
            Country*
          </Label>
          <div>
            <CountryDropdown
              isShowFlag={true}
              placeholder="Select country name"
              defaultValue={formData.country}
              onChange={(e) => handleInputChange("country", e)}
            />
          </div>
        </div>

        <div className="flex-1">
          <Label className="mb-1 font-normal">Contact Person Email*</Label>
          <PhoneInput
            isShowFlag={true}
            defaultCountry="US"
            value={formData.mobileNumber}
            placeholder="1XXX XXX XXX"
          />
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label className="mb-1 font-normal">Status</Label>
          <div>
            <Select onOpenChange={(e) => console.log(e, "-ee")}>
              <SelectTrigger className="rounded-sm w-full">
                <SelectValue placeholder="Active" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="value1">Active</SelectItem>
                <SelectItem value="value2">Deactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
    </>
  );
}
