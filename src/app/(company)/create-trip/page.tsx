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
  Bell,
  Home,
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
} from "lucide-react";

export default function CreateTripPage() {
  const [activeTab, setActiveTab] = useState("Round Trip");

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
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <SidebarTriggerClient />
          <div className="flex items-center space-x-2">
            <span className="text-[#64748b] text-sm">›</span>
            <h1 className="text-[#18181a] font-semibold">TRIP & BOOKING</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-[#64748b]">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-[#64748b]">
            <Home className="w-4 h-4" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/professional-headshot.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-6">
          {/* Trip Header */}
          <div className="bg-gradient-to-r from-[#316db4] to-[#087dc2] rounded-lg p-6 mb-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
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
                    <Badge variant="secondary" className="bg-[#316db4] text-white border-white/20">
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
                  <Badge className="bg-[#eda92c] text-white hover:bg-[#eda92c]/90">Business</Badge>
                  <Button className="bg-white text-[#316db4] hover:bg-white/90">New Request</Button>
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

          {/* Flight Forms */}
          <div className="space-y-6">
            {/* First Flight Card */}
            <Card className="bg-white">
              <div className="bg-[#2a2b2f] text-white px-6 py-3 rounded-t-lg">
                <h3 className="font-semibold">Add Flight</h3>
              </div>
              <div className="p-6">
                <div className="flex space-x-1 mb-6">
                  <Button
                    variant={activeTab === "Round Trip" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("Round Trip")}
                    className={activeTab === "Round Trip" ? "bg-[#316db4] text-white" : "text-[#64748b]"}
                  >
                    Round Trip
                  </Button>
                  <Button
                    variant={activeTab === "One Way" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("One Way")}
                    className={activeTab === "One Way" ? "bg-[#316db4] text-white" : "text-[#64748b]"}
                  >
                    One Way
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">From</Label>
                    <div className="relative">
                      <Plane className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="DXB Dubai" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="LaGuardia Airport (LGA)" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Depart Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="Mon, Jul 14" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Return Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="Fri, Jul 18" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Cabin Class</Label>
                    <Select defaultValue="business">
                      <SelectTrigger className="border-[#e2e8f0]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business Class</SelectItem>
                        <SelectItem value="economy">Economy Class</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Custom Field one</Label>
                    <Input placeholder="Custom field one" className="border-[#e2e8f0]" />
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Custom Field two</Label>
                    <Select>
                      <SelectTrigger className="border-[#e2e8f0]">
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
                    <Button variant="ghost" size="sm" className="text-[#64748b]">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Note
                    </Button>
                    <span className="text-sm text-[#899ab2]">(Optional)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-[#316db4]">
                      My Flight Policy
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#e2e8f0] text-[#64748b] bg-transparent">
                      Save
                    </Button>
                    <Button size="sm" className="bg-[#316db4] hover:bg-[#316db4]/90">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Second Flight Card */}
            <Card className="bg-white">
              <div className="bg-[#2a2b2f] text-white px-6 py-3 rounded-t-lg">
                <h3 className="font-semibold">Add Flight</h3>
              </div>
              <div className="p-6">
                <div className="flex space-x-1 mb-6">
                  <Button variant="default" size="sm" className="bg-[#316db4] text-white">
                    Round Trip
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#64748b]">
                    One Way
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">From</Label>
                    <div className="relative">
                      <Plane className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="DXB Dubai" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="LaGuardia Airport (LGA)" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Depart Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#64748b]" />
                      <Input value="Mon, Jul 14" className="pl-10 border-[#e2e8f0]" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Cabin Class</Label>
                    <Select defaultValue="business">
                      <SelectTrigger className="border-[#e2e8f0]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business class</SelectItem>
                        <SelectItem value="economy">Economy class</SelectItem>
                        <SelectItem value="first">First class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Custom Field one</Label>
                    <Input placeholder="Custom field one" className="border-[#e2e8f0]" />
                  </div>
                  <div>
                    <Label className="text-[#64748b] mb-2 block">Custom Field two</Label>
                    <Select>
                      <SelectTrigger className="border-[#e2e8f0]">
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
                    <Button variant="ghost" size="sm" className="text-[#64748b]">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Note
                    </Button>
                    <span className="text-sm text-[#899ab2]">(Optional)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-[#316db4]">
                      My Flight Policy
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#e2e8f0] text-[#64748b] bg-transparent">
                      Save
                    </Button>
                    <Button size="sm" className="bg-[#316db4] hover:bg-[#316db4]/90">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Add to Trip Button */}
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                className="border-[#316db4] text-[#316db4] hover:bg-[#316db4] hover:text-white bg-transparent"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add to Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}