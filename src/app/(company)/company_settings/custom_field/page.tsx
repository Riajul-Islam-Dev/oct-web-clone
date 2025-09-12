"use client";

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { customFieldManageData } from "@/utils/helperData";
import { AddNewCustomFieldSheet } from "@/components/sheet/AddNewCustomFieldSheet";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination
  const totalPages = Math.ceil(customFieldManageData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = customFieldManageData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Sheet>
      {/* TODO: fix sheet content */}
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-ubuntu">Custom Field Management</h4>
          <SheetTrigger asChild>
            <Button size={"sm"}>
              <Plus />
              Add New Field
            </Button>
          </SheetTrigger>
        </div>

        <table className="w-full table-auto border-separate border-spacing-y-1 mb-12 font-ubuntu text-sm">
          <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
            <tr className="px-4">
              <td className="px-4 py-1.5 text-[#2A2B2F]">Applies To</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Field Name</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Field Type</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Field Option</td>
              <td className="px-4 py-1.5 text-[#2A2B2F]">Required</td>
              <td className="px-4 py-1.5 text-[#2A2B2F] text-center">
                Quick Actions
              </td>
            </tr>
          </thead>
          <tbody className="mt-4">
            {paginatedData.map((row) => (
              <tr
                key={row.for}
                className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100"
              >
                <td className="px-4 py-1.5 text-[#5E6369]">{row.for}</td>
                <td className="px-4 py-3 text-[#5E6369]">{row.name}</td>
                <td className="px-4 py-3 text-[#5E6369]">{row.type}</td>
                <td className="px-4 py-3 text-[#5E6369] underline">
                  {row.options}
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  <div className="flex gap-2 text-sm items-center">
                    <Switch
                      checked={row.isRequired}
                      className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 text-[#5E6369] text-right">
                  <div className="flex justify-center">
                    <Menubar className="border-0 p-0 h-auto shadow-none">
                      <MenubarMenu>
                        <MenubarTrigger>
                          <MoreHorizontal className="w-4 h-4" />
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem className="text-[#316DB4]">
                            Edit
                          </MenubarItem>
                          <MenubarItem className="text-[#316DB4]">
                            Approve
                          </MenubarItem>
                          <MenubarItem className="text-red-400">
                            Delete
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}

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
      </div>
      <AddNewCustomFieldSheet />
    </Sheet>
  );
}
