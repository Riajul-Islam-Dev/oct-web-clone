import { Button } from "@/components/ui/button";
import ProfilePersonalInformation from "@/components/ProfilePersonalInformation";
import ProfileFlightInformation from "@/components/ProfileFlightInformation";
import ProfilePassportInformation from "@/components/ProfilePassportInformation";
import Image from "next/image";
// TODO: add image resizer

export default function Page() {
  return (
    <div className="flex-1 px-3 pt-3">
      <div className="pb-2 border-b">
        <h4 className="font-medium font-ubuntu text-lg">
          Traveler Profile Information
        </h4>
        <p className="text-sm font-raleway font-medium">
          Your name needs to match the machine-readable name on your passport.{" "}
          <a href="#" className="text-[#316DB4] underline underline-[#316DB4]">
            View example
          </a>
        </p>
      </div>

      <div className="bg-white rounded-md mt-5 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] flex items-center gap-4">
        <div className="">
          <Image
            src="https://randomuser.me/api/portraits/men/94.jpg"
            height={80}
            width={80}
            alt="avatar"
            className="rounded-full"
            unoptimized
          />
        </div>
        <div className="">
          <h4 className="font-bold font-ubuntu text-xl">
            Personal Information
          </h4>
          <p className="font-raleway font-medium ">
            emily.johnson@techcorp.com
          </p>
        </div>
        <div className="ml-auto">
          <Button size="sm">Update Profile Photo</Button>
        </div>
      </div>

      <ProfilePersonalInformation />
      <ProfileFlightInformation />
      <ProfilePassportInformation />
    </div>
  );
}
