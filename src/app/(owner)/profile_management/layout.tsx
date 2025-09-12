import ProfileManagementNestedSidebar from "@/components/ProfileManagementNestedSidebar";
import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import { Button } from "@/components/ui/button";
import { Notification } from "iconsax-reactjs";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex items-center justify-between border-b py-2 w-full">
        <div className="flex items-center">
          <SidebarTriggerClient />
          <h3 className="uppercase font-semibold">Profile Management</h3>
        </div>
        <div className="mr-5 flex items-center gap-4">
          <Button className="bg-[#F5FAFD] p-2 rounded-full h-8 w-8 hover:bg-[#e1f1fa]  ">
            <Notification color="#087DC2" size={16} />
          </Button>

          <Image
            className="rounded-full"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt="avatar"
            height={32}
            width={32}
            unoptimized
          />
        </div>
      </div>
      <div className="">
        <div className="bg-white m-5 mb-10 rounded-md shadow-[0px_4px_73px_0px_#3A75BA33]">
          <div className="flex">
            <div className="border-r flex-shrink-0">
              <div className="py-3 ">
                <p className="text-[#18181A] pt-2 pb-3 pl-3 uppercase ">
                  Profile
                </p>
                <ProfileManagementNestedSidebar />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
