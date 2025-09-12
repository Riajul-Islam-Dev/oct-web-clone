import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ConnectedAccountContactInfo from "@/components/ConnectedAccountContactInfo";

export default function Page() {
  return (
    <div className="mx-4 my-4">
      <div className="bg-white rounded py-4 px-4 shadow-[0px_4px_30px_0px_#0000000F]">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-ubuntu font-medium">
            Add your personal email
          </h4>
          <Button variant={"secondary"}>Update</Button>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr] gap-5 items-center mt-3">
          <p className="text-sm border-r font-ubuntu pr-4 text-[#5E6369] ">
            We keep your personal travel separate from your business travel.
            We&apos;ll use this email address to send you information about your
            personal trips.
          </p>
          <div className="flex justify-self-start items-center bg-[#F6F6F6] px-2 py-1.5 rounded ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 20 20"
            >
              <path
                fill="#2A2B2F"
                d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"
              />
            </svg>
            <p className="ml-1.5 font-ubuntu text-[#5E6369]">
              mdenamulhosse@gmail.com
            </p>
          </div>
        </div>
      </div>

      <ConnectedAccountContactInfo />

      <div className="bg-white rounded py-6 px-4 shadow-[0px_4px_30px_0px_#0000000F] mt-3">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-sm leading-none font-raleway">Account Type</p>
            <h4 className="leading-none font-ubuntu">Personal Account</h4>
          </div>
          <div className="">
            <Switch className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded py-4 px-4 shadow-[0px_4px_30px_0px_#0000000F] mt-3">
        <div className="flex flex-col justify-between items-center py-8">
          <h4 className="text-lg font-ubuntu">
            You Are Currently Using{" "}
            <span className="text-[#316DB4]">Personal Account!</span>
          </h4>
          <p className="text-sm text-[#5E6369] font-raleway">
            Join a company by accepting an invitation.
          </p>
        </div>
      </div>

      <div className="bg-white rounded py-8 px-4 shadow-[0px_4px_30px_0px_#0000000F] mt-3 mb-8">
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="font-ubuntu">ABC Travel LTD Invitation</h4>
            <p className="text-[#6E6E6E] max-w-[25rem] text-sm font-raleway">
              <span className="text-[#316DB4]">Jacob Jones</span> Invited You to
              Join ABC Company By Accepting An Invitation.
            </p>
          </div>

          <div className="flex gap-3">
            <Button size={"sm"} className="font-normal">
              Accept Invitation
            </Button>
            <Button size={"sm"} variant={"outline"} className="font-normal">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
