"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Book, Code, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Clock, Compass, Briefcase, FileText, MapPin, GraduationCap } from 'lucide-react';


const HeroSection = () => {
  return (
    <>
      <Navbar />
<div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
           <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 text-white  rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mt-5 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row min-h-screen">
          <div className="flex flex-col">
                <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Time Wise
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
Time Wise is a project management tool that offers features like Timer, Timesheet, Calendar, Kiosk, Blog, and more to help you efficiently manage your projects and time.          </motion.p>

          <motion.div
            className="flex w-full md:w-[700px] flex-wrap gap-4 mb-4 mt-[-20px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<SkillBadge
    icon={<Clock className="w-6 h-6 mr-2" />}
    text="TimeKeeping"
  />
  <SkillBadge
    icon={<Compass className="w-6 h-6 mr-2" />}
    text="Auto Tracker"
  />
  <SkillBadge
    icon={<Briefcase className="w-6 h-6 mr-2" />}
    text="Projects"
  />
  <SkillBadge
    icon={<FileText className="w-6 h-6 mr-2" />}
    text="Reports"
  />
  <SkillBadge
    icon={<MapPin className="w-6 h-6 mr-2" />}
    text="Location"
  />
  <SkillBadge
    icon={<GraduationCap className="w-6 h-6 mr-2" />}
    text="Lifelong Learner"
  />
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
      </div>
        </div>
      </div>
    </>
  );
};

const SkillBadge = ({ icon, text }: any) => (
  <div className="flex items-center bg-gray-300 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2 text-gray-800 dark:text-gray-200">
    {icon}
    <span>{text}</span>
  </div>
);

export default HeroSection;
