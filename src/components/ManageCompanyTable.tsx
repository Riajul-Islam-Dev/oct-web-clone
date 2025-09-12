"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import {
  ChevronUp,
  ChevronDown,
  Search,
  MoreHorizontal,
  Plus,
  Trash,
  Activity,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { AddCompanySheet } from "./AddCompanySheet";
import { companyListForManageData } from "@/utils/helperData";
import Link from "next/link";

type StatusType = "Active" | "Inactive" | "Pending" | "Approved";

const StatusBadge = ({ status }: { status: StatusType }) => {
  const statusStyles: Record<StatusType, string> = {
    Active: "bg-[#B9FFD5] text-[#0DBC53]",
    Inactive: "bg-[#B9FFD5] text-[#0DBC53]",
    Pending: "bg-[#FF2525] text-white",
    Approved: "bg-[#008000] text-white",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default function ManageCompanyTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Filtering
  const filteredData = useMemo(() => {
    return companyListForManageData.filter(
      (item) =>
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.contactPerson.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.contactPerson.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      let aValue;
      let bValue;
      if (sortConfig.key) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        aValue = a[sortConfig.key];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        bValue = b[sortConfig.key];
      } else {
        aValue = "";
        bValue = "";
      }

      // Handle nested contact person data
      if (sortConfig.key === "contactPerson") {
        aValue = a.contactPerson.name;
        bValue = b.contactPerson.name;
      }

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((item) => item.id)));
    }
  };

  const handleSelectRow = (id: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <div className="w-4 h-4" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-gray-400" />
    ) : (
      <ChevronDown className="w-4 h-4 text-gray-400" />
    );
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <Sheet>
        <div className="mt-6 flex gap-3.5">
          <div className="relative mb-3 flex-1 ">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 rounded-sm"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-3 text-[#316DB4] h-3.5 w-3.5" />
          </div>

          <Button variant={"secondary"}>
            <Search className="h-3.5 w-3.5" />
            Search
          </Button>

          <SheetTrigger asChild>
            <Button variant={"tertiary"}>
              <Plus className="h-3.5 w-3.5" />
              Add Company
            </Button>
          </SheetTrigger>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-ubuntu">COMPANY LIST</p>
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="rounded-sm w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="value1">Value 1</SelectItem>
                <SelectItem value="value2">Value 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-sm w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="value1">Value 1</SelectItem>
                <SelectItem value="value2">Value 2</SelectItem>
              </SelectContent>
            </Select>

            {selectedRows.size > 0 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  duration: 0.4,
                }}
              >
                <Button>
                  <Trash className="h-3.5 w-3.5" />
                  Delete
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white">
          {/* Table */}
          <div className="bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full font-ubuntu divide-y divide-gray-200">
                <thead className=".bg-gray-50">
                  <tr className=" ">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={
                          selectedRows.size === paginatedData.length &&
                          paginatedData.length > 0
                        }
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("id")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>COMID</span>
                        {getSortIcon("id")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("companyName")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Company Name</span>
                        {getSortIcon("companyName")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("website")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Website</span>
                        {getSortIcon("website")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("country")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Country</span>
                        {getSortIcon("country")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("contactPerson")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Contact Person</span>
                        {getSortIcon("contactPerson")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("totalUsers")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Total Users</span>
                        {getSortIcon("totalUsers")}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-[#18181A] uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("status")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Status</span>
                        {getSortIcon("status")}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-[#18181A] uppercase tracking-wider text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {paginatedData.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`hover:bg-gray-50 ${
                        index < paginatedData.length - 1
                          ? "border-b-6 border-[#F7F9FC]"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={selectedRows.has(row.id)}
                          onChange={() => handleSelectRow(row.id)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{row.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {row.companyName}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={`https://${row.website}`}
                          className="text-sm text-blue-600 hover:text-blue-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.website}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-700">
                          {row.country}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <Image
                              src={row.contactPerson.avatar}
                              height={35}
                              width={35}
                              className="rounded-full"
                              alt="avatar"
                              unoptimized
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {row.contactPerson.name}
                            </div>
                            <div className="text-sm font-raleway text-[#5E6369]">
                              {row.contactPerson.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {row.totalUsers}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={row.status as StatusType} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex">
                          <Menubar className="border-0 bg-transparent hover:bg-white shadow-none p-0 h-auto w-auto w-fit">
                            <MenubarMenu>
                              <MenubarTrigger>
                                <MoreHorizontal className="w-4 h-4" />
                              </MenubarTrigger>
                              <MenubarContent>
                                <MenubarItem>Edit</MenubarItem>
                                <MenubarItem>Active </MenubarItem>

                                <MenubarItem>Inactive</MenubarItem>

                                <MenubarItem>Approve</MenubarItem>
                                <MenubarItem>Delete</MenubarItem>
                                <MenubarItem className="text-red-400">
                                  Pending
                                </MenubarItem>
                              </MenubarContent>
                            </MenubarMenu>
                          </Menubar>
                          <Button className="hover:bg-white" variant={"ghost"}>
                            <Activity className="size-4" />
                          </Button>
                          <Link href={"/manage_company/activity"}>
                            <Button
                              className="hover:bg-white"
                              variant={"ghost"}
                            >
                              <svg
                                className="size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zm0-1h12.769q.269 0 .442-.173t.173-.442V7H5v11.385q0 .269.173.442t.443.173M12 16q-1.627 0-2.932-.834Q7.763 14.333 7.096 13q.667-1.333 1.972-2.166Q10.373 10 12 10t2.932.834T16.904 13q-.667 1.333-1.972 2.166Q13.627 16 12 16m-.004-1.884q-.467 0-.79-.327q-.321-.327-.321-.793q0-.467.326-.79q.327-.321.793-.321q.467 0 .79.326q.322.327.322.793q0 .467-.327.79q-.327.322-.793.322m.004.769q.78 0 1.333-.552T13.885 13t-.552-1.333q-.552-.552-1.333-.552t-1.333.552T10.115 13t.552 1.333t1.333.552"
                                />
                              </svg>
                            </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        );
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
        <AddCompanySheet />
      </Sheet>
    </>
  );
}
