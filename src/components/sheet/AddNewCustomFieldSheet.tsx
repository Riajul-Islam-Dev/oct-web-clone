"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Plus, X } from "lucide-react";
import FileDropZone2 from "../FileDropZone/FileDropZone2";

type RemoveOptionFn = {
  (index: number): void;
};
type UpdateOptionFn = {
  (index: number, value: string): void;
};
type HandleInputTypeChangeFn = {
  (value: string): void;
};

export function AddNewCustomFieldSheet() {
  const [isRequired, setIsRequired] = useState(false);
  const [selectedInputType, setSelectedInputType] = useState("");
  const [options, setOptions] = useState([""]);
  // const [optionDataSet, setOptionDataSet] = useState("single");
  const [placeholder, setPlaceholder] = useState("");
  const [isShowAdvanceOption, setIsShowAdvanceOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Check if the selected input type requires options
  const requiresOptions = ["multipleChoice", "checkboxes", "dropDown"].includes(
    selectedInputType
  );

  // Add a new option
  const addOption = () => {
    setOptions([...options, ""]);
  };

  // Remove an option
  const removeOption: RemoveOptionFn = (index) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  // Update option value
  const updateOption: UpdateOptionFn = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Handle input type change
  const handleInputTypeChange: HandleInputTypeChangeFn = (value) => {
    setSelectedInputType(value);
    // Reset options when changing input type
    if (!["multipleChoice", "checkboxes", "dropDown"].includes(value)) {
      setOptions([""]);
    } else {
      // Ensure we have at least one empty option for choice-based fields
      if (options.length === 0 || (options.length === 1 && options[0] === "")) {
        setOptions([""]);
      }
    }
  };

  const handleAdvanceOptions = () => {
    //
    setIsShowAdvanceOption(!isShowAdvanceOption);
  };

  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE NEW FIELD</SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-8">
          <div className="mt-5">
            <div className="flex-1 mb-4">
              <Label htmlFor="fieldName" className="mb-2 ">
                Field Name
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="fieldName"
                  placeholder="Type Field Name"
                />
              </div>
            </div>
          </div>

          <div className="flex-1  mb-4">
            <Label htmlFor="inputType" className="mb-2 ">
              Input Type
            </Label>
            <div>
              <Select
                value={selectedInputType}
                onValueChange={handleInputTypeChange}
              >
                <SelectTrigger className="rounded-sm w-full">
                  <SelectValue placeholder="Short answer" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="textField">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#316DB4"
                        d="M5 15q-.425 0-.712-.288T4 14t.288-.712T5 13h8q.425 0 .713.288T14 14t-.288.713T13 15zm0-4q-.425 0-.712-.288T4 10t.288-.712T5 9h14q.425 0 .713.288T20 10t-.288.713T19 11z"
                      />
                    </svg>
                    Text field
                  </SelectItem>
                  <SelectItem value="multipleChoice">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#316DB4"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-3a5 5 0 1 1 0-10a5 5 0 0 1 0 10"
                      />
                    </svg>
                    Multiple choice
                  </SelectItem>
                  <SelectItem value="checkboxes">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="#316DB4"
                          d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 1 0 0-2zm15.358 3.045a1 1 0 0 0 .375-1.363a1.01 1.01 0 0 0-1.364-.375c-.353.2-.694.424-1.03.65a30 30 0 0 0-2.463 1.847c-1.642 1.366-3.614 3.29-5.239 5.718a10 10 0 0 0-1.746-1.784c-.427-.333-.902-.66-1.415-.846h-.001a1 1 0 0 0-.689 1.878c.025.01.37.15.876.545c.578.45 1.376 1.239 2.146 2.557a1 1 0 0 0 1.733-.01c1.584-2.791 3.787-5 5.614-6.52c.91-.757 1.72-1.336 2.298-1.724c.295-.199.595-.394.904-.572Z"
                        />
                      </g>
                    </svg>
                    Checkboxes
                  </SelectItem>
                  <SelectItem value="dropDown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 256 256"
                    >
                      <g fill="#316DB4">
                        <path
                          d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                          opacity=".2"
                        />
                        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0" />
                      </g>
                    </svg>
                    Drop-down
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Show placeholder field only for non-choice fields */}
          {!requiresOptions && (
            <div className="flex-1 mb-4">
              <Label htmlFor="placeholder" className="mb-2 ">
                Placeholder
              </Label>
              <div>
                <Input
                  className="rounded-sm"
                  id="placeholder"
                  placeholder="Type here"
                  value={placeholder}
                  onChange={(e) => setPlaceholder(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex-1 mb-4">
            <Label htmlFor="placeholder" className="mb-2 ">
              Applies To
            </Label>
            <div>
              <Select>
                <SelectTrigger className="rounded-sm w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="travelRequest">Travel Request</SelectItem>
                  <SelectItem value="tripCreation">Trip Creation</SelectItem>
                  <SelectItem value="userProfile">User Profile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {requiresOptions && (
            <>
              <div className="flex-1 mb-4">
                <Label className="mb-2 ">Options</Label>
                <div className="space-y-2">
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:text-blue-700 p-1">
                          {String(index + 1).padStart(2, "0")}.{" "}
                        </span>
                        <Input
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => updateOption(index, e.target.value)}
                          className="pl-9 pr-10 rounded-sm"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 p-1"
                        >
                          <Pencil size={16} color="#316DB4" />
                        </button>
                      </div>
                      {options.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOption(index)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-md hover:bg-red-50 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={addOption}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 mt-2 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      <Plus size={16} />
                      Add Option
                    </button>
                    <button
                      type="button"
                      onClick={handleAdvanceOptions}
                      className="text-[#316DB4] text-sm flex items-center gap-1 mt-2 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      Advance Option
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="15"
                          height="15"
                          rx="7.5"
                          stroke="#316DB4"
                        />
                        <path d="M13 5.5L8 10.5L3 5.5L13 5.5Z" fill="#EDA92C" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {isShowAdvanceOption && (
                <div className="mt-5 mb-5">
                  <p className="font-ubuntu text-sm mb-3 leading-1">
                    Add options from an existing list or upload in bulk.
                  </p>
                  <div className="flex gap-5 items-center ">
                    <div className="flex items-center">
                      <input
                        name="bulk-option"
                        id="existing-list"
                        type="radio"
                        value="existing"
                        checked={selectedOption === "existing"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <label
                        htmlFor="existing-list"
                        className="ml-2 text-xs font-raleway"
                      >
                        Use Existing List
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        name="bulk-option"
                        id="bulk-upload"
                        type="radio"
                        value="bulk"
                        checked={selectedOption === "bulk"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <label
                        htmlFor="bulk-upload"
                        className="ml-2 text-xs font-raleway"
                      >
                        Bulk Upload
                      </label>
                    </div>
                  </div>

                  {/* Conditionally render elements */}
                  {selectedOption === "existing" && (
                    <div className="flex-1 mt-4">
                      <Label className="mb-2">Use Existing List</Label>
                      <div>
                        <Select>
                          <SelectTrigger className="rounded-sm w-full">
                            <SelectValue placeholder="Office list" />
                          </SelectTrigger>
                          <SelectContent className="">
                            <SelectItem value="Departmentlist">
                              Department list
                            </SelectItem>
                            <SelectItem value="Officelist">
                              Office list
                            </SelectItem>
                            <SelectItem value="UserList">User List</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {selectedOption === "bulk" && (
                    <div className="mt-6">
                      <div className="flex justify-between items-end mb-2">
                        <p className="font-ubuntu text-sm">Option</p>
                        <Button variant={"secondary"}>Download Example</Button>
                      </div>
                      <FileDropZone2 />
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          <div className="flex items-center gap-3">
            <Switch
              className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
              onCheckedChange={() => setIsRequired(!isRequired)}
              checked={isRequired}
            />
            <label className="text-sm" htmlFor="">
              {isRequired ? "Required" : "Not Required"}
            </label>
          </div>

          <div className="flex gap-2 mb-18 mt-8">
            <SheetClose asChild>
              <Button variant={"tertiary"} className="font-ubuntu font-normal">
                Save Field
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="font-ubuntu font-normal">Cancel</Button>
            </SheetClose>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
