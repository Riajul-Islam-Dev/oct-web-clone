"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  X,
  MapPin,
  Calendar,
  Plane,
  Building2,
  Train,
  Car,
  Shield,
  User,
  Plus,
  Briefcase,
  Palmtree,
} from "lucide-react";

interface NewTripSheetProps {
  onClose: () => void;
}

export function NewTripSheet({ onClose }: NewTripSheetProps) {
  const [travelType, setTravelType] = useState("business");
  const [selectedOptions, setSelectedOptions] = useState(["flight"]);
  const [travelers] = useState([
    {
      name: "John Doe",
      email: "john.doe@company.com",
      avatar: "/professional-headshot.png",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@company.com",
      avatar: "/professional-man-headshot.png",
    },
  ]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <SheetContent className="w-[600px] sm:max-w-[600px] p-0">
      <div className="h-full bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-[#2a2b2f]">New Trip</h1>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-[#d9d9d9] hover:bg-gray-50"
              onClick={onClose}
            >
              <X className="h-5 w-5 text-[#9a9a9a]" />
            </Button>
          </div>

          {/* Travel Type Toggle */}
          <div className="flex gap-2 mb-8">
            <Button
              variant={travelType === "business" ? "default" : "outline"}
              onClick={() => setTravelType("business")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                travelType === "business"
                  ? "bg-[#eda92c] text-white hover:bg-[#eda92c]/90"
                  : "border-[#d9d9d9] text-[#5e6369] hover:bg-gray-50"
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Business Travel
            </Button>
            <Button
              variant={travelType === "personal" ? "default" : "outline"}
              onClick={() => setTravelType("personal")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                travelType === "personal"
                  ? "bg-[#2a2b2f] text-white hover:bg-[#2a2b2f]/90"
                  : "border-[#d9d9d9] text-[#5e6369] hover:bg-gray-50"
              }`}
            >
              <Palmtree className="h-4 w-4" />
              Personal Travel
            </Button>
          </div>

          {/* Destination */}
          <div className="mb-6">
            <Label htmlFor="destination" className="text-[#2a2b2f] font-medium mb-2 block">
              Destination*
            </Label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9a9a9a]" />
              <Input
                id="destination"
                defaultValue="New York, USA"
                className="pl-12 py-4 border-[#e2e8f0] rounded-xl text-[#5e6369] focus:border-[#eda92c] focus:ring-[#eda92c]"
              />
            </div>
          </div>

          {/* Date Fields */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <Label htmlFor="start-date" className="text-[#2a2b2f] font-medium mb-2 block">
                Start Date*
              </Label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9a9a9a]" />
                <Input
                  id="start-date"
                  placeholder="Select Date"
                  className="pl-12 py-4 border-[#e2e8f0] rounded-xl text-[#9a9a9a] focus:border-[#eda92c] focus:ring-[#eda92c]"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="end-date" className="text-[#2a2b2f] font-medium mb-2 block">
                End Date*
              </Label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9a9a9a]" />
                <Input
                  id="end-date"
                  placeholder="Select Date"
                  className="pl-12 py-4 border-[#e2e8f0] rounded-xl text-[#9a9a9a] focus:border-[#eda92c] focus:ring-[#eda92c]"
                />
              </div>
            </div>
          </div>

          {/* Travel Options */}
          <div className="mb-8">
            <h3 className="text-[#2a2b2f] font-medium mb-4">Select your travel options</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "flight", label: "Flight", icon: Plane },
                { id: "hotels", label: "Hotels", icon: Building2 },
                { id: "trains", label: "Trains", icon: Train },
                { id: "rental-cars", label: "Rental Cars", icon: Car },
                { id: "black-cars", label: "Black Cars", icon: Car },
              ].map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant="outline"
                  onClick={() => toggleOption(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    selectedOptions.includes(id)
                      ? "bg-[#eda92c] text-white border-[#eda92c] hover:bg-[#eda92c]/90"
                      : "border-[#d9d9d9] text-[#5e6369] hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Trip Name */}
          <div className="mb-6">
            <Label htmlFor="trip-name" className="text-[#2a2b2f] font-medium mb-2 block">
              Trip Name*
            </Label>
            <div className="relative">
              <Plane className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9a9a9a]" />
              <Input
                id="trip-name"
                defaultValue="New York Trip"
                className="pl-12 py-4 border-[#e2e8f0] rounded-xl text-[#5e6369] focus:border-[#eda92c] focus:ring-[#eda92c]"
              />
            </div>
          </div>

          {/* Reason for Travel */}
          <div className="mb-8">
            <Label htmlFor="reason" className="text-[#2a2b2f] font-medium mb-2 block">
              Reason for Travel*
            </Label>
            <div className="relative">
              <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9a9a9a]" />
              <Input
                id="reason"
                placeholder="Reason for Travel"
                className="pl-12 py-4 border-[#e2e8f0] rounded-xl text-[#9a9a9a] focus:border-[#eda92c] focus:ring-[#eda92c]"
              />
            </div>
          </div>

          {/* Travelers Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <User className="h-5 w-5 text-[#9a9a9a]" />
              <Avatar className="h-10 w-10">
                <AvatarImage src={travelers[0].avatar || "/placeholder.svg"} alt={travelers[0].name} />
                <AvatarFallback className="bg-[#316db4] text-white">{travelers[0].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-[#2a2b2f] font-medium">{travelers[0].name}</div>
                <div className="text-[#9a9a9a] text-sm">{travelers[0].email}</div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-4 w-4 text-[#eda92c]" />
              </Button>
            </div>

            <div className="flex items-center gap-3 ml-9">
              {travelers.slice(1).map((traveler, index) => (
                <Avatar key={index} className="h-10 w-10">
                  <AvatarImage src={traveler.avatar || "/placeholder.svg"} alt={traveler.name} />
                  <AvatarFallback className="bg-[#316db4] text-white">{traveler.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6d496] border-[#f6d496] text-[#2a2b2f] hover:bg-[#f6d496]/90"
              >
                <Plus className="h-4 w-4" />
                Add Traveler
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] p-6 bg-white">
          <div className="flex gap-4 justify-end">
            <Button
              variant="outline"
              className="px-8 py-3 rounded-full bg-[#2a2b2f] text-white border-[#2a2b2f] hover:bg-[#2a2b2f]/90"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button className="px-8 py-3 rounded-full bg-[#316db4] text-white hover:bg-[#316db4]/90" onClick={onClose}>Create Trip</Button>
          </div>
        </div>
      </div>
    </SheetContent>
  );
}