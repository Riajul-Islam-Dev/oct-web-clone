"use client";

import { motion } from "motion/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { PopoverClose } from "@radix-ui/react-popover";
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Search,
  Trash2,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { useMemo, useState } from "react";
import { userRoleData } from "@/utils/helperData";

const statusStyles = {
  System: "text-[#EDA92C]",
  Company: " text-[#316DB4]",
};

export default function RolePermissionTable() {
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
    return userRoleData.filter(
      (item) =>
        item.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.permissionsSummary
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.roleType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase())
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
      if (sortConfig.key === "roleName") {
        aValue = a.roleName;
        bValue = b.roleName;
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
      <div className="relative mb-3 bg-white shadow-[0px_4px_30px_0px_#0000000F]">
        <button className="absolute left-2.5 top-3.5 cursor-pointer">
          <Search className="h-3.5 w-3.5 text-[#3A75BA]" />
        </button>
        <Input
          className="rounded-sm pl-9 flex items-center"
          placeholder="Search User..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-0 top-0.5 border-l">
          <Select>
            <SelectTrigger className="rounded-sm w-full border-0">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="value1">Admin</SelectItem>
              <SelectItem value="value2">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between mb-3">
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="rounded-sm w-full bg-white shadow-[0px_4px_30px_0px_#0000000F]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="value1">Admin</SelectItem>
              <SelectItem value="value2">User</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="rounded-sm w-full bg-white shadow-[0px_4px_30px_0px_#0000000F]">
              <SelectValue placeholder="Permissions" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="value1">value1</SelectItem>
              <SelectItem value="value2">value2</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="rounded-sm w-full bg-white shadow-[0px_4px_30px_0px_#0000000F]">
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="value1">value1</SelectItem>
              <SelectItem value="value2">value2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
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
              <Button variant={"secondary"}>
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </Button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="bg-white">
        {/* Table */}
        <table className="w-full table-auto border-separate border-spacing-y-1 mb-12 font-ubuntu text-sm">
          <thead className="bg-white shadow-[0px_4px_30px_0px_#0000000F] rounded mb-2">
            <tr>
              <td className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={
                      selectedRows.size === paginatedData.length &&
                      paginatedData.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                  <div
                    className="flex items-center space-x-1"
                    onClick={() => handleSort("id")}
                  >
                    <span>RID</span>
                    {getSortIcon("id")}
                  </div>
                </div>
              </td>

              <td
                className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap"
                onClick={() => handleSort("roleName")}
              >
                <div className="flex items-center space-x-1">
                  <span>Role Name</span>
                  {getSortIcon("roleName")}
                </div>
              </td>
              <td
                className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap"
                onClick={() => handleSort("permissionsSummary")}
              >
                <div className="flex items-center space-x-1">
                  <span>Permissions Summary</span>
                  {getSortIcon("permissionsSummary")}
                </div>
              </td>
              <td
                className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap"
                onClick={() => handleSort("roleType")}
              >
                <div className="flex items-center space-x-1">
                  <span>Role Type</span>
                  {getSortIcon("roleType")}
                </div>
              </td>

              <td
                className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap"
                onClick={() => handleSort("numberOfUsers")}
              >
                <div className="flex items-center space-x-1">
                  <span>Number of users</span>
                  {getSortIcon("numberOfUsers")}
                </div>
              </td>
              <td
                className="px-4 py-1.5 text-left text-[#2A2B2F] tracking-wider cursor-pointer hover:bg-gray-100 text-nowrap"
                onClick={() => handleSort("details")}
              >
                <div className="flex items-center space-x-1">
                  <span>Details</span>
                  {getSortIcon("details")}
                </div>
              </td>

              <td className="px-4 py-1.5 pr-8 text-[#2A2B2F] tracking-wider text-center text-nowrap">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="mt-4">
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100"
              >
                <td className="px-4 py-1.5 text-[#5E6369] text-nowrap">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                    />
                    <span className="text-sm text-gray-600">{row.id}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  <div className="flex items-center">
                    <span className="text-sm text-[#5E6369]">
                      {row.roleName}
                    </span>
                    {row.isManager && (
                      <div className="bg-[#316DB4] px-2 py-1 rounded-full text-white ml-2 text-xs">
                        Manager
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="text-sm text-[#5E6369] flex items-center gap-2 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2em"
                          height="1.2em"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="#316DB4CC"
                            fillRule="evenodd"
                            d="M5.28 2.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M7.25 3h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5M5.28 7.28a.75.75 0 0 0-1.06-1.06L2.75 7.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 3.19a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M8.4 9h.1a2.5 2.5 0 0 1 5 0h.1a1.4 1.4 0 0 1 1.4 1.4v2.2a1.4 1.4 0 0 1-1.4 1.4H8.4A1.4 1.4 0 0 1 7 12.6v-2.2A1.4 1.4 0 0 1 8.4 9M11 8a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1m-2.5 2.5v2h5v-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View ({row.permissionsSummary})
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-120 p-0">
                      <div className="grid">
                        <div className="flex justify-between pt-3 pl-3.5 pr-2">
                          <div className="font-medium font-ubuntu">
                            Permissions Summary
                          </div>
                          <PopoverClose>
                            <Button className="-mt-1.5" variant={"ghost"}>
                              <X className="size-4" />
                            </Button>
                          </PopoverClose>
                        </div>

                        <div className="mb-4 border-t pt-4 mt-1 px-4">
                          <ul className="flex font-ubuntu flex-wrap justify-center gap-2">
                            <li className="bg-[#F7F9FC] py-1 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                              Travel Request Management (Basic)
                            </li>
                            <li className="bg-[#F7F9FC] py-1 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                              User Management (Full Access)
                            </li>
                            <li className="bg-[#F7F9FC] py-1 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                              Billing & Invoices (Basic)
                            </li>
                            <li className="bg-[#F7F9FC] py-1 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                              Reports & Analytics (Advance)
                            </li>
                            <li className="bg-[#F7F9FC] py-1 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                              Policy Management (Advance)
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-center border-t pt-3 pb-3">
                          <PopoverClose>
                            <Button
                              variant={"outline"}
                              className="text-[#087DC2] border-[#087DC2]"
                            >
                              Cancel
                            </Button>
                          </PopoverClose>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  <span
                    className={`text-sm ${
                      statusStyles[row.roleType as keyof typeof statusStyles]
                    }`}
                  >
                    {row.roleType}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#5E6369]">
                  <div className="flex items-center gap-0.5">
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
                    {row.numberOfUsers} User
                  </div>
                </td>
                <td className="px-4 py-3 text-[#5E6369]">{row.details}</td>
                <td className="px-4 py-3 text-[#5E6369] text-right">
                  {row.roleType !== "System" && (
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
                              Assign User
                            </MenubarItem>
                            <MenubarItem className="text-red-400">
                              Delete
                            </MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </div>
                  )}
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
    </>
  );
}
