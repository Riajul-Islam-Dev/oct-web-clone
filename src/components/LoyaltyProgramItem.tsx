import Image from "next/image";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type LoyaltyProgramItemProps = {
  program: { image: string; name: string; type: string };
  handleAddClick: () => void;
};

export function LoyaltyProgramItem({
  program,
  handleAddClick,
}: LoyaltyProgramItemProps) {
  return (
    <div className="border-t pb-3 pt-3">
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
        <SheetTrigger asChild>
          <Button
            onClick={handleAddClick}
            className="border-[#316DB4] text-[#316DB4]"
            variant={"outline"}
          >
            Add
          </Button>
        </SheetTrigger>
      </div>
    </div>
  );
}
