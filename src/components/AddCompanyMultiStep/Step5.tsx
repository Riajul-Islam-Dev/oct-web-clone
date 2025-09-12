import { FormDataType } from "@/components/AddCompanyMultiStepForm";
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

type Step5Props = {
  formData: FormDataType;
  handleInputChange: (name: string, value: string | object) => void;
};

export default function Step5({ formData, handleInputChange }: Step5Props) {
  return (
    <>
      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="legalFirstName" className="mb-1 font-normal">
            Legal first name*
          </Label>
          <div className="">
            <Input
              id="legalFirstName"
              value={formData.legalFirstName}
              onChange={(e) =>
                handleInputChange("legalFirstName", e.target.value)
              }
              placeholder="Type Here"
            />
          </div>
        </div>

        <div className="flex-1">
          <Label htmlFor="legalMiddleName" className="mb-1 font-normal">
            Legal middle name*
          </Label>
          <div className="">
            <Input
              id="legalMiddleName"
              value={formData.legalMiddleName}
              onChange={(e) =>
                handleInputChange("legalMiddleName", e.target.value)
              }
              placeholder="Type Here"
            />
          </div>
        </div>

        <div className="flex-1">
          <Label htmlFor="legalLastName" className="mb-1 font-normal">
            Legal last name*
          </Label>
          <div className="">
            <Input
              id="legalLastName"
              value={formData.legalLastName}
              onChange={(e) =>
                handleInputChange("legalLastName", e.target.value)
              }
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="userRole" className="mb-1 font-normal">
            User Role*
          </Label>
          <div className="">
            <Select onOpenChange={(e) => console.log(e, "-ee")}>
              <SelectTrigger className="rounded-sm w-full">
                <SelectValue placeholder="Admin" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="userEmail" className="mb-1 font-normal">
            Email*
          </Label>
          <div className="">
            <Input
              id="userEmail"
              value={formData.userEmail}
              onChange={(e) => handleInputChange("userEmail", e.target.value)}
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <Label htmlFor="userEmail" className="mb-1 font-normal">
            Mobile Number*
          </Label>
          <div className="">
            <PhoneInput
              isShowFlag={true}
              defaultCountry="US"
              value={formData.mobileNumber}
              placeholder="1XXX XXX XXX"
            />
          </div>
        </div>
      </div>
    </>
  );
}
