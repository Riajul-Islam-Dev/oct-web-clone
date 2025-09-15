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
  const [activeTab, setActiveTab] = useState("upcoming");

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

          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-[#316db4] hover:bg-[#2563eb] text-white px-5 py-2.5 text-sm font-medium rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                New Trip
              </Button>
            </SheetTrigger>
            <NewTripSheet />
          </Sheet>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#ffffff] border-b border-[#e2e8f0]">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveTab("upcoming")}
              className={`font-medium text-sm pb-3 ${
                activeTab === "upcoming" 
                  ? "text-[#316db4] border-b-2 border-[#316db4]" 
                  : "text-[#64748b] hover:text-[#316db4]"
              }`}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setActiveTab("new-upcoming")}
              className={`font-medium text-sm pb-3 ${
                activeTab === "new-upcoming" 
                  ? "text-[#316db4] border-b-2 border-[#316db4]" 
                  : "text-[#64748b] hover:text-[#316db4]"
              }`}
            >
              New Upcoming
            </button>
            <button 
              onClick={() => setActiveTab("past")}
              className={`font-medium text-sm pb-3 ${
                activeTab === "past" 
                  ? "text-[#316db4] border-b-2 border-[#316db4]" 
                  : "text-[#64748b] hover:text-[#316db4]"
              }`}
            >
              Past
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveTab("canceled")}
                className={`font-medium text-sm pb-3 ${
                  activeTab === "canceled" 
                    ? "text-[#316db4] border-b-2 border-[#316db4]" 
                    : "text-[#64748b] hover:text-[#316db4]"
                }`}
              >
                Canceled
              </button>
              {activeTab === "canceled" && (
                <div className="flex items-center gap-2 pb-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 border border-[#e2e8f0] rounded-lg bg-white">
                    <span className="text-[#64748b] text-sm">All</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <Button variant="ghost" size="icon" className="text-[#64748b] hover:bg-[#f1f5f9] h-8 w-8">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                      <path d="M13 13l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
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

      {/* Main Content Area */}
      <div className="flex-1 bg-[#fafafa]">
        {activeTab === "upcoming" && (
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

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#fdf6e9] border-[#fdf6e9] text-[#8e8e8e] hover:bg-[#fdf6e9]/90 px-6 py-2 text-sm font-medium"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Trip
                </Button>
              </SheetTrigger>
              <NewTripSheet />
            </Sheet>
          </div>
        )}

        {activeTab === "new-upcoming" && (
          <div className="p-6 space-y-4">
            {/* Flight Booking Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 h-32">
                  <Image
                    src="/banner-1.jpg"
                    alt="New York"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business</span>
                        <span className="text-sm text-gray-500">Trip ID: FPR202406455</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 14 - Jul 18</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">New York → Dubai</h3>
                      <p className="text-sm text-gray-600">Business Class</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Total Price</div>
                      <div className="text-lg font-semibold text-gray-900 mb-1">$ 200.00</div>
                      <div className="text-sm text-gray-500 mb-2">Reward</div>
                      <div className="text-sm font-medium text-gray-700">15239845</div>
                      <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-xs px-3 py-1 mt-2">
                        Booked
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Booking Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 h-32">
                  <Image
                    src="/banner-2.jpg"
                    alt="Hotel"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business</span>
                        <span className="text-sm text-gray-500">Trip ID: FPR202406455</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 14 - Jul 18</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Seagull Hotel Ltd</h3>
                      <p className="text-sm text-gray-600">Deluxe Queen</p>
                    </div>
                    <div className="text-right">
                      <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-xs px-3 py-1">
                        New Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Rental Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 h-32">
                  <Image
                    src="/banner-3.jpg"
                    alt="Car"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business</span>
                        <span className="text-sm text-gray-500">Trip ID: FPR202406455</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 14 - Jul 18</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Mirpur 10 → Dhanmondi</h3>
                      <p className="text-sm text-gray-600">Car Prime</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Total Price</div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">$ 200.00</div>
                      <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-xs px-3 py-1">
                        Booked
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Car Rental Cards */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 h-32">
                  <Image
                    src="/banner-4.jpg"
                    alt="Car"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business</span>
                        <span className="text-sm text-gray-500">Booking ID: FPR202406455</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 14 - Jul 18</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Dhaka → Cox's Bazar</h3>
                      <p className="text-sm text-gray-600">Car Prime</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500">Fahad Hossain</span>
                          <span className="text-xs text-gray-400">fahad@example.com</span>
                        </div>
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-xs px-3 py-1">
                        New Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 h-32">
                  <Image
                    src="/banner-5.jpg"
                    alt="Car"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business</span>
                        <span className="text-sm text-gray-500">Booking ID: FPR202406455</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 14 - Jul 18</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Dhaka → Cox's Bazar</h3>
                      <p className="text-sm text-gray-600">First class</p>
                    </div>
                    <div className="text-right">
                      <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-xs px-3 py-1">
                        New Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "past" && (
          <div className="p-6">
            <div className="grid gap-6">
              {/* New York Trip Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-80 h-48">
                    <Image
                      src="/banner-1.jpg"
                      alt="New York Trip"
                      width={320}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Business</span>
                          <span className="text-gray-500 text-sm">Trip ID: TRP920240455</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>Jul 14 - Jul 18</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">New York Trip</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-blue-600">👍</span>
                            <span className="text-gray-600">02</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">👎</span>
                            <span className="text-gray-600">01</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-600">01</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1" fill="currentColor" />
                          <circle cx="8" cy="8" r="1" fill="currentColor" />
                          <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-600">Emmett Hassan</span>
                        <span className="text-xs text-gray-400">emmett.hassan@gmail.com</span>
                      </div>
                      <div className="flex -space-x-2">
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 2"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 3"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 4"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 5"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 6"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dubai Trip Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-80 h-48">
                    <Image
                      src="/banner-2.jpg"
                      alt="Dubai Trip"
                      width={320}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Business</span>
                          <span className="text-gray-500 text-sm">Trip ID: TRP920240455</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>Jul 14 - Jul 18</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Dubai Trip</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-blue-600">👍</span>
                            <span className="text-gray-600">02</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">👎</span>
                            <span className="text-gray-600">01</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-600">01</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1" fill="currentColor" />
                          <circle cx="8" cy="8" r="1" fill="currentColor" />
                          <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-600">Emmett Hassan</span>
                        <span className="text-xs text-gray-400">emmett.hassan@gmail.com</span>
                      </div>
                      <div className="flex -space-x-2">
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 2"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 3"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 4"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 5"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 6"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "canceled" && (
          <div className="p-6">
            <div className="grid gap-6">
              {/* New York Trip Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-80 h-48">
                    <Image
                      src="/banner-1.jpg"
                      alt="New York Trip"
                      width={320}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Business</span>
                          <span className="text-gray-500 text-sm">Trip ID: TRP920240455</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>Jul 14 - Jul 18</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">New York Trip</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-blue-600">👍</span>
                            <span className="text-gray-600">02</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">👎</span>
                            <span className="text-gray-600">01</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-600">01</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1" fill="currentColor" />
                          <circle cx="8" cy="8" r="1" fill="currentColor" />
                          <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-600">Emmett Hassan</span>
                        <span className="text-xs text-gray-400">emmett.hassan@gmail.com</span>
                      </div>
                      <div className="flex -space-x-2">
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 2"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 3"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 4"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 5"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 6"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dubai Trip Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-80 h-48">
                    <Image
                      src="/banner-2.jpg"
                      alt="Dubai Trip"
                      width={320}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Business</span>
                          <span className="text-gray-500 text-sm">Trip ID: TRP920240455</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>Jul 14 - Jul 18</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Dubai Trip</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-blue-600">👍</span>
                            <span className="text-gray-600">02</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">👎</span>
                            <span className="text-gray-600">01</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-600">01</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1" fill="currentColor" />
                          <circle cx="8" cy="8" r="1" fill="currentColor" />
                          <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-600">Emmett Hassan</span>
                        <span className="text-xs text-gray-400">emmett.hassan@gmail.com</span>
                      </div>
                      <div className="flex -space-x-2">
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 2"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 3"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 4"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-headshot.png"
                          alt="Traveler 5"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src="/professional-man-headshot.png"
                          alt="Traveler 6"
                          width={24}
                          height={24}
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}