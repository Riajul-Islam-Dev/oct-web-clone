"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateApprovalRulesSheet } from "@/components/sheet/CreateApprovalRulesSheet";
import { ApprovalRulesTable } from "@/components/ApprovalRulesTable";

// Sample data for Approval Rules
const approvalRules = [
  {
    policyLevel: "Executive Level",
    travelerType: "Senior Management",
    reviewProcess: "Auto-approved"
  },
  {
    policyLevel: "Manager Level",
    travelerType: "Department Managers",
    reviewProcess: "Manager approval",
    overrideApprover: "HR Director"
  },
  {
    policyLevel: "Employee Level",
    travelerType: "Regular Employees",
    reviewProcess: "Two-step approval",
    overrideApprover: "Finance Manager"
  },
  {
    policyLevel: "Contractor Level",
    travelerType: "External Contractors",
    reviewProcess: "Three-step approval",
    overrideApprover: "Department Head"
  },
  {
    policyLevel: "Intern Level",
    travelerType: "Interns & Temporary Staff",
    reviewProcess: "Special approval"
  }
];

export default function ApprovalRulesPage() {
  return (
    <div className="px-4 py-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h4 className="text-lg font-ubuntu">Policy Settings</h4>
          <p className="text-sm font-raleway font-medium">
            Define Policy levels and approval rules for your organization.
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h4 className="text-lg font-ubuntu">Approval Rules</h4>
          <p className="text-sm font-raleway font-medium">
            Configure approval workflows and rules for travel bookings.
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Policy
            </Button>
          </SheetTrigger>
          <CreateApprovalRulesSheet />
        </Sheet>
      </div>

      <ApprovalRulesTable data={approvalRules} />
    </div>
  );
}