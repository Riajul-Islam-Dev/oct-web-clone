"use client";

import React, { useState, useEffect } from "react";
import { CreateNewOfficeSheet } from "@/components/sheet/CreateNewOfficeSheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { paymentMethodManageData } from "@/utils/helperData";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const totalPages = Math.max(
    1,
    Math.ceil(paymentMethodManageData.length / itemsPerPage)
  );

  // reset current page if total pages decreased
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const getPageNumbers = () => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  };

  return (
    <Sheet>
      <div className="px-4 py-4 flex-1 w-full overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-ubuntu">Payment Method Management</h4>
          <SheetTrigger asChild>
            <Button size={"sm"}>
              <Plus />
              Add Payment Method
            </Button>
          </SheetTrigger>
        </div>

        {/* Table */}

        <div className="relative">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table
              className="border-separate border-spacing-y-1 font-ubuntu text-sm bg-gray-50 w-full"
              style={{ minWidth: "1400px" }}
            >
              <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
                <tr>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[250px]">
                    Cardholder Name
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[120px]">
                    Expiration
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[120px]">
                    Department
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[120px]">
                    Costcenter
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[100px]">
                    Region
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[120px]">
                    Subsidiary
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[120px]">
                    Legalentity
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[100px]">
                    Flights
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[100px]">
                    Hotels
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[100px]">
                    Trains
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[100px]">
                    Cars
                  </td>
                  <td className="px-4 py-3 text-[#2A2B2F]  whitespace-nowrap min-w-[200px]">
                    Available for guest invite & event
                  </td>
                </tr>
              </thead>
              <tbody className="mt-4">
                <tr className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
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
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    -----
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap text-center">
                    <Select>
                      <SelectTrigger className="rounded-sm w-full">
                        <SelectValue placeholder="Prioritized" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="value1">Prioritized</SelectItem>
                        <SelectItem value="value2">Not Available</SelectItem>
                        <SelectItem value="value3">Value 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap text-center">
                    <Select>
                      <SelectTrigger className="rounded-sm w-full">
                        <SelectValue placeholder="Prioritized" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="value1">Prioritized</SelectItem>
                        <SelectItem value="value2">Not Available</SelectItem>
                        <SelectItem value="value3">Value 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap text-center">
                    <Select>
                      <SelectTrigger className="rounded-sm w-full">
                        <SelectValue placeholder="Prioritized" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="value1">Prioritized</SelectItem>
                        <SelectItem value="value2">Not Available</SelectItem>
                        <SelectItem value="value3">Value 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap text-center">
                    <Select>
                      <SelectTrigger className="rounded-sm w-full">
                        <SelectValue placeholder="Prioritized" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="value1">Prioritized</SelectItem>
                        <SelectItem value="value2">Not Available</SelectItem>
                        <SelectItem value="value3">Value 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] whitespace-nowrap">
                    <input
                      id="bordered-checkbox-2"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none rounded-r-lg"></div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 mb-10">
            <Pagination className="text-[#5E6369]">
              <PaginationContent className="justify-between w-full">
                <PaginationItem aria-disabled={true}>
                  <PaginationPrevious
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                    }}
                    aria-disabled={currentPage <= 1}
                    tabIndex={currentPage <= 1 ? -1 : undefined}
                    className={
                      currentPage <= 1
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    href="#"
                  />
                </PaginationItem>

                <div className="flex gap-2 font-ubuntu font-medium">
                  {getPageNumbers().map((pageNum) => (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNum);
                        }}
                        isActive={pageNum === currentPage}
                        href="#"
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </div>

                <PaginationItem>
                  <PaginationNext
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    }}
                    aria-disabled={currentPage >= totalPages}
                    tabIndex={currentPage >= totalPages ? -1 : undefined}
                    className={
                      currentPage >= totalPages
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    href="#"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
      <CreateNewOfficeSheet />
    </Sheet>
  );
}
