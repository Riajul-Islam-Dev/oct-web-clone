import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Image */}
      <div className=" hidden md:flex md:w-1/2 relative">
        <div className=" absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-blue-200 bg-opacity-20 bg-[url('/banner-4.jpg')] bg-center bg-no-repeat bg-cover"></div>
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
          <div className="mb-6">
            <h2 className="text-2xl font-ubuntu text-gray-900">Sign In Now</h2>
            <p className="text-gray-600 font-raleway text-sm">
              You need to Sign in first to continue.
            </p>
          </div>

          <button className="w-full justify-center py-[12px] px-[28px] rounded-lg flex bg-[#ECECEC] mb-6">
            <span className="flex-shrink-0 font-ubuntu text-[#282828] mr-4">
              Sign In with Google
            </span>
            <Image
              src="/assets/images/svgs/google-icon.svg"
              alt="Image"
              className="img-fluid "
              width="18"
              height="18"
            />
          </button>
          <div className="flex items-center mb-6">
            <div
              className="flex-1 border-t border-dashed border-gray-400"
              style={{
                borderImage:
                  "repeating-linear-gradient(to right, #3A75BA 0, #3A75BA 8px, transparent 8px, transparent 16px) 1",
              }}
            ></div>
            <div className="mx-4 text-gray-600 font-ubuntu text-sm">
              Or Sign In With
            </div>
            <div
              className="flex-1 border-t border-dashed border-gray-400"
              style={{
                borderImage:
                  "repeating-linear-gradient(to right, #3A75BA 0, #3A75BA 8px, transparent 8px, transparent 16px) 1",
              }}
            ></div>
          </div>

          {/* <!--form--> */}

          <div className="mb-5">
            <Label className="mb-2  ">Email*</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-3.5 h-4 w-4 text-[#3A75BA]" />
              <Input className="pl-9" placeholder="Type your email" />
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <Label className=" ">Password*</Label>
              <Link href="/forgot_password" className="text-sm  text-[#3A75BA]">
                Forgot Password?
              </Link>
            </div>
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
            Remember Me
          </div>
          <div className="mb-2">
            <Button size={"lg"} className="bg-[#EDA92C] w-full">
              Sign In
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm font-ubuntu text-gray-600">
              Don&apos;t have an Account?{" "}
              <Link
                href="/create_account"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
