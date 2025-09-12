"use client";

import { AddLoyaltyCardDetailsSheet } from "@/components/sheet/AddLoyaltyCardDetailsSheet";
import LoyaltyCardSheet from "@/components/LoyaltyCardSheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [nestedSheetOpen, setNestedSheetOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<{
    image: string;
    name: string;
    type: string;
  }>();

  const handleAddClick = (program: {
    image: string;
    name: string;
    type: string;
  }) => {
    setSelectedProgram(program);
    setNestedSheetOpen(true);
  };

  return (
    <>
      <Sheet>
        <div className="flex-1 px-3 pt-3 mb-12">
          <div className="">
            <div className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <div className="">
                  <h4 className="font-medium font-ubuntu text-lg">Airline</h4>
                </div>
                <SheetTrigger asChild>
                  <Button size="sm">
                    Add flight loyalty card <Plus />
                  </Button>
                </SheetTrigger>
              </div>
            </div>

            <table className="w-full font-ubuntu text-sm table-auto mt-2  border-separate border-spacing-y-2">
              <tbody className="mt-4">
                <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                  <td className="px-4 py-1.5 text-[#2A2B2F]">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/gift-card.png"
                        height={30}
                        width={50}
                        alt="American Express"
                      />
                      <p>Marriott Bonvoy</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">000406310</td>
                  <td className="px-4 py-3 text-[#2A2B2F]">seyad ashraf </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">
                    <div className="flex gap-3">
                      <button>
                        <SquarePen className="h-4.5 w-4.5 text-[#316DB4]" />
                      </button>
                      <button>
                        <Trash2 className="h-4.5 w-4.5 text-[#FF5050]" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                  <td className="px-4 py-1.5 text-[#2A2B2F]">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/gift-card.png"
                        height={30}
                        width={50}
                        alt="American Express"
                      />
                      <p>Marriott Bonvoy</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">000406310</td>
                  <td className="px-4 py-3 text-[#2A2B2F]">seyad ashraf </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">
                    <div className="flex gap-3">
                      <button>
                        <SquarePen className="h-4.5 w-4.5 text-[#316DB4]" />
                      </button>
                      <button>
                        <Trash2 className="h-4.5 w-4.5 text-[#FF5050]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <div className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <div className="">
                  <h4 className="font-medium font-ubuntu text-lg">Hotel</h4>
                  <p className="text-sm font-raleway font-medium">
                    Make sure your name and loyalty number matches the
                    information on your existing loyalty program profile
                  </p>
                </div>
                <SheetTrigger asChild>
                  <Button size="sm">
                    Add hotel loyalty card <Plus />
                  </Button>
                </SheetTrigger>
              </div>
            </div>

            <table className="w-full font-ubuntu text-sm table-auto mt-2  border-separate border-spacing-y-2">
              <tbody className="mt-4">
                <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                  <td className="px-4 py-1.5 text-[#2A2B2F]">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/gift-card.png"
                        height={30}
                        width={50}
                        alt="American Express"
                      />
                      <p>Marriott Bonvoy</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">000406310</td>
                  <td className="px-4 py-3 text-[#2A2B2F]">seyad ashraf </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">
                    <div className="flex gap-3">
                      <button>
                        <SquarePen className="h-4.5 w-4.5 text-[#316DB4]" />
                      </button>
                      <button>
                        <Trash2 className="h-4.5 w-4.5 text-[#FF5050]" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                  <td className="px-4 py-1.5 text-[#2A2B2F]">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/gift-card.png"
                        height={30}
                        width={50}
                        alt="American Express"
                      />
                      <p>Marriott Bonvoy</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">000406310</td>
                  <td className="px-4 py-3 text-[#2A2B2F]">seyad ashraf </td>
                  <td className="px-4 py-3 text-[#2A2B2F]">
                    <div className="flex gap-3">
                      <button>
                        <SquarePen className="h-4.5 w-4.5 text-[#316DB4]" />
                      </button>
                      <button>
                        <Trash2 className="h-4.5 w-4.5 text-[#FF5050]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <div className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <div className="">
                  <h4 className="font-medium font-ubuntu text-lg">Trains</h4>
                </div>
                <SheetTrigger asChild>
                  <Button size="sm">
                    Add trains loyalty card <Plus />
                  </Button>
                </SheetTrigger>
              </div>
            </div>

            <div className="bg-[#F7F9FC] flex items-center justify-center py-8 mt-4">
              <p className="text-[#2A2B2F] font-ubuntu">
                No loyalty or card added
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <div className="">
                  <h4 className="font-medium font-ubuntu text-lg">
                    Car rentals
                  </h4>
                </div>
                <SheetTrigger asChild>
                  <Button size="sm">
                    Add car loyalty card <Plus />
                  </Button>
                </SheetTrigger>
              </div>
            </div>

            <div className="bg-[#F7F9FC] flex items-center justify-center py-8 mt-4">
              <p className="text-[#2A2B2F] font-ubuntu">
                No loyalty or card added
              </p>
            </div>
          </div>

          {/*  */}
          <div className="pb-2 border-b mt-6">
            <div className="flex justify-between items-center">
              <div className="">
                <h4 className="font-medium font-ubuntu text-lg">
                  Airline credit
                </h4>
              </div>
            </div>
          </div>

          <table className="w-full font-ubuntu text-sm table-auto mt-2  border-separate border-spacing-y-2">
            <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
              <tr className="px-4">
                <td className="px-4 py-1.5 pr-[3rem] text-[#2A2B2F]">
                  Airline name
                </td>
                <td className="px-4 py-1.5 pr-[4rem] text-[#2A2B2F]">Credit</td>
                <td className="px-4 py-1.5 text-[#2A2B2F]">Details</td>
              </tr>
            </thead>
            <tbody className="mt-4">
              <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                <td className="px-4 py-1.5 pr-[3rem] text-[#2A2B2F]">
                  <div className="flex gap-3">
                    <Image
                      src="/japan-airline.png"
                      height={30}
                      width={50}
                      alt="American Express"
                    />
                    <p className="text-nowrap">Japan airlines</p>
                  </div>
                </td>
                <td className="px-4 py-3 pr-[4rem] text-[#5E6369]">
                  10,00,000
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  Earn miles, enjoy perks, and travel more with Airlines
                  Credit—your gateway to exclusive rewards and flight benefits.
                </td>
              </tr>
              <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
                <td className="px-4 py-1.5 pr-[3rem] text-[#2A2B2F]">
                  <div className="flex gap-3">
                    <Image
                      src="/qatar-airline.png"
                      height={30}
                      width={50}
                      alt="American Express"
                    />
                    <p className="text-nowrap">Qatar airlines</p>
                  </div>
                </td>
                <td className="px-4 py-3 pr-[4rem] text-[#5E6369]">5,00,000</td>
                <td className="px-4 py-3 text-[#5E6369]">
                  Earn miles, enjoy perks, and travel more with Airlines
                  Credit—your gateway to exclusive rewards and flight benefits.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <LoyaltyCardSheet handleAddClick={handleAddClick} />
      </Sheet>
      <AddLoyaltyCardDetailsSheet
        program={selectedProgram}
        isOpen={nestedSheetOpen}
        onClose={() => setNestedSheetOpen(false)}
      />
    </>
  );
}
