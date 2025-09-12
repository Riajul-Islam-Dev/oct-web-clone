"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface CreateRestrictedDestinationsSheetProps {
  onClose?: () => void;
}

export function CreateRestrictedDestinationsSheet({ onClose }: CreateRestrictedDestinationsSheetProps) {
  const [selectedRestriction, setSelectedRestriction] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ selectedRestriction });
    if (onClose) onClose();
  };

  return (
    <SheetContent className="min-w-[630px]">
      <SheetHeader>
        <SheetTitle className="text-[#393939] text-lg font-medium tracking-wide">CREATE NEW RESTRICTED DESTINATIONS POLICY</SheetTitle>
      </SheetHeader>
      <ScrollArea className="h-screen">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Destinations Type */}
              <div>
                <label className="block text-[#393939] text-sm font-medium mb-2">
                  Destinations Type <span className="text-[#393939]">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-[#f3f4f6] border border-[#e2e8f0] rounded-md px-4 py-3 text-[#393939] appearance-none focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent">
                    <option>Continents</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6369]" size={16} />
                </div>
              </div>

              {/* Continents */}
              <div>
                <label className="block text-[#393939] text-sm font-medium mb-2">
                  Continents <span className="text-[#393939]">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-[#f3f4f6] border border-[#e2e8f0] rounded-md px-4 py-3 text-[#899ab2] appearance-none focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent">
                    <option>Select Continents</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6369]" size={16} />
                </div>
              </div>

              {/* Restriction Options */}
              <div>
                <h3 className="text-[#393939] text-base font-medium mb-4">Which restriction do you want to apply?</h3>

                <div className="space-y-4">
                  {/* Block all travel */}
                  <div className="flex items-start space-x-3">
                    <div className="relative mt-1">
                      <input
                        type="radio"
                        id="block-all"
                        name="restriction"
                        value="block-all"
                        checked={selectedRestriction === "block-all"}
                        onChange={(e) => setSelectedRestriction(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedRestriction === "block-all" ? "border-[#316db4] bg-[#316db4]" : "border-[#b4b4b4] bg-white"
                        }`}
                      >
                        {selectedRestriction === "block-all" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    <label htmlFor="block-all" className="text-[#393939] text-sm cursor-pointer">
                      Block all travel
                    </label>
                  </div>

                  {/* Allow travel only within continent */}
                  <div className="flex items-start space-x-3">
                    <div className="relative mt-1">
                      <input
                        type="radio"
                        id="allow-within"
                        name="restriction"
                        value="allow-within"
                        checked={selectedRestriction === "allow-within"}
                        onChange={(e) => setSelectedRestriction(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedRestriction === "allow-within"
                            ? "border-[#316db4] bg-[#316db4]"
                            : "border-[#b4b4b4] bg-white"
                        }`}
                      >
                        {selectedRestriction === "allow-within" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="allow-within" className="text-[#393939] text-sm cursor-pointer block">
                        Allow travel only within the continent
                      </label>
                      <p className="text-[#899ab2] text-xs mt-1">
                        Traversers and tips outside of the selected continent wil be: blocked from booking.
                      </p>
                    </div>
                  </div>

                  {/* Allow travel based on policy group */}
                  <div className="flex items-start space-x-3">
                    <div className="relative mt-1">
                      <input
                        type="radio"
                        id="allow-policy"
                        name="restriction"
                        value="allow-policy"
                        checked={selectedRestriction === "allow-policy"}
                        onChange={(e) => setSelectedRestriction(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedRestriction === "allow-policy"
                            ? "border-[#316db4] bg-[#316db4]"
                            : "border-[#b4b4b4] bg-white"
                        }`}
                      >
                        {selectedRestriction === "allow-policy" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="allow-policy" className="text-[#393939] text-sm cursor-pointer block">
                        Allow travel based on policy group
                      </label>
                      <p className="text-[#899ab2] text-xs mt-1">
                        Travelers that aren't in the selected policy group will be blocked from booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message for blocked travelers */}
              <div>
                <h3 className="text-[#393939] text-base font-medium mb-4">Message for blocked travelers</h3>
              </div>

              {/* Reason for block */}
              <div>
                <label className="block text-[#393939] text-sm font-medium mb-2">Reason for block (optional)</label>
                <textarea
                  placeholder="Type reason"
                  className="w-full bg-[#f3f4f6] border border-[#e2e8f0] rounded-md px-4 py-3 text-[#393939] placeholder-[#899ab2] resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
                />
              </div>

              {/* URL for Learn more link */}
              <div>
                <label className="block text-[#393939] text-sm font-medium mb-2">URL for 'Learn more' link (optional)</label>
                <input
                  type="text"
                  placeholder="https://fyourlink.com/"
                  className="w-full bg-[#f3f4f6] border border-[#e2e8f0] rounded-md px-4 py-3 text-[#393939] placeholder-[#899ab2] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="px-8 py-2 bg-[#eda92c] hover:bg-[#d49429] text-white border-[#eda92c] hover:border-[#d49429] rounded-full font-medium"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="px-8 py-2 bg-[#316db4] hover:bg-[#2a5a96] text-white rounded-full font-medium"
                >
                  Add
                </Button>
              </div>
            </div>
          </form>
        </div>
      </ScrollArea>
    </SheetContent>
  );
}