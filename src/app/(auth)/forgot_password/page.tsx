import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Image */}
      <div className=" hidden md:flex md:w-1/2 relative">
        <div className=" absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-blue-200 bg-opacity-20 bg-[url('/banner-5.jpg')] bg-center bg-no-repeat bg-cover"></div>
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
              Forgot Password?
            </h2>
            <p className="text-gray-600 font-raleway text-sm">
              No problem. Just enter your email address below — we&apos;ll send
              you a link to reset it.
            </p>
          </div>

          {/* <!--form--> */}

          <div className="mb-5">
            <Label className="mb-2 ">Email*</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-3.5 h-4 w-4 text-[#3A75BA]" />
              <Input className="h-11 pl-9" placeholder="Type your email" />
            </div>
          </div>

          <div className="mb-2">
            <Button size={"lg"} variant={"tertiary"} className="w-full">
              Send Reset Link
            </Button>
          </div>
          <div className="my-2 text-center font-ubuntu">OR</div>
          <div className="mb-2">
            <Button
              variant={"outline"}
              size={"lg"}
              className="border-[#EDA92C] bg-transparent w-full text-[#EDA92C] hover:text-[#EDA92C]"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
