"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Search, Check, AlertTriangle, Plus, ChevronDown } from "lucide-react";

import Image from "next/image";
import { Notification, Sms } from "iconsax-reactjs";
import SidebarTriggerClient from "@/components/SidebarTriggerClient";
import { useState } from "react";
import { employeeDataForManage } from "@/utils/helperData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet } from "@/components/ui/sheet";
import AddNewTravelerToUserManagementSheet from "@/components/sheet/AddNewTravelerToUserManagementSheet";
import InviteNewUserToUserManagementSheet from "@/components/sheet/InviteNewUserToUserManagementSheet";
import UploadUsersToUserManagementSheet from "@/components/sheet/UploadUsersToUserManagementSheet";
import Link from "next/link";

export default function Page() {
  const [activeSheet, setActiveSheet] = useState<
    "add" | "invite" | "upload" | null
  >(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalPages = Math.ceil(employeeDataForManage.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = employeeDataForManage.slice(
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
  const [selectedRows, setSelectedRows] = useState(new Set());
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuItemClick = (sheetType: "add" | "invite" | "upload") => {
    setActiveSheet(sheetType);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b py-2 w-full">
        <div className="flex items-center">
          <SidebarTriggerClient />
          <h3 className="uppercase font-semibold">Manage Company</h3>
        </div>
        <div className="mr-5 flex items-center gap-4">
          <Button className="bg-[#F5FAFD] p-2 rounded-full h-8 w-8 hover:bg-[#e1f1fa]  ">
            <Notification color="#087DC2" size={16} />
          </Button>

          <Image
            className="rounded-full"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt="avatar"
            height={32}
            width={32}
            unoptimized
          />
        </div>
      </div>

      <div className="">
        <div className="bg-white m-5 mb-10 rounded-md shadow-[0px_4px_73px_0px_#3A75BA33]">
          <div className="px-4 py-4 ">
            <div className="mb-5">
              <h4 className=" font-ubuntu">AGENCY OVERVIEW</h4>
              <div className="flex gap-3 mt-3">
                <div className="bg-[#FFF7E9] rounded p-3 border-l-2 border-[#316DB4] flex-1">
                  <div className="flex .items-center gap-2 justify-between">
                    <div className="">
                      <p className="font-raleway text-sm">office</p>
                      <p className="font-medium font-ubuntu text-xl mb-1">56</p>
                      <Link
                        className="text-[#316DB4] font-raleway text-sm"
                        href="#"
                      >
                        Details
                      </Link>
                    </div>
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.42 2.5V39.175H21.0867V30.84H26.0883V39.175H36.0917V2.5H19.42ZM29.4233 4.16667V7.5H26.09V4.16667H29.4233ZM29.4233 12.5017H26.09V9.16833H29.4233V12.5017ZM29.4233 17.5033H26.09V14.17H29.4233V17.5033ZM29.4233 22.5033H26.09V19.17H29.4233V22.5033ZM29.4233 27.505H26.09V24.1717H29.4233V27.505ZM21.0867 4.16667H24.42V7.5H21.0867V4.16667ZM21.0867 9.16667H24.42V12.5017H21.0867V9.16667ZM21.0867 14.17H24.42V17.5033H21.0867V14.17ZM21.0867 19.17H24.42V22.5033H21.0867V19.17ZM21.0867 24.1717H24.42V27.505H21.0867V24.1717ZM34.4233 35.8417H27.7567V30.84H34.4233V35.8417ZM34.4233 27.505H31.09V24.1717H34.4233V27.505ZM34.4233 22.505H31.09V19.1717H34.4233V22.505ZM34.4233 17.5033H31.09V14.17H34.4233V17.5033ZM34.4233 12.5033H31.09V9.16667H34.4233V12.5033ZM34.4233 7.50167H31.09V4.16833H34.4233V7.50167ZM2.75 14.1683V39.175H7.75V32.5067H12.7517V39.1733H17.7533V14.17L2.75 14.1683ZM4.41667 15.835H9.41667V19.17H4.41667V15.835ZM4.41667 20.8367H9.41667V24.17H4.41667V20.8367ZM4.41667 29.1717V25.8383H9.41667V29.1717H4.41667ZM16.0867 29.1717H11.0867V25.8383H16.0867V29.1717ZM16.0867 24.1717H11.0867V20.8383H16.0867V24.1717ZM16.0867 19.1717H11.0867V15.835H16.0867V19.1717Z"
                        fill="#316DB4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-[#DADAFF] rounded p-3 border-l-2 border-[#EDA92C] flex-1">
                  <div className="flex .items-center gap-2 justify-between">
                    <div className="">
                      <p className="font-raleway text-sm">Department</p>
                      <p className="font-medium font-ubuntu text-xl mb-1">
                        126
                      </p>
                      <Link
                        className="text-[#316DB4] font-raleway text-sm"
                        href="#"
                      >
                        Details
                      </Link>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.5rem"
                      height="2.5rem"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="#316DB4"
                          d="M15 6a3 3 0 0 1-2 2.83V11h3a3 3 0 0 1 3 3v1.17a3.001 3.001 0 1 1-2 0V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1.17a3.001 3.001 0 1 1-2 0V14a3 3 0 0 1 3-3h3V8.83A3.001 3.001 0 1 1 15 6m-3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="bg-[#B3DEB4] rounded p-3 border-l-2 border-[#316DB4] flex-1">
                  <div className="flex .items-center gap-2 justify-between">
                    <div className="">
                      <p className="font-raleway text-sm">User</p>
                      <p className="font-medium font-ubuntu text-xl mb-1">
                        126
                      </p>
                      <Link
                        className="text-[#316DB4] font-raleway text-sm"
                        href="#"
                      >
                        Details
                      </Link>
                    </div>
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_819_2252)">
                        <path
                          d="M20.25 0.00022544C19.0063 -0.0295162 17.7692 0.189767 16.6114 0.645175C15.4537 1.10058 14.3987 1.78292 13.5085 2.65205C12.6184 3.52118 11.911 4.55955 11.4281 5.70607C10.9451 6.8526 10.6963 8.08413 10.6963 9.32823C10.6963 10.5723 10.9451 11.8039 11.4281 12.9504C11.911 14.0969 12.6184 15.1353 13.5085 16.0044C14.3987 16.8735 15.4537 17.5559 16.6114 18.0113C17.7692 18.4667 19.0063 18.686 20.25 18.6562C21.4938 18.686 22.7309 18.4667 23.8887 18.0113C25.0464 17.5559 26.1014 16.8735 26.9915 16.0044C27.8817 15.1353 28.5891 14.0969 29.072 12.9504C29.555 11.8039 29.8038 10.5723 29.8038 9.32823C29.8038 8.08413 29.555 6.8526 29.072 5.70607C28.5891 4.55955 27.8817 3.52118 26.9915 2.65205C26.1014 1.78292 25.0464 1.10058 23.8887 0.645175C22.7309 0.189767 21.4938 -0.0295162 20.25 0.00022544ZM14.9167 23.9842C12.4414 23.9842 10.0674 24.9676 8.31704 26.7179C6.5667 28.4682 5.58337 30.8422 5.58337 33.3176V39.9762H34.9167V33.3176C34.9167 30.8422 33.9334 28.4682 32.183 26.7179C30.4327 24.9676 28.0587 23.9842 25.5834 23.9842H14.9167Z"
                          fill="#316DB4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_819_2252">
                          <rect
                            width="40"
                            height="40"
                            fill="white"
                            transform="translate(0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#FECABC] rounded p-3 border-l-2 border-[#316DB4] flex-1">
                  <div className="flex .items-center gap-2 justify-between">
                    <div className="">
                      <p className="font-raleway text-sm">Complete Trip</p>
                      <p className="font-medium font-ubuntu text-xl mb-1">
                        126
                      </p>
                      <Link
                        className="text-[#316DB4] font-raleway text-sm"
                        href="#"
                      >
                        Details
                      </Link>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_819_2270"
                        // style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="5"
                        width="36"
                        height="33"
                      >
                        <path
                          d="M7.50004 19.9998L4.16671 16.6665C4.16671 16.6665 3.00004 20.6065 3.27004 22.9815C3.54004 25.3565 6.06171 27.1448 8.33338 25.8332C10.6059 24.5215 36.6667 8.33317 36.6667 8.33317L29.1667 6.6665L7.50004 19.9998Z"
                          fill="#555555"
                          stroke="white"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.6667 10.8331L8.99842 9.4873L6.66675 10.8331L12.5001 16.6665M24.1667 36.6665L20.8334 32.4998H35.0001V29.1665M26.6667 23.3331L30.0001 27.4998H15.8334V30.8331"
                          stroke="white"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </mask>
                      <g mask="url(#mask0_819_2270)">
                        <path d="M0 0H40V40H0V0Z" fill="#316DB4" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-medium font-ubuntu">
                  Users {activeSheet}
                </h4>

                <DropdownMenu
                  open={dropdownOpen}
                  onOpenChange={setDropdownOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <Button size={"sm"}>
                      <Plus /> Add users
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="space-y-1 font-raleway">
                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("add")}
                      className="bg-[#F7F9FC] cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#316DB4"
                            d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"
                          />
                        </svg>
                        Add New User
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("invite")}
                      className="bg-[#F7F9FC] cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#316DB4"
                            d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8"
                          />
                        </svg>
                        Individual invites
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("upload")}
                      className="bg-[#F7F9FC] cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2em"
                          height="1.2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="#316DB4"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 10v9m0-9l3 3m-3-3l-3 3m8.5 2c1.519 0 2.5-1.231 2.5-2.75a2.75 2.75 0 0 0-2.016-2.65A5 5 0 0 0 8.37 8.108a3.5 3.5 0 0 0-1.87 6.746"
                          />
                        </svg>
                        Upload users
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="relative mb-4 ">
                <button className="absolute left-2.5 top-3.5 cursor-pointer">
                  <Search className="h-3.5 w-3.5 text-[#5E6369]" />
                </button>
                <Input
                  className="rounded-sm pl-9 flex items-center"
                  placeholder="Search employees or travel managers by..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-0 top-0.5 border-l">
                  <Select>
                    <SelectTrigger className="rounded-sm w-full border-0">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="department">Department </SelectItem>
                      <SelectItem value="userID">User ID</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div className="flex gap-3">
                  <Select>
                    <SelectTrigger className="bg-[#F7F9FC]">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="val1">DevOps</SelectItem>
                      <SelectItem value="val2">Data Science</SelectItem>
                      <SelectItem value="val3">IT Support</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-[#F7F9FC]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="traveler">Traveler</SelectItem>
                      <SelectItem value="travelManager">
                        Travel Manager
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="bg-[#F7F9FC] text-[#5E6369]"
                  >
                    <Sms className="h-4 w-4" />
                    Invite Employees via Email
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#F7F9FC] text-[#5E6369]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 11.5V20m0 0l3-3m-3 3l-3-3M8 7.036a3.5 3.5 0 0 1 1.975.99M17.5 14c1.519 0 2.5-1.231 2.5-2.75a2.75 2.75 0 0 0-2.016-2.65A5 5 0 0 0 8.37 7.108a3.5 3.5 0 0 0-1.87 6.746"
                      />
                    </svg>
                    Download users
                  </Button>
                </div>
              </div>

              {/* Table */}

              <div className="overflow-x-auto font-ubuntu bg-white">
                <Table className="border-separate border-spacing-y-1 text-sm">
                  <TableHeader className="">
                    <TableRow className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100 mb-2 ">
                      <TableHead className="min-w-[120px] pl-4 font-normal">
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
                          <p>User ID</p>
                        </div>
                      </TableHead>

                      <TableHead className="min-w-[200px] font-normal">
                        Name & Email
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Registered
                      </TableHead>
                      <TableHead className="min-w-[150px] font-normal">
                        Department
                      </TableHead>
                      <TableHead className="min-w-[100px] font-normal">
                        Status
                      </TableHead>
                      <TableHead className="min-w-[250px] font-normal">
                        Office
                      </TableHead>
                      <TableHead className="min-w-[150px] font-normal">
                        Title
                      </TableHead>
                      <TableHead className="min-w-[150px] font-normal">
                        Travel Manager
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Custom Field
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Region
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Policy Level
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedData.map((user) => (
                      <TableRow
                        className="shadow-[0px_4px_30px_0px_#0000000F] bg-white hover:bg-gray-100"
                        key={user.id}
                      >
                        <TableCell className="pl-4">
                          <div className="flex gap-2">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              checked={selectedRows.has(user.id)}
                              onChange={() => handleSelectRow(user.id)}
                            />
                            <span className="text-sm text-[5E6369]">
                              {user.id}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center group">
                            <div className="">
                              <div>{user.name}</div>
                              <div className="text-xs text-[#64748B]">
                                {user.email}
                              </div>
                            </div>
                            <Button
                              className="opacity-0 group-hover:opacity-100"
                              variant={"ghost"}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
                                />
                              </svg>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.registered ? (
                              <>
                                <Check className="h-4 w-4 text-green-600" />
                                <span className="">Registered</span>
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="h-4 w-4 text-[#FF2525]" />
                                <span className="">Not registered</span>
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={user.status}
                              className="data-[state=checked]:bg-[#316DB4] data-[state=unchecked]:bg-[#96AECA]"
                            />
                            <span className="text-sm">
                              {user.status ? "Enabled" : "Disabled"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[250px]">
                          <div className="text-wrap">{user.companyOffice}</div>
                        </TableCell>
                        <TableCell>{user.title}</TableCell>
                        <TableCell>
                          {user.travelManager}
                          <p className="text-xs text-[#64748B]">
                            jane.smith@example.com
                          </p>
                        </TableCell>
                        <TableCell>---------</TableCell>
                        <TableCell>{user.region}</TableCell>
                        <TableCell>{user.policyLevel}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
        </div>
      </div>

      <Sheet open={true} onOpenChange={() => setActiveSheet(null)}>
        {activeSheet === "add" && <AddNewTravelerToUserManagementSheet />}
        {activeSheet === "invite" && <InviteNewUserToUserManagementSheet />}
        {activeSheet === "upload" && <UploadUsersToUserManagementSheet />}
      </Sheet>
    </>
  );
}
