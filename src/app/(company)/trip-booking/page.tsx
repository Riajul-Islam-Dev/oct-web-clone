"use client";

import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Notification } from "iconsax-reactjs";
import Image from "next/image";
import { Plane, Calendar, MapPin, Plus } from "lucide-react";

export default function TripBookingPage() {
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

      {/* Main Content */}
      <div className="px-6 py-6 bg-[#F8F9FA] min-h-screen">
        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6 bg-white px-6 py-4 rounded-lg border border-gray-100">
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-gray-900 border-b-2 border-gray-900 pb-3">
              <Plane size={18} />
              <span className="font-medium text-base">Trips</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 pb-3">
              <Calendar size={18} />
              <span className="font-medium text-base">Bookings</span>
            </div>
          </div>
          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-2.5 text-sm font-medium rounded-lg">
            <Plus size={16} className="mr-2" />
            New Trip
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-6 bg-white px-6 py-4 rounded-lg border border-gray-100">
          <div className="flex gap-8 items-center">
            <button className="text-gray-900 border-b-2 border-gray-900 pb-3 font-medium text-base">
              Upcoming
            </button>
            <button className="text-gray-400 pb-3 hover:text-gray-600 text-base">
              Past
            </button>
            <button className="text-gray-400 pb-3 hover:text-gray-600 text-base">
              Canceled
            </button>
            <div className="flex items-center gap-2 pb-3">
              <select className="border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-600">
                <option>Business</option>
                <option>Personal</option>
              </select>
            </div>
          </div>
          <div className="pb-3">
            <Input 
              placeholder="Search trips..."
              className="w-64 h-10 text-sm border-gray-200 focus:ring-2 focus:ring-gray-300 bg-gray-50"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-gray-100">
          <div className="mb-8">
            <div className="w-24 h-32 mx-auto mb-6">
              <svg viewBox="0 0 96 128" className="w-full h-full text-gray-400">
                {/* Suitcase body */}
                <rect x="16" y="24" width="64" height="88" rx="6" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                {/* Suitcase handle */}
                <rect x="40" y="8" width="16" height="20" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
                {/* Suitcase wheels */}
                <circle cx="28" cy="116" r="6" fill="currentColor" />
                <circle cx="68" cy="116" r="6" fill="currentColor" />
                {/* Suitcase details */}
                <rect x="24" y="40" width="48" height="2" fill="white" opacity="0.3" />
                <rect x="24" y="48" width="48" height="2" fill="white" opacity="0.3" />
                <rect x="24" y="56" width="32" height="2" fill="white" opacity="0.3" />
                {/* Handle on side */}
                <rect x="12" y="60" width="4" height="16" rx="2" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            No trips scheduled
          </h3>
          <p className="text-gray-500 mb-8 text-center max-w-md leading-relaxed">
            Add your first trip and let the journey begin. Your next adventure is just a click away
          </p>
          
          <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2.5 font-medium rounded-lg">
            <Plus size={16} className="mr-2" />
            Add New Trip
          </Button>
        </div>
      </div>
    </div>
  );
}