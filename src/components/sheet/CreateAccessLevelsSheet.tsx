"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CreateAccessLevelsSheet() {
  const [policyName, setPolicyName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SheetContent className="min-w-[630px] p-6">
      <SheetHeader className="relative">
        <SheetTitle className="text-[#393939] font-medium text-lg mb-8 text-center">
          CREATE NEW ACCESS LEVELS
        </SheetTitle>
      </SheetHeader>

      {/* Form */}
      <div className="space-y-6">
        {/* Policy level name field */}
        <div>
          <label className="block text-[#393939] font-medium mb-2">
            Policy level name <span className="text-[#393939]">*</span>
          </label>
          <input
            type="text"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
            placeholder="Type policy level name"
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
          />
        </div>

        {/* Short Description field */}
        <div>
          <label className="block text-[#393939] font-medium mb-2">Short Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type short description"
            rows={4}
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-8 justify-end">
        <button className="px-6 py-3 bg-[#eda92c] text-white font-medium rounded-full hover:bg-[#d4941f] transition-colors">
          Cancel
        </button>
        <button className="px-8 py-3 bg-[#316db4] text-white font-medium rounded-full hover:bg-[#2a5d9f] transition-colors">
          Add
        </button>
      </div>
    </SheetContent>
  );
}