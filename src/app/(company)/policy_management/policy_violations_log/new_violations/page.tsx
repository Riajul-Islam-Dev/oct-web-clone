import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateViolationSheet } from "@/components/sheet/CreateViolationSheet";
import { ViolationsTable } from "@/components/ViolationsTable";

// Sample data for Policy Violations
const sampleViolationsData = [
  {
    id: 1,
    travelerName: "April L. Potter",
    avatar: "AP",
    policyViolation: {
      type: "Number of violations",
      count: 3,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Rejected"
  },
  {
    id: 2,
    travelerName: "Nichole L. Sorensen",
    avatar: "NS",
    policyViolation: {
      type: "Number of violations",
      count: 4,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Approved"
  },
  {
    id: 3,
    travelerName: "Teresa R. Sweeney",
    avatar: "TS",
    policyViolation: {
      type: "Number of violations",
      count: 5,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Rejected"
  },
  {
    id: 4,
    travelerName: "Mary F. Green",
    avatar: "MG",
    policyViolation: {
      type: "Number of violations",
      count: 2,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Approved"
  },
  {
    id: 5,
    travelerName: "Connie B. Olson",
    avatar: "CO",
    policyViolation: {
      type: "Number of violations",
      count: 1,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Pending"
  },
  {
    id: 6,
    travelerName: "Robert M. Johnson",
    avatar: "RJ",
    policyViolation: {
      type: "Number of violations",
      count: 6,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Rejected"
  },
  {
    id: 7,
    travelerName: "Linda K. Davis",
    avatar: "LD",
    policyViolation: {
      type: "Number of violations",
      count: 2,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Approved"
  },
  {
    id: 8,
    travelerName: "Michael P. Wilson",
    avatar: "MW",
    policyViolation: {
      type: "Number of violations",
      count: 4,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Pending"
  }
];

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-ubuntu">Policy Violations Log</h4>
            <p className="text-sm font-raleway font-medium">
              Log of requests flagged for policy violations
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="text-base font-ubuntu font-medium text-[#18181a] mb-3">New Violations</h5>
        </div>

        <ViolationsTable data={sampleViolationsData} />
        <CreateViolationSheet />
      </div>
    </Sheet>
  );
}