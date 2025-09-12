import { ScrollArea } from "../ui/scroll-area";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import FileDropZone2 from "../FileDropZone/FileDropZone2";

export default function UploadUsersToUserManagementSheet() {
  return (
    <SheetContent className="min-w-[500px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>UPLOAD USERS</SheetTitle>
        </SheetHeader>

        <>
          <div className="mx-5 mt-8">
            <div className="bg-white p-4 rounded shadow-[0px_4px_30px_0px_#0000000F]">
              <div className="mb-4 flex justify-between">
                <p className="font-ubuntu text-sm">Select a csv file only</p>
                <Button size={"sm"} variant={"secondary"}>
                  Download Example
                </Button>
              </div>
              <FileDropZone2 className="py-12" />

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
