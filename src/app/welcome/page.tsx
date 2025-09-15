"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Share2,
  MapPin,
  Plane,
  Building2,
  Train,
  Car,
  Users,
  BarChart3,
  Award,
  TrendingUp,
  Menu,
  Compass,
  Heart,
  Camera,
  BookOpen,
  AlertTriangle,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function TravelPortal() {
  const router = useRouter()

  const handleBusinessTravelClick = () => {
    router.push('/business-travel')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#eda92c] rounded-full flex items-center justify-center">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-white">ONE CLICK TRAVEL</span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-full border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white text-sm px-4 py-2"
          >
            <Calendar className="w-4 h-4" />
            Create Event
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white text-sm px-4 py-2"
          >
            <Building2 className="w-4 h-4" />
            My Event
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white w-10 h-10"
          >
            <Calendar className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white w-10 h-10"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/professional-headshot.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white w-10 h-10"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/business-people-talking-in-modern-office-lounge.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white drop-shadow-lg">
            ONE CLICK TO DESTINATION
          </h1>

          {/* Travel Type Toggle */}
          <div className="flex items-center justify-center gap-1">
            <Button 
              className="bg-black/80 text-white rounded-full px-6 py-2 text-sm font-medium"
              onClick={handleBusinessTravelClick}
            >
              <Building2 className="w-4 h-4 mr-2" />
              Business Travel
            </Button>
            <Button
              variant="outline"
              className="bg-white/90 border-white text-gray-700 rounded-full px-6 py-2 text-sm font-medium hover:bg-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Personal Travel
            </Button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center max-w-4xl mx-auto bg-white rounded-full p-1 shadow-lg">
            <div className="flex items-center flex-1 pl-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <Input
                placeholder="What is your destination ?"
                className="flex-1 border-0 bg-transparent text-gray-700 placeholder:text-gray-500 focus-visible:ring-0 text-sm"
              />
            </div>
            <div className="flex items-center px-4 border-l border-gray-200">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <div className="text-sm text-gray-500">
                <div className="text-xs text-gray-400">Start Date</div>
                <div>Select Date</div>
              </div>
            </div>
            <div className="flex items-center px-4 border-l border-gray-200">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <div className="text-sm text-gray-500">
                <div className="text-xs text-gray-400">End Date</div>
                <div>Select Date</div>
              </div>
            </div>
            <Button className="bg-[#eda92c] hover:bg-[#d4941f] text-white rounded-full px-6 py-2 m-1 font-medium">
              Go
            </Button>
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section className="px-6 py-6 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Users className="w-5 h-5 text-gray-600" />
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/professional-man-headshot.png" />
                <AvatarFallback>EH</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-[#2a2b2f]">Enamul Hossen</p>
                <p className="text-sm text-gray-500">enamulhossen@gmail.com</p>
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                ✓
              </Badge>
            </div>

            <div className="flex items-center gap-2 ml-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="w-8 h-8">
                  <AvatarImage src={`/traveler-.jpg?height=32&width=32&query=traveler ${i}`} />
                  <AvatarFallback>T{i}</AvatarFallback>
                </Avatar>
              ))}
              <Button
                variant="outline"
                className="bg-[#eda92c] text-white border-[#eda92c] hover:bg-[#d4941f] rounded-full px-4 py-1 text-sm"
              >
                + Add Traveler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold text-[#2a2b2f]">Select your travel options</h2>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="outline" className="rounded-full px-6 py-3 border-gray-300 text-gray-700 bg-transparent">
              <Plane className="w-4 h-4 mr-2" />
              Flight
            </Button>
            <Button className="bg-[#eda92c] hover:bg-[#d4941f] text-white rounded-full px-6 py-3">
              <Building2 className="w-4 h-4 mr-2" />
              Hotels
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3 border-gray-300 text-gray-700 bg-transparent">
              <Train className="w-4 h-4 mr-2" />
              Trains
            </Button>
            <Button className="bg-[#eda92c] hover:bg-[#d4941f] text-white rounded-full px-6 py-3">
              <Car className="w-4 h-4 mr-2" />
              Rental Cars
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3 border-gray-300 text-gray-700 bg-transparent">
              <Car className="w-4 h-4 mr-2" />
              Black Cars
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button className="bg-[#316db4] hover:bg-[#2a5a9a] text-white rounded-full px-8 py-3">
              Plan your trip
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 border-gray-300 text-gray-700 bg-transparent">
              Cancel
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 py-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2a2b2f] relative">
              Quick Actions
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-px bg-gray-300"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-[#eda92c]" />
                </div>
                <h3 className="font-semibold text-[#2a2b2f]">Wish list</h3>
                <p className="text-sm text-gray-600">Save for later</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Camera className="w-6 h-6 text-[#316db4]" />
                </div>
                <h3 className="font-semibold text-[#2a2b2f]">Travel gallery</h3>
                <p className="text-sm text-gray-600">View gallery</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-[#eda92c]" />
                </div>
                <h3 className="font-semibold text-[#2a2b2f]">Booking manager</h3>
                <p className="text-sm text-gray-600">Manage trip</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-[#2a2b2f]">Price Alerts</h3>
                <p className="text-sm text-gray-600">Track fares</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}