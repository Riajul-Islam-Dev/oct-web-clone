import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { BriefcaseBusiness, Eye, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Image */}
      <div className=" hidden md:flex md:w-1/2 relative">
        <div className=" absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-blue-200 bg-opacity-20 bg-[url('/banner-3.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 py-16 md:py-24">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <Link
              href="/"
              className="text-nowrap logo-img d-block py-9 min-vw-100 mb-5 px-0"
            >
              <Image
                src="./side-logo.svg"
                // className="dark-logo"
                alt="Logo-Dark"
                width={108}
                height={36}
              />
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-ubuntu text-gray-900">
              Create Company Account
            </h2>
            <p className="text-gray-600 font-raleway text-sm">
              Create an account to easily use one click travel services.
            </p>
          </div>

          {/* <!--form--> */}
          <div className="mb-5">
            <Label className="mb-2  ">Company Name*</Label>
            <div className="relative">
              <BriefcaseBusiness className="absolute left-2.5 top-3 h-4 w-4 text-[#3A75BA]" />
              <Input className="pl-9" placeholder="Company name" />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="">
                <Label className="mb-2  ">Contact Person*</Label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-3 h-4 w-4 text-[#3A75BA]" />
                  <Input className="pl-9" placeholder="Type your email" />
                </div>
              </div>

              <div className="">
                <Label className="mb-2  ">Phone Number*</Label>
                <PhoneInput
                  className=""
                  defaultCountry="BD"
                  placeholder="1XXX XXX XXX"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            {" "}
            <Label className="mb-2  ">Email*</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-3 h-4 w-4 text-[#3A75BA]" />
              <Input className="pl-9" placeholder="Type your email" />
            </div>
          </div>

          <div className="mb-3">
            <Label className="mb-2  ">Password*</Label>
            <div className="relative">
              <Lock className="absolute left-2.5 top-3 h-4 w-4 text-[#3A75BA]" />
              <Input className="pl-8 pr-8" placeholder="Enter Password" />
              <Eye className="absolute right-2.5 top-3 h-4 w-4 text-[#3A75BA]" />
            </div>
          </div>
          <div className="text-sm font-ubuntu flex items-center mb-6">
            <Checkbox
              name=""
              id=""
              className="data-[state=checked]:bg-[#087DC2] data-[state=checked]:border-[#087DC2] mr-2"
            />
            <p>
              By creating an account you agree to our
              <Link className="text-[#087DC2] underline ml-2" href="/">
                Terms & Conditions
              </Link>
            </p>
          </div>
          <div className="mb-2">
            <Button size={"lg"} variant={"tertiary"} className="w-full">
              Create Account
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm font-ubuntu text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
