import { CreateNewIntegrationLinkSheet } from "@/components/sheet/CreateNewIntegrationLinkSheet";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MoreHorizontal, Plus } from "lucide-react";

const data = [
  { platform: "Facebook", url: "www.facebook.com/oneclickTravel" },
  { platform: "Twitter", url: "www.twitter.com/oneclickTravel" },
  { platform: "Youtube", url: "www.youtube.com/oneclickTravel" },
  { platform: "Instagram", url: "www.instagram.com/oneclickTravel" },
  { platform: "LinkedIn", url: "www.linkedin.com/oneclickTravel" },
];

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-ubuntu">Integration Link Management</h4>

          <SheetTrigger asChild>
            <Button size={"sm"}>
              <Plus />
              Add Integration Link
            </Button>
          </SheetTrigger>
        </div>

        <table className="w-full table-auto border-separate border-spacing-y-1 mb-12 font-ubuntu text-sm">
          <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
            <tr className="px-4">
              <td className="px-4 py-1.5 text-[#2A2B2F]">Media Name</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Media Url</td>
              <td className="px-4 py-1.5 text-[#2A2B2F] text-center">
                Quick Actions
              </td>
            </tr>
          </thead>
          <tbody className="mt-4">
            {data.map((platform) => (
              <tr
                key={platform.platform}
                className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100"
              >
                <td className="px-4 py-1.5 text-[#5E6369]">
                  {platform.platform}
                </td>
                <td className="px-4 py-3 text-[#5E6369]">{platform.url}</td>
                <td className="px-4 py-3 text-[#5E6369] text-right">
                  <div className="flex justify-center">
                    <Menubar className="border-0 p-0 h-auto shadow-none">
                      <MenubarMenu>
                        <MenubarTrigger>
                          <MoreHorizontal className="w-4 h-4" />
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem className="text-[#316DB4]">
                            Edit
                          </MenubarItem>
                          <MenubarItem className="text-red-400">
                            Delete
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateNewIntegrationLinkSheet />
    </Sheet>
  );
}
