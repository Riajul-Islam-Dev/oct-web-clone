import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type AddLoyaltyCardDetailsSheetProps = {
  program: { image: string; name: string; type: string } | undefined;
  isOpen: boolean;
  onClose: () => void;
};

export function AddLoyaltyCardDetailsSheet({
  program,
  isOpen,
  onClose,
}: AddLoyaltyCardDetailsSheetProps) {
  if (!program) return;
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="min-w-[500px]">
        <ScrollArea className="h-screen">
          <SheetHeader>
            <SheetTitle>ADD FLIGHT LOYALTY CARD</SheetTitle>
            <SheetDescription className="font-raleway font-medium text-[#5E6369]">
              Add your membership numbers to earn points from your favorite
              hotel, airline, and other loyalty programs when you book on Navan.
            </SheetDescription>
          </SheetHeader>

          <>
            <div className="mx-5">
              <div className="">
                <div className="mt-6">
                  <h4 className="font-medium font-ubuntu pb-3 ">
                    Popular programs
                  </h4>

                  <div className="px-3 pb-3 pt-3 bg-[#F7F9FC]">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={program.image}
                          height={30}
                          width={50}
                          alt="American Express"
                        />
                        <div className="">
                          <p className="text-sm font-ubuntu">{program.name}</p>
                          <p className="text-xs font-ubuntu">{program.type}</p>
                        </div>
                      </div>

                      <Button
                        disabled
                        className="border-[#316DB4] text-[#316DB4]"
                        variant={"outline"}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 justify-between mb-8 mt-6">
                  <div className="flex-1">
                    <Label className="mb-2  ">loyalty number*</Label>
                    <div>
                      <Input className="rounded-sm" placeholder="Type here" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Label className="mb-2  ">expired date (Optional) *</Label>
                    <div>
                      <Input
                        className="rounded-sm"
                        placeholder="Type here (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <SheetTrigger asChild>
                    <Button
                      variant={"secondary"}
                      className="font-ubuntu font-normal"
                    >
                      Cancel
                    </Button>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Button className="font-ubuntu font-normal">
                      Save Card
                    </Button>
                  </SheetTrigger>
                </div>
              </div>
            </div>
          </>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
