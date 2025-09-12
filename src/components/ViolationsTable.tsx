"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ViolationActionDialog } from "./ViolationActionDialog";

interface ViolationData {
  id: number;
  travelerName: string;
  avatar: string;
  policyViolation: {
    type: string;
    count: number;
    details: string;
  };
  bookingDetails: string;
  status: string;
}

interface ViolationsTableProps {
  data: ViolationData[];
}

export function ViolationsTable({ data }: ViolationsTableProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<"approve" | "reject">("approve");
  const [selectedViolation, setSelectedViolation] = useState<ViolationData | null>(null);

  const handleActionClick = (action: "approve" | "reject", violation: ViolationData) => {
    setSelectedAction(action);
    setSelectedViolation(violation);
    setDialogOpen(true);
  };

  const handleDialogSubmit = (comment: string) => {
    console.log(`${selectedAction} violation for ${selectedViolation?.travelerName} with comment: ${comment}`);
    // Here you would typically make an API call to update the violation status
  };

  return (
    <div className="space-y-4">
      <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f7f9fc] border-b border-[#e2e8f0]">
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Traveler name</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Policy Violation</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Booking Details</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} className="border-b border-[#e2e8f0] hover:bg-[#f5fafd]">
                <TableCell className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                      {row.travelerName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-[#18181a] font-medium">{row.travelerName}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                    <div className="flex flex-col">
                      <span className="text-sm text-[#f59e0b] font-medium">{row.policyViolation.type}</span>
                      <button className="text-xs text-[#316db4] hover:underline text-left">
                        {row.policyViolation.details}
                      </button>
                    </div>
                    <div className="ml-2 bg-[#f59e0b] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {row.policyViolation.count}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <button className="text-sm text-[#316db4] hover:underline">
                    {row.bookingDetails} →
                  </button>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleActionClick("reject", row)}
                      className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 py-1 text-xs rounded-md"
                    >
                      Rejected
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleActionClick("approve", row)}
                      className="bg-[#316db4] hover:bg-[#2563eb] text-white px-4 py-1 text-xs rounded-md"
                    >
                      Approved
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#64748b] hover:text-[#316db4]"
        >
          ← Previous
        </Button>
        
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <Button
              key={page}
              variant={page === 3 ? "default" : "ghost"}
              size="sm"
              className={`w-8 h-8 p-0 text-sm ${
                page === 3 
                  ? "bg-[#316db4] text-white hover:bg-[#2563eb]" 
                  : "text-[#64748b] hover:text-[#316db4] hover:bg-[#f5fafd]"
              }`}
            >
              {page}
            </Button>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#64748b] hover:text-[#316db4]"
        >
          Next →
        </Button>
      </div>
      
      <ViolationActionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        action={selectedAction}
        travelerName={selectedViolation?.travelerName || ""}
        onSubmit={handleDialogSubmit}
      />
    </div>
  );
}