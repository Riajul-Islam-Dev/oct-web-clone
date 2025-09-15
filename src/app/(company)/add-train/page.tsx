"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function AddTrainPage() {
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
              <div className="text-sm text-gray-500">Car Hire</div>
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

        {/* Train Booking Form */}
        <Card className="p-6">
          <div className="bg-black text-white p-4 rounded-t-lg mb-6">
            <h2 className="text-lg font-semibold">Add Train</h2>
          </div>
          
          <div className="space-y-6">
            {/* First Train Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium">Round Trip</span>
                <span className="text-sm font-medium">One Way</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-station">From</Label>
                  <div className="relative">
                    <Train className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="from-station"
                      placeholder="Regal Hilton Hotel"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to-station">To</Label>
                  <div className="relative">
                    <Train className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="to-station"
                      placeholder="Buckingham Palace"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="pickup-date"
                      placeholder="Mon, Jul 14"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="return-date"
                      placeholder="Fri, Jul 18"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cabin-class">Cabin Class</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="First class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Class</SelectItem>
                        <SelectItem value="business">Business Class</SelectItem>
                        <SelectItem value="economy">Economy Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="custom-field-1">Custom Field one</Label>
                  <Input id="custom-field-1" placeholder="Custom field one" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-field-2">Custom Field two</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Custom field two" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Note
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  (Optional)
                </Button>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-blue-600">My Train Policy</span>
                  <Shield className="w-4 h-4 text-blue-600" />
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Save
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Second Train Section */}
            <div className="border-t pt-6">
              <div className="bg-black text-white p-4 rounded-t-lg mb-6">
                <h2 className="text-lg font-semibold">Add Train</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium">Round Trip</span>
                  <span className="text-sm font-medium">One Way</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-station-2">From</Label>
                    <div className="relative">
                      <Train className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="from-station-2"
                        placeholder="Regal Hilton Hotel"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-station-2">To</Label>
                    <div className="relative">
                      <Train className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="to-station-2"
                        placeholder="Buckingham Palace"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date-2">Pickup Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="pickup-date-2"
                        placeholder="Mon, Jul 14"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return-date-2">Return Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="return-date-2"
                        placeholder="Fri, Jul 18"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cabin-class-2">Cabin Class</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Select>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="First class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first">First Class</SelectItem>
                          <SelectItem value="business">Business Class</SelectItem>
                          <SelectItem value="economy">Economy Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-field-3">Custom Field one</Label>
                    <Input id="custom-field-3" placeholder="Custom field one" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-field-4">Custom Field two</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Custom field two" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Note
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    (Optional)
                  </Button>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm text-blue-600">My Train Policy</span>
                    <Shield className="w-4 h-4 text-blue-600" />
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      Save
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Trip Button */}
        <div className="flex justify-center pt-6">
          <Link href="/booked-trips">
            <Button
              variant="outline"
              className="border-[#1e88e5] text-[#1e88e5] hover:bg-[#1e88e5] hover:text-white bg-transparent"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add to Trip
            </Button>
          </Link>
        </div>
        </Card>
      </div>
    </div>
  );
}