"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import { Notification } from "iconsax-reactjs";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Edit,
  User,
  Users,
  MessageSquare,
  Plane,
  Calendar,
  Plus,
  ExternalLink,
  Building,
  Shield,
} from "lucide-react";

export default function AddHotelPage() {
  // Sample team members data
  const teamMembers = [
    { name: "Trip Owner", avatar: "/professional-headshot.png" },
    { name: "Traveler", avatar: "/professional-man-headshot.png" },
    { name: "Enamul Hossen", avatar: "/professional-headshot.png" },
    { name: "Member 1", avatar: "/professional-man-headshot.png" },
    { name: "Member 2", avatar: "/professional-headshot.png" },
    { name: "Member 3", avatar: "/professional-man-headshot.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">O</span>
        </div>
        <div className="space-y-4">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v12z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16">
        {/* Top Navigation */}
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">›</span>
            <span className="font-semibold text-gray-900">TRIP & BOOKING</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/professional-headshot.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Trip Header */}
        <div className="bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] text-white p-6 relative overflow-hidden">
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold italic mb-2">New York Trip</h2>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>Jul 14 - Jul 18</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>New York, USA</span>
                  </div>
                </div>
                <div className="mt-3">
                  <Badge variant="secondary" className="bg-[#1e88e5] text-white border-white/20">
                    Reason for Travel
                  </Badge>
                  <div className="text-sm mt-1">Marketing Camping Trip</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Badge className="bg-[#ff9800] text-white hover:bg-[#ff9800]/90">Business</Badge>
                <Button className="bg-white text-[#1e88e5] hover:bg-white/90">New Request</Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Trip Owner</span>
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={teamMembers[0].avatar || "/placeholder.svg"} />
                    <AvatarFallback>TO</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Traveler(s)</span>
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={teamMembers[1].avatar || "/placeholder.svg"} />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={teamMembers[2].avatar || "/placeholder.svg"} />
                    <AvatarFallback>EH</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Enamul Hossen</span>
                  <span className="text-xs opacity-75">enamulhossen@gmail.com</span>
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex -space-x-2">
                  {teamMembers.slice(3).map((member, index) => (
                    <Avatar key={index} className="w-8 h-8 border-2 border-white">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Booking Card */}
        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm text-gray-500">Booking ID :</span>
                    <span className="text-sm font-medium">F9920240455</span>
                    <Shield className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Jul 14 - Jul 18</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold">New York</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-lg font-semibold">Dubai</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Business Class</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Total Price</div>
                  <div className="text-xl font-bold">$ 200.00</div>
                  <div className="text-sm text-gray-500 mt-2">Reward</div>
                  <div className="text-sm font-medium">15239845</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                    Booked
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Form */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#2c3e50] text-white px-6 py-3">
              <h3 className="font-semibold">Add Hotel</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Hotel Location</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input value="Business Cabin" className="pl-10 border-gray-300" readOnly />
                  </div>
                </div>
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Check In</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input value="Mon, Jul 14" className="pl-10 border-gray-300" readOnly />
                  </div>
                </div>
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Check Out</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input value="Fri, Jul 18" className="pl-10 border-gray-300" readOnly />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Room Type</Label>
                  <Select defaultValue="double">
                    <SelectTrigger className="border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="double">Double</SelectItem>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Custom Field one</Label>
                  <Input placeholder="Custom field one" className="border-gray-300" />
                </div>
                <div>
                  <Label className="text-gray-600 mb-2 block text-sm">Custom Field two</Label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Custom field two" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Note
                  </Button>
                  <span className="text-sm text-gray-500">(Optional)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" className="text-[#1e88e5]">
                    My Hotel Policy
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 bg-transparent">
                    Save
                  </Button>
                  <Button size="sm" className="bg-[#1e88e5] hover:bg-[#1565c0]">
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Trip Button */}
          <div className="flex justify-center pt-6">
            <Button
              variant="outline"
              className="border-[#1e88e5] text-[#1e88e5] hover:bg-[#1e88e5] hover:text-white bg-transparent"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add to Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}