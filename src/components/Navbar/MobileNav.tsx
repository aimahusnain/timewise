"use client";

import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Briefcase, LogIn, Podcast, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Timer, Calendar , Newspaper,FileSpreadsheet,Tablet} from 'lucide-react';


const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timer", href: "/timer", icon: Timer },
    { name: "Timesheet", href: "/timesheet", icon: FileSpreadsheet },
    { name: "Calendar", href: "/calendar", icon:  Calendar },
    { name: "Kiosk", href: "/kiosk", icon: Tablet },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
          <SheetHeader className="text-left mb-8">
            <SheetTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Time Wise
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                    onClick={() => handleNavigation(item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full items-center flex gap-2 text-left py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  <item.icon className="w-6 h-6 mr-2" />
                    {item.name}
                </motion.button>
              ))}
            </AnimatePresence>
             <motion.div className=" flex gap-4
                    items-center"
                        initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}>
            <Link href="/sign-in">
              <Button
                className="flex items-center gap-2 bg-blue-500 text-white"
                size="sm"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign in</span>
              </Button>
              
            </Link>
            <Link href="contact-us">
                    <Button
                className="flex items-center gap-2 bg-blue-500 text-white"
                size="sm"
              >
      <Podcast className="w-4 h-4" />
                <span>Contact Us</span>
              </Button></Link>
          </motion.div>
          </nav>
               
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;