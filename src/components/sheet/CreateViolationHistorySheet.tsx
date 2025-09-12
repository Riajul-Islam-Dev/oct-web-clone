"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CreateViolationHistorySheet() {
  const [travelerName, setTravelerName] = useState("");
  const [violationType, setViolationType] = useState("");
  const [violationCount, setViolationCount] = useState("");
  const [bookingReference, setBookingReference] = useState("");
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      travelerName,
      violationType,
      violationCount,
      bookingReference,
      status,
      comment,
    });
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>CREATE VIOLATION HISTORY</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mx-6 mt-6">
          {/* Traveler Name */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Traveler Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter traveler name"
              value={travelerName}
              onChange={(e) => setTravelerName(e.target.value)}
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
            />
          </div>

          {/* Violation Type */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Violation Type <span className="text-red-500">*</span>
            </label>
            <Select value={violationType} onValueChange={setViolationType}>
              <SelectTrigger className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent">
                <SelectValue placeholder="Select violation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="policy-breach">Policy Breach</SelectItem>
                <SelectItem value="budget-exceeded">Budget Exceeded</SelectItem>
                <SelectItem value="unauthorized-booking">Unauthorized Booking</SelectItem>
                <SelectItem value="documentation-missing">Documentation Missing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Violation Count */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Number of Violations <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter violation count"
              value={violationCount}
              onChange={(e) => setViolationCount(e.target.value)}
              min="1"
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
            />
          </div>

          {/* Booking Reference */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Booking Reference <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter booking reference"
              value={bookingReference}
              onChange={(e) => setBookingReference(e.target.value)}
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
            />
          </div>

          {/* Status */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Status <span className="text-red-500">*</span>
            </label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Comment */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter comment about the violation"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end mb-8">
            <button
              type="button"
              className="px-6 py-3 bg-[#eda92c] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Add Violation
            </button>
          </div>
        </form>
      </ScrollArea>
    </SheetContent>
  );
}