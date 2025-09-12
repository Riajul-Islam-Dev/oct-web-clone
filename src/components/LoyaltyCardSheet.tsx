import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LoyaltyProgramItem } from "./LoyaltyProgramItem";

const programs = [
  {
    image: "/gift-card.png",
    name: "Marriott Bonvoy",
    type: "AER Club (Aer Lingus)",
  },
  {
    image: "/gift-card.png",
    name: "Aeroflot Bonus",
    type: "Aeroflot Bonus (Aeroflot)",
  },
  {
    image: "/gift-card.png",
    name: "Aerolineas Plus",
    type: "Aerolineas Plus (Austral, Aerolineas Argentinas)",
  },
  {
    image: "/gift-card.png",
    name: "Aeroméxico Rewards",
    type: "Aeroméxico Rewards (Aeroméxico, Aerolitoral)",
  },
];

type LoyaltyCardSheetProps = {
  handleAddClick: (arg: { image: string; name: string; type: string }) => void;
};
export default function LoyaltyCardSheet({
  handleAddClick,
}: LoyaltyCardSheetProps) {
  return (
    <>
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
                <div className="relative mt-5">
                  <Input
                    className="pr-3 bg-[#F7F9FC] border-0 rounded-sm "
                    placeholder="Search guest travelers"
                  />
                  <Search className="absolute right-3 top-3 text-[#316DB4] h-3.5 w-3.5" />
                </div>

                <div className="mt-6">
                  <h4 className="font-medium font-ubuntu pb-3 ">
                    Popular programs
                  </h4>

                  {programs.map((each) => (
                    <LoyaltyProgramItem
                      handleAddClick={handleAddClick.bind(null, each)}
                      key={each.name}
                      program={each}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        </ScrollArea>
      </SheetContent>
    </>
  );
}
