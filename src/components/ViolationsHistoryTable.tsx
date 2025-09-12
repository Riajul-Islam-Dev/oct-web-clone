"use client";

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

interface ViolationHistoryData {
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
  comment: string;
}

interface ViolationsHistoryTableProps {
  data: ViolationHistoryData[];
}

export function ViolationsHistoryTable({ data }: ViolationsHistoryTableProps) {
  return (
    <div className="space-y-4">
      <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f7f9fc] border-b border-[#e2e8f0]">
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Traveler name</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Policy Violation</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Booking Details</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Status</TableHead>
              <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Comment</TableHead>
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
                  <div className="flex items-center">
                    <span 
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        row.status === 'Approved' 
                          ? 'bg-[#e6f3ff] text-[#316db4] border border-[#316db4]' 
                          : 'bg-[#fff3e0] text-[#f59e0b] border border-[#f59e0b]'
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4 max-w-xs">
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {row.comment}
                  </p>
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
    </div>
  );
}