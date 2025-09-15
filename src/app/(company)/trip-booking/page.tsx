"use client";

import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NewTripSheet } from "@/components/sheet/NewTripSheet";
import { Notification } from "iconsax-reactjs";
import Image from "next/image";
import { Plane, Calendar, MapPin, Plus } from "lucide-react";
import { useState } from "react";

export default function TripBookingPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <SidebarTriggerClient />
          <h3 className="uppercase font-semibold text-gray-600 text-sm tracking-wide">
            TRIP & BOOKING
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-gray-50 p-2 rounded-full h-10 w-10 hover:bg-gray-100 border-0">
            <Notification color="#6B7280" size={18} />
          </Button>
          <Image
            className="rounded-full"
            src="/professional-headshot.png"
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#ffffff]">
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#ebf5fa] text-[#316db4] rounded-lg font-medium text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3h12l-1 10H3L2 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M6 7v4M10 7v4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Trips
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-[#64748b] font-medium text-sm hover:bg-[#f8fafc] rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="2" fill="currentColor" />
                <rect x="2" y="7" width="12" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Bookings
            </button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button className="bg-[#316db4] hover:bg-[#2563eb] text-white px-5 py-2.5 text-sm font-medium rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                New Trip
              </Button>
            </SheetTrigger>
            <NewTripSheet onClose={() => setIsSheetOpen(false)} />
          </Sheet>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#ffffff] border-b border-[#e2e8f0]">
          <div className="flex items-center gap-8">
            <button className="text-[#316db4] font-medium text-sm border-b-2 border-[#316db4] pb-3">Upcoming</button>
            <button className="text-[#64748b] font-medium text-sm pb-3 hover:text-[#316db4]">Past</button>
            <button className="text-[#64748b] font-medium text-sm pb-3 hover:text-[#316db4]">Canceled</button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 border border-[#e2e8f0] rounded-lg bg-white">
              <span className="text-[#64748b] text-sm">Business</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Button variant="ghost" size="icon" className="text-[#64748b] hover:bg-[#f1f5f9]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                <path d="M13 13l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
      </div>

      {/* Main Content Area - Empty State */}
      <div className="flex-1 bg-[#fafafa]">
          <div className="flex flex-col items-center justify-center min-h-[600px] px-6">
            <div className="mb-12">
              <div className="relative">
                {/* Suitcase body */}
                <div className="w-36 h-44 bg-[#2a2b2f] rounded-lg relative shadow-lg">
                  {/* Handle */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-8 border-4 border-[#2a2b2f] rounded-t-xl bg-transparent"></div>
                  </div>

                  {/* Front panel border */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-[#4a4a4a] rounded-md"></div>

                  {/* Horizontal zipper line */}
                  <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-[#4a4a4a] transform -translate-y-0.5"></div>

                  {/* Corner rivets */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-[#4a4a4a] rounded-full"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#4a4a4a] rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#4a4a4a] rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#4a4a4a] rounded-full"></div>

                  {/* Lock/latch */}
                  <div className="absolute top-1/2 right-2 w-3 h-4 bg-[#4a4a4a] rounded-sm transform -translate-y-1/2"></div>
                </div>

                {/* Wheels */}
                <div className="absolute -bottom-3 left-8 w-5 h-5 bg-[#2a2b2f] rounded-full border-2 border-[#4a4a4a]"></div>
                <div className="absolute -bottom-3 right-8 w-5 h-5 bg-[#2a2b2f] rounded-full border-2 border-[#4a4a4a]"></div>
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-[#18181a] mb-4 tracking-tight">No trips scheduled</h2>
              <p className="text-[#64748b] max-w-sm leading-relaxed text-base">
                Add your first trip and let the journey begin. Your next adventure is just a click away
              </p>
            </div>

            <Button
              variant="outline"
              className="bg-[#fdf6e9] border-[#fdf6e9] text-[#8e8e8e] hover:bg-[#fdf6e9]/90 px-6 py-2 text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Add New Trip
            </Button>
          </div>
      </div>
    </div>
  );
}