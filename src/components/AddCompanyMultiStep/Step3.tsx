"use client";

import { DepartmentInputType, FormDataType } from "../AddCompanyMultiStepForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Step3Props = {
  formData: FormDataType;
  departments: DepartmentInputType[];
  departmentInput: DepartmentInputType;
  handleInputChange: (name: string, value: string | object) => void;
  setDepartmentInput: React.Dispatch<React.SetStateAction<DepartmentInputType>>;
};

export default function Step3({
  departments,
  departmentInput,
  setDepartmentInput,
}: Step3Props) {
  return (
    <>
      {departments.length > 0 && (
        <div className="mb-4">
          <div className="bg-[#F7F9FC] px-3 py-2 rounded mb-8">
            <h4 className="font-medium mb-2">Department:</h4>
            <ul className="flex gap-2">
              {departments.map((item) => (
                <li
                  key={item.title}
                  className="bg-[#FCFCFC] py-1 px-2 rounded cursor-pointer hover:bg-white text-sm"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="flex mb-4">
        <div className="flex-1">
          <Label htmlFor="department" className="mb-1 font-normal">
            Department Name*
          </Label>
          <div className="">
            <Input
              id="department"
              value={departmentInput?.title}
              onChange={(e) =>
                setDepartmentInput((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1">
          <Label htmlFor="departmentDescription" className="mb-1 font-normal">
            Description
          </Label>
          <div className="">
            <Textarea
              rows={6}
              id="departmentDescription"
              value={departmentInput?.description}
              onChange={(e) =>
                setDepartmentInput((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Type Here"
            />
          </div>
        </div>
      </div>
    </>
  );
}
