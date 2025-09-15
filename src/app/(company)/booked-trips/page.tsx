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
  Car,
  Train,
} from "lucide-react";

export default function BookedTripsPage() {
  const [activeTab, setActiveTab] = useState("flights");

  const teamMembers = [
    { name: "Trip Owner", avatar: "/professional-headshot.png", isOwner: true },
    { name: "Travellers", avatar: "/professional-man-headshot.png", isOwner: false },
    { name: "Francis Hassan", avatar: "/professional-headshot.png", isOwner: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <SidebarTriggerClient />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">O</span>
            </div>
            <span className="text-sm font-medium text-gray-600">TRIP & BOOKING</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <MessageSquare className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Notification className="w-5 h-5" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/professional-headshot.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Trip Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">New York Trip</h1>
            <p className="text-blue-100">Jul 14 - Jul 18 | New York, USA</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-blue-400 text-white">
                Marketing Campaign Trip
              </Badge>
            </div>
          </div>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Trip Overview
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">Trip Owner</span>
            <Badge className="bg-orange-500 text-white">1</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">Travellers</span>
            <Badge className="bg-green-500 text-white">2</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Francis Hassan</span>
            <div className="flex -space-x-2">
              {teamMembers.map((member, index) => (
                <Avatar key={index} className="w-6 h-6 border-2 border-white">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Flight Booking Card */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/banner-1.jpg"
                alt="Flight"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span>Booking ID: #9920240401</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-500">Jul 14 - Jul 18</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">New York</span>
                <Plane className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">Dubai</span>
              </div>
              <div className="text-sm text-gray-500">Business Class</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="font-semibold">$ 200.00</div>
              <div className="text-sm text-gray-500">Reward</div>
              <div className="text-sm">15239845</div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Booked
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>
        </Card>

        {/* Hotel Booking Card */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/banner-2.jpg"
                alt="Hotel"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span>Booking ID: #9920240401</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-500">Jul 14 - Jul 18</span>
              </div>
              <div className="font-semibold">Seagull Hotel Ltd</div>
              <div className="text-sm text-gray-500">Deluxe Queen</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="font-semibold">$ 200.00</div>
              <div className="text-sm text-gray-500">Reward</div>
              <div className="text-sm">15239845</div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                New Booking
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>
        </Card>

        {/* Car Rental Card */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/banner-3.jpg"
                alt="Car"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span>Booking ID: #9920240401</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-500">Jul 14 - Jul 18</span>
              </div>
              <div className="font-semibold">Mirpur 10</div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">Dhanmondi</span>
              </div>
              <div className="text-sm text-gray-500">Car Prime</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="font-semibold">$ 200.00</div>
              <div className="text-sm text-gray-500">Reward</div>
              <div className="text-sm">15239845</div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Booked
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>
        </Card>

        {/* Train Booking Card 1 */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/banner-4.jpg"
                alt="Train"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span>Booking ID: #9920240401</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-500">Jul 14 - Jul 18</span>
              </div>
              <div className="font-semibold">Dhaka</div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">Cox's Bazar</span>
              </div>
              <div className="text-sm text-gray-500">Car Prime</div>
              <div className="flex items-center gap-2 mt-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage src="/professional-headshot.png" />
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-500">Emamul Hassan</span>
                <span className="text-xs text-gray-500">emamul.hassan@gmail.com</span>
                <div className="flex -space-x-1 ml-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="w-5 h-5 border border-white">
                      <AvatarImage src={`/professional-headshot.png`} />
                      <AvatarFallback>{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="font-semibold">$ 200.00</div>
              <div className="text-sm text-gray-500">Reward</div>
              <div className="text-sm">15239845</div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                New Request
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>
        </Card>

        {/* Train Booking Card 2 */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/banner-5.jpg"
                alt="Train"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span>Booking ID: #9920240401</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-500">Jul 14 - Jul 18</span>
              </div>
              <div className="font-semibold">Dhaka</div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">Cox's Bazar</span>
              </div>
              <div className="text-sm text-gray-500">First class</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="font-semibold">$ 200.00</div>
              <div className="text-sm text-gray-500">Reward</div>
              <div className="text-sm">15239845</div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                New Request
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>
        </Card>

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
  );
}