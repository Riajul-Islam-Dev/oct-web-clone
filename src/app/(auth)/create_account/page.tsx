import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import ProfileCircle from "@/assets/icons/ProfileCircle";
import Image from "next/image";

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Image */}
      <div className=" hidden md:flex md:w-1/2 relative">
        <div className=" absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-blue-200 bg-opacity-20 bg-[url('/banner-1.jpg')] bg-center bg-no-repeat bg-cover"></div>
          {/* <div className="relative h-full flex items-center justify-center"></div> */}
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 py-16 md:py-24">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="">
            <Link
              href="/"
              className="text-nowrap logo-img d-block py-9 min-vw-100 mb-5 px-0"
            >
              <Image
                src="./side-logo.svg"
                // src="./assets/images/logos/dark-logo.svg"
                // className="dark-logo"
                alt="Logo-Dark"
                width={108}
                height={36}
              />
            </Link>
          </div>

          {/* Header */}
          <div className="">
            <h2 className="text-2xl font-ubuntu text-gray-900 mb-1">
              Create Account
            </h2>
            <p className="text-gray-600 text-sm font-raleway max-w-[40ch]">
              To begin this journey, tell us what type of account you want
            </p>
          </div>

          {/* Account Type Cards */}
          <div className="space-y-4">
            {/* Individual Account */}
            <Link href="/personal_registration">
              <div className="bg-white rounded-lg p-6 cursor-pointer  hover:bg-[#3A75BA] transition-colors duration-200 shadow-[0px_4px_73px_0px_#3A75BA33] mb-3 shadow-blue-900/10 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-[#D8E3F1] rounded-full p-3 mr-4">
                      <ProfileCircle />
                      {/* <User className="w-6 h-6 text-blue-600" /> */}
                    </div>
                    <div>
                      <h3 className="text-md font-ubuntu group-hover:text-white ">
                        Individual
                      </h3>
                      <p className="text-gray-600 font-raleway text-sm group-hover:text-white">
                        Create account to manage your personal travel
                        activities.
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Company Account */}
            <Link href="/company_registration">
              <div className="bg-white rounded-lg p-6 cursor-pointer hover:bg-[#3A75BA] transition-colors duration-200 shadow-[0px_4px_73px_0px_#3A75BA33] shadow-blue-900/10 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-[#D8E3F1] rounded-full p-3 mr-4">
                      <BriefcaseBusiness className="w-6 h-6 text-[#3A75BA]" />
                      {/* <Building2 /> */}
                    </div>
                    <div>
                      <h3 className="text-md font-ubuntu text-gray-900 group-hover:text-white">
                        Company
                      </h3>
                      <p className="text-gray-600 font-raleway text-sm group-hover:text-white">
                        Belong to a company? Create account to manage your
                        business travel activities.
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600 font-ubuntu text-sm">
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
