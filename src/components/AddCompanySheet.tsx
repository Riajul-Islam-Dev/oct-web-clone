import AddCompanyMultiStepForm from "./AddCompanyMultiStepForm";
import { ScrollArea } from "@/components/ui/scroll-area";

import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function AddCompanySheet() {
  return (
    <SheetContent className="min-w-[550px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>ADD COMPANY</SheetTitle>
        </SheetHeader>

        <div className="mx-5">
          <AddCompanyMultiStepForm />
        </div>
      </ScrollArea>
    </SheetContent>
  );
}
