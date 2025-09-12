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
import {
  Search,
  Check,
  AlertTriangle,
  Plus,
  View,
  X,
  ChevronDown,
} from "lucide-react";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
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
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <h3 className="uppercase font-semibold">
            Manage Employees & Travel Managers
          </h3>
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
            <div className="">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-ubuntu">Users {activeSheet}</h4>

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
                      <SelectValue placeholder="Office Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="of1">Office Location 01 </SelectItem>
                      <SelectItem value="of2">Office Location 02 </SelectItem>
                      <SelectItem value="of3">Office Location 03 </SelectItem>
                    </SelectContent>
                  </Select>

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
                  <Select>
                    <SelectTrigger className="bg-[#F7F9FC]">
                      <SelectValue placeholder="Updated Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="val1">Value 1</SelectItem>
                      <SelectItem value="val2">Value 2</SelectItem>
                      <SelectItem value="val3">Value 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-[#F7F9FC]">
                      <SelectValue placeholder="Update Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="val1">Value 1</SelectItem>
                      <SelectItem value="val2">Value 2</SelectItem>
                      <SelectItem value="val3">Value 3</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <TableHead className="min-w-[100px] pl-4 font-normal">
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
                      <TableHead className="min-w-[80px] font-normal">
                        Action
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
                        Company Office
                      </TableHead>
                      <TableHead className="min-w-[150px] font-normal">
                        Title
                      </TableHead>
                      <TableHead className="min-w-[150px] font-normal">
                        Travel Manager
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Delegates
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Region
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Policy Level
                      </TableHead>
                      <TableHead className="min-w-[100px] font-normal">
                        Role
                      </TableHead>
                      <TableHead className="min-w-[120px] font-normal">
                        Permission
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
                          <Dialog>
                            <DialogTrigger>
                              <View className="h-4 w-4 text-[#316DB4] cursor-pointer" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl">
                              <DialogHeader>
                                <DialogTitle className="font-normal font-ubuntu text-lg -mt-2.5">
                                  USER DETAILS
                                </DialogTitle>
                              </DialogHeader>
                              <div className="">
                                <div className="flex flex-col items-center mb-5">
                                  <Image
                                    className="rounded-full"
                                    src="https://randomuser.me/api/portraits/men/34.jpg"
                                    alt="avatar"
                                    height={80}
                                    width={80}
                                    unoptimized
                                  />
                                  <div className="mt-3">
                                    <div className="flex items-center gap-2 mb-1">
                                      <p className="font-ubuntu text-lg leading-none">
                                        Cody Fisher
                                      </p>
                                      <p className="text-[10px] font-ubuntu bg-[#F7F9FC] rounded-full px-2 py-0.5">
                                        Active
                                      </p>
                                    </div>
                                    <p className="font-raleway text-sm text-[#5E6369] text-center">
                                      Traveler
                                    </p>
                                  </div>
                                </div>

                                <div className="border rounded-md flex mb-4">
                                  <div className="flex-1 p-3">
                                    <p className="text-[#5E6369] text-sm font-ubuntu">
                                      Email Address
                                    </p>
                                    <p className="font-ubuntu">
                                      codyfisher@gmail.com
                                    </p>
                                  </div>
                                  <div className="flex-1 p-3 border-l border-r">
                                    <p className="text-[#5E6369] text-sm font-ubuntu">
                                      Mobile Number
                                    </p>
                                    <p className="font-ubuntu">
                                      +88017220000000
                                    </p>
                                  </div>
                                  <div className="flex-1 p-3">
                                    <p className="text-[#5E6369] text-sm font-ubuntu">
                                      Department
                                    </p>
                                    <p className="font-ubuntu">Marketing</p>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <p className="text-[#5E6369] text-sm font-ubuntu">
                                    Office Location
                                  </p>
                                  <p className="font-ubuntu">
                                    2972 Westheimer Rd. Santa Ana, Illinois
                                    85486
                                  </p>
                                </div>

                                <div className="mb-4">
                                  <p className="text-[#5E6369] text-sm font-ubuntu">
                                    Policy
                                  </p>
                                  <p className="font-ubuntu">Default</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                  <div className="border rounded flex-1 p-2.5">
                                    <p className="text-[#2A2B2F] text-sm font-ubuntu">
                                      Policy
                                    </p>
                                    <p className="font-ubuntu text-xl leading-none">
                                      50
                                    </p>
                                  </div>

                                  <div className="border rounded flex-1 p-2.5">
                                    <p className="text-[#2A2B2F] text-sm font-ubuntu">
                                      Hotel Booking
                                    </p>
                                    <p className="font-ubuntu text-xl leading-none">
                                      20
                                    </p>
                                  </div>

                                  <div className="border rounded flex-1 p-2.5">
                                    <p className="text-[#2A2B2F] text-sm font-ubuntu">
                                      Car Booking
                                    </p>
                                    <p className="font-ubuntu text-xl leading-none">
                                      50
                                    </p>
                                  </div>
                                  <div className="border rounded flex-1 p-2.5">
                                    <p className="text-[#2A2B2F] text-sm font-ubuntu">
                                      Ar Ticket Booking
                                    </p>
                                    <p className="font-ubuntu text-xl leading-none">
                                      20
                                    </p>
                                  </div>
                                </div>
                                <Button className="w-full font-ubuntu font-normal">
                                  View Profile
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                        <TableCell>
                          <div className="">{user.name}</div>
                          <div className="text-xs text-[#64748B]">
                            {user.email}
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
                        <TableCell>{user.travelManager}</TableCell>
                        <TableCell>{user.delegates}</TableCell>
                        <TableCell>{user.region}</TableCell>
                        <TableCell>{user.policyLevel}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
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
                                View ({user.permission})
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-120 p-0">
                              <div className="grid">
                                <div className="flex justify-between pt-3 pl-3.5 pr-2">
                                  <div className="font-medium font-ubuntu">
                                    Permissions Summary
                                  </div>
                                  <PopoverClose>
                                    <Button
                                      className="-mt-1.5"
                                      variant={"ghost"}
                                    >
                                      <X className="size-4" />
                                    </Button>
                                  </PopoverClose>
                                </div>

                                <div className="mb-4 border-t pt-4 mt-1 px-4">
                                  <ul className="flex font-ubuntu flex-wrap justify-center gap-2">
                                    <li className="bg-[#F7F9FC] py-1.5 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                                      Travel Request Management (Basic)
                                    </li>
                                    <li className="bg-[#F7F9FC] py-1.5 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                                      User Management (Full Access)
                                    </li>
                                    <li className="bg-[#F7F9FC] py-1.5 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                                      Billing & Invoices (Basic)
                                    </li>
                                    <li className="bg-[#F7F9FC] py-1.5 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
                                      Reports & Analytics (Advance)
                                    </li>
                                    <li className="bg-[#F7F9FC] py-1.5 px-2 rounded cursor-pointer hover:bg-[#e7ecf1] text-xs">
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
                        </TableCell>
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
