import { FormDataType } from "../AddCompanyMultiStepForm";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

type Step2Props = {
  formData: FormDataType;
  handleInputChange: (name: string, value: string | object) => void;
};

export default function Step2({ formData, handleInputChange }: Step2Props) {
  return (
    <>
      <div className="mb-4">
        <Label htmlFor="officeName" className="mb-1 font-normal">
          Office Name*
        </Label>
        <Input
          id="officeName"
          value={formData.officeName}
          onChange={(e) => handleInputChange("officeName", e.target.value)}
          placeholder="Type Here"
        />
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="address1" className="mb-1 font-normal">
            Address Line 1*
          </Label>
          <Input
            id="address1"
            value={formData.address1}
            onChange={(e) => handleInputChange("address1", e.target.value)}
            placeholder="Type Here"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="address2" className="mb-1 font-normal">
            Address Line 2
          </Label>
          <Input
            id="address2"
            value={formData.address2}
            onChange={(e) => handleInputChange("address2", e.target.value)}
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="country2" className="mb-1 font-normal">
            Country*
          </Label>
          <div>
            <CountryDropdown
              isShowFlag={true}
              placeholder="Select country name"
              defaultValue={formData.country2}
              onChange={(e) => handleInputChange("country", e)}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="city" className="mb-1 font-normal">
            City*
          </Label>
          <div>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>

        <div className="flex-1">
          <Label htmlFor="state" className="mb-1 font-normal">
            State*
          </Label>
          <div>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="flex-1">
          <Label htmlFor="postCode" className="mb-1 font-normal">
            Post Code*
          </Label>
          <div>
            <Input
              id="postCode"
              value={formData.postCode}
              onChange={(e) => handleInputChange("postCode", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="email" className="mb-1 font-normal">
            Email*
          </Label>
          <div className="">
            <Input
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-normal">Mobile Number*</Label>
          <PhoneInput
            isShowFlag={true}
            defaultCountry="US"
            value={formData.mobileNumber}
            placeholder="1XXX XXX XXX"
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="flex-1">
          <Label htmlFor="description" className="mb-1 font-normal">
            Description
          </Label>
          <div className="">
            <Textarea
              rows={6}
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>
    </>
  );
}
