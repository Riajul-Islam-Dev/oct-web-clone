import AddPaymentMethodsSheet from "@/components/sheet/AddPaymentMethodsSheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <Sheet>
      <div className="flex-1 px-3 pt-3">
        <div className="pb-2 border-b">
          <div className="flex justify-between items-center">
            <div className="">
              <h4 className="font-medium font-ubuntu text-lg">
                My personal cards
              </h4>
              <p className="text-sm font-raleway font-medium">
                Add your personal cards to pay for leisure travel or business
                travel when your company allows it.
              </p>
            </div>
            <SheetTrigger asChild>
              <Button size="sm">
                Add personal card <Plus />
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <table className="w-full font-ubuntu text-sm table-auto mt-2  border-separate border-spacing-y-2">
          <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
            <tr className="px-4">
              <td className="px-4 py-1.5 text-[#2A2B2F]">Logo</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Card Nickname</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Priority</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Card Number</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Activity</td>
            </tr>
          </thead>
          <tbody className="mt-4">
            <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
              <td className="px-4 py-1.5 text-[#2A2B2F]">
                <Image
                  src="/amex-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Amex - 559</td>
              <td className="px-4 py-3 text-[#2A2B2F]">----------</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6559</td>
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
              <td className="px-4 py-3 text-[#2A2B2F]">
                <Image
                  src="/master-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Master Card - 658</td>
              <td className="px-4 py-3 text-[#2A2B2F]">Default</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6658</td>
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
                <Image
                  src="/amex-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Amex - 559</td>
              <td className="px-4 py-3 text-[#2A2B2F]">----------</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6559</td>
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

        <div className="pb-2 border-b mt-6">
          <div className="flex justify-between items-center">
            <div className="">
              <h4 className="font-medium font-ubuntu text-lg">
                My corporate cards
              </h4>
              <p className="text-sm font-raleway font-medium">
                Add any corporate cards issued to you by your company
              </p>
            </div>
            <SheetTrigger asChild>
              <Button size="sm">
                Add corporate card <Plus />
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <table className="w-full font-ubuntu text-sm table-auto mt-2  border-separate border-spacing-y-2">
          <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
            <tr className="px-4">
              <td className="px-4 py-1.5 text-[#2A2B2F]">Logo</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Card Nickname</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Priority</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Card Number</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Activity</td>
            </tr>
          </thead>
          <tbody className="mt-4">
            <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white">
              <td className="px-4 py-1.5 text-[#2A2B2F]">
                <Image
                  src="/amex-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Amex - 559</td>
              <td className="px-4 py-3 text-[#2A2B2F]">----------</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6559</td>
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
              <td className="px-4 py-3 text-[#2A2B2F]">
                <Image
                  src="/master-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Master Card - 658</td>
              <td className="px-4 py-3 text-[#2A2B2F]">Default</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6658</td>
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
                <Image
                  src="/amex-card-logo.png"
                  height={30}
                  width={50}
                  alt="American Express"
                />
              </td>
              <td className="px-4 py-3 text-[#2A2B2F]">Amex - 559</td>
              <td className="px-4 py-3 text-[#2A2B2F]">----------</td>
              <td className="px-4 py-3 text-[#2A2B2F]">5555-888826-6559</td>
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

        <div className="pb-2 border-b mt-6">
          <h4 className="font-medium font-ubuntu text-lg">Company Cards</h4>
          <p className="text-sm font-raleway font-medium">
            These company cards are available for you to use when you book
            business travel.
          </p>
        </div>

        <div className="mt-3 mb-12">
          <div className="bg-white shadow-[0px_4px_30px_0px_#0000000F] px-4 py-3">
            <div className="flex items-center">
              <Image
                src="/travel-card.png"
                height={15}
                width={40}
                alt="travel card"
              />
              <p className="ml-3 text-[#5E6369] font-ubuntu text-sm">
                GRSM50 Payments Card
              </p>
            </div>
          </div>
        </div>
      </div>
      <AddPaymentMethodsSheet />
    </Sheet>
  );
}
