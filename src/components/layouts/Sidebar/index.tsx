"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import {
  LuHome,
  LuClipboardList,
  LuBuilding2,
  LuMessageCircle,
  LuAppWindow,
  LuCalendar,
} from "react-icons/lu";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              onClick={() => router.push("/")}
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuMessageCircle className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuBuilding2 className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuAppWindow className="mr-2 text-lg" />
              All Applications
            </Button>
            <Button
              onClick={() => router.push("/job-listings")}
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuClipboardList className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuCalendar className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="mb-2 px-4 text-lg font-semibold">Settings</div>
            <Button
              onClick={() => router.push("/settings")}
              variant={"ghost"}
              className="w-full justify-start rounded hover:text-primary"
            >
              <LuHome className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full text-red-500 justify-start hover:bg-red-200 rounded hover:text-red-500"
              onClick={() => signOut()}
            >
              <LuHome className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
