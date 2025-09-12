"use client";

import {
  Buildings2,
  DocumentText1,
  ElementPlus,
  EmojiHappy,
  LogoutCurve,
  Notepad2,
  Notification,
  People,
  Profile,
  ProfileCircle,
  Receipt2,
  Setting2,
} from "iconsax-reactjs";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";

const iconSize = "20px";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: () => (
      <ElementPlus
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
  {
    title: "Manage Request",
    url: "#",
    icon: () => (
      <Notepad2 style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Manage Reports",
    url: "#",
    icon: () => (
      <DocumentText1
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
  {
    title: "Manage Invoice",
    url: "#",
    icon: () => (
      <Receipt2 style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Manage Team",
    url: "#",
    icon: () => (
      <People style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Manage Company",
    url: "#",
    icon: () => (
      <Buildings2
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
  {
    title: "Manage User",
    url: "#",
    icon: () => (
      <Profile style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Policy",
    url: "/policy_management/flight_duration",
    icon: () => (
      <ElementPlus style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Setting",
    url: "/company_settings",
    icon: () => (
      <Setting2 style={{ width: iconSize, height: iconSize }} color="#64748B" />
    ),
  },
  {
    title: "Notification",
    url: "#",
    icon: () => (
      <Notification
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
];

const bottomItems = [
  {
    title: "My Account",
    url: "#",
    icon: () => (
      <ProfileCircle
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
  {
    title: "Help Center",
    url: "#",
    icon: () => (
      <EmojiHappy
        style={{ width: iconSize, height: iconSize }}
        color="#64748B"
      />
    ),
  },
  {
    title: "Log out",
    url: "#",
    icon: () => (
      <LogoutCurve
        style={{
          width: iconSize,
          height: iconSize,
          transform: "rotate(180deg)",
        }}
        color="#64748B"
      />
    ),
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="mb-2">
        <div
          className={
            state === "collapsed" ? "flex justify-center pt-3" : "px-4 pt-3"
          }
        >
          <div
            className="transition-all duration-300 ease-in-out overflow-hidden flex justify-center items-center"
            style={{
              width: state === "collapsed" ? "30px" : "130px",
              height: state === "collapsed" ? "30px" : "45px",
            }}
          >
            <Image
              src={
                state === "collapsed" ? "/side-logo-min.png" : "/side-logo.svg"
              }
              alt="Logo-Dark"
              width={state === "collapsed" ? 30 : 130}
              height={state === "collapsed" ? 30 : 45}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-9" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-[15px] text-[#64748B]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-2">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className="h-9" asChild>
                <a href={item.url}>
                  <item.icon />
                  <span className="text-[15px] text-[#64748B]">
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
