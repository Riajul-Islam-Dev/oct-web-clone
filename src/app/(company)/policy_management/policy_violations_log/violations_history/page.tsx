import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ViolationsHistoryTable } from "@/components/ViolationsHistoryTable";
import { CreateViolationHistorySheet } from "@/components/sheet/CreateViolationHistorySheet";

const sampleViolationsHistoryData = [
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
    status: "Approved",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Approved",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Rejected",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Approved",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Pending",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Rejected",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Approved",
    comment: "It is a long established fact that a reader will be distracted"
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
    status: "Pending",
    comment: "It is a long established fact that a reader will be distracted"
  },
  {
    id: 9,
    travelerName: "Jennifer S. Martinez",
    avatar: "JM",
    policyViolation: {
      type: "Number of violations",
      count: 7,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Rejected",
    comment: "It is a long established fact that a reader will be distracted"
  },
  {
    id: 10,
    travelerName: "Trudy W. Ruder",
    avatar: "TR",
    policyViolation: {
      type: "Number of violations",
      count: 13,
      details: "View Details"
    },
    bookingDetails: "View Details",
    status: "Approved",
    comment: "It is a long established fact that a reader will be distracted"
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
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Add Violation
            </Button>
          </SheetTrigger>
        </div>

        <div className="mb-6">
          <h5 className="text-base font-medium text-[#18181a] mb-4">Violations History</h5>
          <ViolationsHistoryTable data={sampleViolationsHistoryData} />
        </div>
      </div>
      <CreateViolationHistorySheet />
    </Sheet>
  );
}