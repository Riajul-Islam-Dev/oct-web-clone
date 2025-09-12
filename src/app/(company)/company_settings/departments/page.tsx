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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { CreateNewDepartmentSheet } from "@/components/sheet/CreateNewDepartmentSheet";
import { departmentManagerData } from "@/utils/helperData";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination
  const totalPages = Math.ceil(departmentManagerData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = departmentManagerData.slice(
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
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-ubuntu">Departments Management</h4>
          <SheetTrigger asChild>
            <Button size={"sm"}>
              <Plus />
              Add New Department
            </Button>
          </SheetTrigger>
        </div>

        <div className="">
          {/* Table */}
          <table className="w-full table-auto border-separate border-spacing-y-1 mb-12 font-ubuntu text-sm">
            <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
              <tr className="px-4">
                <td className="px-4 py-1.5 text-[#2A2B2F]">Department Name</td>
                <td className="px-4 py-1.5 text-[#2A2B2F]">Assigned Users</td>
                <td className="px-4 py-1.5 text-[#2A2B2F]">
                  Assigned Travel Managers
                </td>
                <td className="px-4 py-1.5 text-[#2A2B2F]">Activation</td>
                <td className="px-4 py-1.5 text-[#2A2B2F] text-center">
                  Quick Actions
                </td>
              </tr>
            </thead>
            <tbody className="mt-4">
              {paginatedData.map((row) => (
                <tr
                  key={row.departmentName}
                  className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100"
                >
                  <td className="px-4 py-1.5 text-[#5E6369]">
                    {row.departmentName}
                  </td>
                  <td className="px-4 py-3 text-[#5E6369]">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#316DB4"
                          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                        />
                      </svg>
                      {row.assignedUsers} user
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369]">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      {row.managers.map((each) => (
                        <Avatar key={each}>
                          <AvatarImage src={`${each}`} alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369]">
                    <div className="flex gap-2 text-sm items-center">
                      <Switch
                        checked={row.activation}
                        className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
                      />
                      {row.activation ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#5E6369] flex justify-center">
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
                            Assign travel manager
                          </MenubarItem>
                          <MenubarItem className="text-red-400">
                            Delete
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
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
      </div>
      <CreateNewDepartmentSheet />
    </Sheet>
  );
}
