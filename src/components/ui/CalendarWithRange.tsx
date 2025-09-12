"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CalendarWithRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 1, 28), // Feb 28, 2025
    to: new Date(2025, 2, 10), // Mar 10, 2025
  });
  const [currentMonth, setCurrentMonth] = React.useState(new Date(2025, 2, 1)); // March 2025

  const handleQuickSelect = (days: number) => {
    const today = new Date();
    const from = new Date(today);
    from.setDate(today.getDate() - days);
    setRange({ from, to: today });
  };

  const handleReset = () => {
    setRange(undefined);
  };

  return (
    <div className="flex flex-col gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="dates"
            className="w-56 justify-between font-normal bg-transparent"
          >
            {range?.from && range?.to
              ? `${range.from.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit",
                })} - ${range.to.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit",
                })}`
              : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <div className="flex">
            {/* Left sidebar with quick options */}
            <div className="flex flex-col border-r bg-gray-50/50 p-4 w-32">
              <button
                onClick={() => handleQuickSelect(0)}
                className="text-left py-2 px-2 text-sm hover:bg-gray-100 rounded"
              >
                Today
              </button>
              <button
                onClick={() => handleQuickSelect(1)}
                className="text-left py-2 px-2 text-sm hover:bg-gray-100 rounded"
              >
                Yesterday
              </button>
              <button
                onClick={() => handleQuickSelect(7)}
                className="text-left py-2 px-2 text-sm hover:bg-gray-100 rounded"
              >
                Last week
              </button>
              <button
                onClick={() => handleQuickSelect(30)}
                className="text-left py-2 px-2 text-sm hover:bg-gray-100 rounded"
              >
                Last month
              </button>
              <button
                onClick={() => handleQuickSelect(90)}
                className="text-left py-2 px-2 text-sm hover:bg-gray-100 rounded"
              >
                Last quarter
              </button>

              <button
                onClick={handleReset}
                className="text-left py-2 px-2 text-sm text-blue-600 hover:bg-blue-50 rounded mt-4 font-medium mt-auto"
              >
                Reset
              </button>
            </div>

            {/* Right calendar section */}
            <div className="p-4">
              {/* Custom calendar header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newMonth = new Date(currentMonth);
                      newMonth.setMonth(currentMonth.getMonth() - 1);
                      setCurrentMonth(newMonth);
                    }}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newMonth = new Date(currentMonth);
                      newMonth.setMonth(currentMonth.getMonth() + 1);
                      setCurrentMonth(newMonth);
                    }}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar grid */}
              <Calendar
                mode="range"
                selected={range}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                onSelect={(range) => {
                  setRange(range);
                }}
                className="[&_.rdp-head_cell]:text-xs [&_.rdp-head_cell]:font-medium [&_.rdp-head_cell]:text-gray-500"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
