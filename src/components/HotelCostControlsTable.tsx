"use client";

import { Edit, Trash2 } from "lucide-react";

// Sample data for Hotel cost controls Policy
const policies = [
  {
    id: "1",
    cityName: "New York",
    radius: "10 miles",
    maxPrice: "$300",
  },
  {
    id: "2",
    cityName: "Los Angeles",
    radius: "15 miles",
    maxPrice: "$250",
  },
  {
    id: "3",
    cityName: "Chicago",
    radius: "8 miles",
    maxPrice: "$200",
  },
];

export default function HotelCostControlsTable() {
  return (
    <div>
      {/* Hotel cost controls Policy */}
      <h3 className="text-lg font-medium text-[#18181a] mb-4">
        Hotel cost controls Policy
      </h3>

      {/* Policy Table */}
      <div className="space-y-4 mb-8">
        {/* New York Entry */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div>
              <div className="text-sm text-[#64748b] mb-1">City Name</div>
              <div className="text-[#18181a] font-medium">New York</div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">
                Radius from city
              </div>
              <div className="text-[#18181a]">500 miles</div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">Maximum price</div>
              <div className="text-[#18181a]">400 USD</div>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Edit className="w-4 h-4 text-[#64748b] cursor-pointer hover:text-[#087dc2]" />
              <Trash2 className="w-4 h-4 text-[#eda92c] cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>

        {/* Sylhet Entry */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div>
              <div className="text-sm text-[#64748b] mb-1">City Name</div>
              <div className="text-[#18181a] font-medium">Sylhet</div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">
                Radius from city
              </div>
              <div className="text-[#18181a]">500 miles</div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">Maximum price</div>
              <div className="text-[#18181a]">400 USD</div>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Edit className="w-4 h-4 text-[#64748b] cursor-pointer hover:text-[#087dc2]" />
              <Trash2 className="w-4 h-4 text-[#eda92c] cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Blocked properties */}
      <h3 className="text-lg font-medium text-[#18181a] mb-4">
        Blocked properties
      </h3>

      <div className="space-y-4">
        {/* Four Seasons Hotel Chicago */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <div className="text-sm text-[#64748b] mb-1">Hotel Name</div>
              <div className="text-[#18181a] font-medium">
                Four Seasons Hotel Chicago
              </div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">Reason</div>
              <div className="text-[#18181a]">
                Does not meet company standards.
              </div>
            </div>
            <div className="flex justify-end">
              <Trash2 className="w-4 h-4 text-[#eda92c] cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>

        {/* The Setai, Miami Beach */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <div className="text-sm text-[#64748b] mb-1">Hotel Name</div>
              <div className="text-[#18181a] font-medium">
                The Setai, Miami Beach
              </div>
            </div>
            <div>
              <div className="text-sm text-[#64748b] mb-1">Reason</div>
              <div className="text-[#18181a]">
                Does not meet company standards.
              </div>
            </div>
            <div className="flex justify-end">
              <Trash2 className="w-4 h-4 text-[#eda92c] cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
