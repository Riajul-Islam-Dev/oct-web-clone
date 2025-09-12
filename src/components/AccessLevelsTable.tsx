"use client";

import { Pencil, Trash2 } from "lucide-react";

// Sample data for Access Levels
const policyData = [
  {
    name: "Default",
    description: "Applies to all users who do not have any specific policy level assigned."
  },
  {
    name: "Director",
    description: "Full company-wide authority."
  },
  {
    name: "Executive",
    description: "Departmental or functional authority."
  },
  {
    name: "Manager",
    description: "Office or team Managerial-level authority."
  }
];

export default function AccessLevelsTable() {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm border border-[#e2e8f0]">
      {/* Header */}
      <div className="grid grid-cols-[200px_1fr_120px] gap-8 px-6 py-4 border-b border-[#e2e8f0] bg-[#f7f9fc]">
        <div className="text-[#18181a] font-medium text-sm">Policy level name</div>
        <div className="text-[#18181a] font-medium text-sm">Short Description</div>
        <div className="text-[#18181a] font-medium text-sm">Action</div>
      </div>

      {/* Data rows */}
      {policyData.map((policy, index) => (
        <div
          key={policy.name}
          className={`grid grid-cols-[200px_1fr_120px] gap-8 px-6 py-6 ${
            index !== policyData.length - 1 ? "border-b border-[#e2e8f0]" : ""
          }`}
        >
          <div className="text-[#18181a] font-medium">{policy.name}</div>
          <div className="text-[#2a2b2f] text-sm leading-relaxed">{policy.description}</div>
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-[#f7f9fc] rounded transition-colors">
              <Pencil className="w-4 h-4 text-[#316db4]" />
            </button>
            <button className="p-1 hover:bg-[#f7f9fc] rounded transition-colors">
              <Trash2 className="w-4 h-4 text-[#eda92c]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}