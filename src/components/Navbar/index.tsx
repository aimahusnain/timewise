"use client";

import { motion } from "framer-motion";
import { Calendar, FileSpreadsheet, Home, Newspaper, Tablet, Timer } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserSignInButton from "../auth/SignInButton";
import ThemeToggler from "../theme";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timer", href: "/timer", icon: Timer },
    { name: "Timesheet", href: "/timesheet", icon: FileSpreadsheet },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Kiosk", href: "/kiosk", icon: Tablet },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const active = navItems.find((item) => item.href === currentPath);
    if (active) {
      setActiveItem(active.name);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky px-[40px] h-16 inset-x-0 top-0 z-30 w-full bg-white dark:bg-gray-900 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700"
    >
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-500">Time Wise</span>
        </Link>

        <MobileNav />

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="relative"
              onHoverStart={() => setActiveItem(item.name)}
              onHoverEnd={() => setActiveItem(null)}
            >
              <Link
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
              {activeItem === item.name && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  layoutId="underline"
                />
              )}
            </motion.div>
          ))}
          <ThemeToggler />
        </div>

        <div
          className=" md:flex hidden gap-4 items-center"
        >
          <UserSignInButton />
          {/* <Link href="contact-us">
            <Button
              className="flex items-center gap-2 bg-blue-500 text-white"
              size="sm"
            >
              <Podcast className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
          </Link> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
