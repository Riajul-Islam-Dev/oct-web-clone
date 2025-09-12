"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Step1 from "./AddCompanyMultiStep/Step1";
import Step2 from "./AddCompanyMultiStep/Step2";
import Step3 from "./AddCompanyMultiStep/Step3";
import Step4 from "./AddCompanyMultiStep/Step4";
import Step5 from "./AddCompanyMultiStep/Step5";

export type FormDataType = {
  companyName: string;
  website: string;
  contactPersonName: string;
  contactPersonEmail: string;
  country: string;
  countryCode: string;
  mobileNumber: string;
  status: string;
  // step 2
  officeName: string;
  address1: string;
  address2: string;
  country2: string;
  city: string;
  state: string;
  postCode: string;
  email: string;
  phone: string;
  description: string;
  // step 3
  department: string;
  departmentDescription: string;
  //
  legalFirstName: string;
  legalMiddleName: string;
  legalLastName: string;
  userRole: string;
  userEmail: string;
  userPhone: string;
};

export type DepartmentInputType = { title: string; description: string };

export default function AddCompanyMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactPersonName: "",
    contactPersonEmail: "",
    country: "United States",
    countryCode: "+1(646)",
    mobileNumber: "",
    status: "Active",
    // step 2
    officeName: "",
    address1: "",
    address2: "",
    country2: "",
    city: "",
    state: "",
    postCode: "",
    email: "",
    phone: "",
    description: "",
    // step 3
    department: "",
    departmentDescription: "",
    //
    legalFirstName: "",
    legalMiddleName: "",
    legalLastName: "",
    userRole: "",
    userEmail: "",
    userPhone: "",
  });
  const [departments, setDepartments] = useState<DepartmentInputType[]>([]);
  const [departmentInput, setDepartmentInput] = useState({
    title: "",
    description: "",
  });

  const steps = [
    { id: 0, label: "Basic Info", completed: false },
    { id: 1, label: "Office", completed: false },
    { id: 2, label: "Departments", completed: false },
    { id: 3, label: "Roles", completed: false },
    { id: 4, label: "Users", completed: false },
  ];

  const handleAddDepartment = () => {
    setDepartments((prev) => [...prev, departmentInput]);
    setDepartmentInput({ title: "", description: "" });
  };

  const handleInputChange = (field: string, value: string | object) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleCountryChange = (country) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     country: country.name,
  //     countryCode: country.phoneCode,
  //   }));
  // };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F] p-3 px-6 mb-16">
        <div className="mx-auto py-6 bg-white">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-col gap-1">
                <div
                  onClick={() => handleStepClick(index)}
                  className={`flex flex-row items-center justify-center w-4 h-4 rounded-full cursor-pointer transition-colors z-20 border-2 ring-2 border-[#E2E8F0] ring-[#E9EFF7] !bg-white ${
                    index === currentStep
                      ? "bg-[#316DB4]!"
                      : index < currentStep
                      ? "bg-[#316DB4]! text-white border-[#316DB4]! ring-[#FFDEE8]"
                      : ""
                  }`}
                >
                  {index < currentStep ? <Check className="w-2 h-2" /> : ""}
                </div>
                <div
                  className={"text-sm font-raleway"}
                  // onClick={() => handleStepClick(index)}
                >
                  {step.label}
                </div>
                {/* {index < steps.length - 1 && (
              <div className="w-12 h-px bg-gray-300 mx-4" />
            )} */}
              </div>
            ))}
            <span className="absolute left-1/2 transform -translate-x-1/2 top-[8px] w-[105%] h-[1] bg-[#E2E8F0] rounded-full z-10" />
          </div>

          {/* Form Content */}
          {currentStep === 0 && (
            <Step1 formData={formData} handleInputChange={handleInputChange} />
          )}

          {/* Other Steps Placeholder */}
          {currentStep === 1 && (
            <Step2 formData={formData} handleInputChange={handleInputChange} />
          )}

          {currentStep === 2 && (
            <Step3
              formData={formData}
              handleInputChange={handleInputChange}
              departments={departments}
              departmentInput={departmentInput}
              setDepartmentInput={setDepartmentInput}
            />
          )}

          {currentStep === 3 && <Step4 />}

          {currentStep === 4 && (
            <Step5 formData={formData} handleInputChange={handleInputChange} />
          )}

          {/* Navigation */}
          <div className="flex justify-end gap-3 mt-8">
            <AnimatePresence>
              {currentStep === 2 && (
                <motion.div
                  key="add-department-button"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.4,
                  }}
                >
                  <Button variant={"secondary"} onClick={handleAddDepartment}>
                    Add New Department
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="px-6"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {currentStep === 1 && (
          <motion.div
            key="step-2-info"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4,
            }}
            className="flex gap-2 .items-center px-2 py-2 bg-[#F7F9FC] rounded mb-18 mt-6 border-l border-[#316DB4]"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FF4870"
                  d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
            </span>
            <p className="text-[#316DB4] text-xs font-ubuntu">
              Add only your main office or headquarters. Additional locations
              can be added later from the company settings page
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
