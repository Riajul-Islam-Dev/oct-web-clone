"use client";

import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BlackCarsData {
  policyLevel: string;
  travelerType: string;
  status: string;
}

interface BlackCarsTableProps {
  data: BlackCarsData[];
}

export function BlackCarsTable({ data }: BlackCarsTableProps) {
  return (
    <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#f7f9fc] border-b border-[#e2e8f0]">
            <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Policy level</TableHead>
            <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Traveler type</TableHead>
            <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Status</TableHead>
            <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-[#e2e8f0] hover:bg-[#f5fafd]">
              <TableCell className="py-3 px-4 text-sm text-[#18181a]">{row.policyLevel}</TableCell>
              <TableCell className="py-3 px-4 text-sm text-[#18181a]">{row.travelerType}</TableCell>
              <TableCell className="py-3 px-4 text-sm text-[#18181a]">{row.status}</TableCell>
              <TableCell className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-[#f5fafd]">
                    <Edit className="w-4 h-4 text-[#64748b]" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-[#f5fafd]">
                    <Trash2 className="w-4 h-4 text-[#eda92c]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}