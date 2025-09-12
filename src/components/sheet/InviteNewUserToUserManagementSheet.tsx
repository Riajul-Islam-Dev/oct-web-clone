"use client";

import { ScrollArea } from "../ui/scroll-area";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Plus, Trash2, TriangleAlert } from "lucide-react";
import { useState } from "react";

export default function InviteNewUserToUserManagementSheet() {
  const [listToInvite, setInviteCount] = useState([
    { id: 10, fName: "", lName: "", email: "" },
  ]);
  return (
    <SheetContent className="min-w-[600px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>INVITE NEW USER</SheetTitle>
          <SheetDescription className="font-ubuntu text-[#5E6369]">
            Each traveler will receive an email invitation to create their
            profile and start booking travel
          </SheetDescription>
        </SheetHeader>

        <>
          <div className="mx-5 mt-8 mb-12">
            <div className="bg-white px-4 py-5 rounded shadow-[0px_4px_30px_0px_#0000000F]">
              <div className="">
                {listToInvite.map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3 mb-5 ">
                    <div className="flex-1">
                      <Label className="mb-2 ">First name*</Label>
                      <Input placeholder="Type here" />
                    </div>

                    <div className="flex-1">
                      <Label className="mb-2 ">Last name*</Label>
                      <Input placeholder="Type here" />
                    </div>
                    <div className="flex-1">
                      <Label className="mb-2 ">Business email*</Label>
                      <Input placeholder="Type here" />
                    </div>
                    <div className="mt-5">
                      <Trash2 className="cursor-pointer size-4 text-red-500" />
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-4 ">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="rounded-full"
                    onClick={() =>
                      setInviteCount((prev) => [
                        ...prev,
                        { id: 10, fName: "", lName: "", email: "" },
                      ])
                    }
                  >
                    <Plus /> Add another
                  </Button>
                  <p className="text-sm font-ubuntu">
                    (up to 10 invites at a time)
                  </p>
                </div>
              </div>

              <div className="flex gap-2 text-sm bg-[#F7F9FC] px-3 py-2 rounded mt-6">
                <TriangleAlert className="text-red-400 size-6" />
                <p className="text-raleway">
                  New users are automatically added to the Default policy and
                  user role level. You can manage a user&apos;s policy level and
                  other settings directly in the user list.
                </p>
              </div>
              <div className="flex justify-end mt-6">
                <SheetTrigger asChild>
                  <Button className="font-ubuntu font-normal">Submit</Button>
                </SheetTrigger>
              </div>
            </div>
          </div>
        </>
      </ScrollArea>
    </SheetContent>
  );
}
