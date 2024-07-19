'use client'

import React, { useState, useEffect } from 'react';
import { Clock, BarChart2, Calendar, Settings, Users, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"

interface Task {
  name: string;
  time: number;
}

interface SidebarItem {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const TimeWiseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('timeTracker');
  const [taskName, setTaskName] = useState<string>('');
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isTimerRunning) {
      if (taskName.trim()) {
        setCompletedTasks([...completedTasks, { name: taskName, time: elapsedTime }]);
        setTaskName('');
        setElapsedTime(0);
        setIsTimerRunning(false);
      } else {
        toast("Error", {
          description: "Task name cannot be empty. Please enter a task name before starting the timer.",
        });
      }
    } else {
      if (taskName.trim()) {
        setIsTimerRunning(true);
      } else {
        toast("Error", {
          description: "Task name cannot be empty. Please enter a task name before starting the timer.",
        });
      }
    }
  };

  const sidebarItems: SidebarItem[] = [
    { id: 'timeTracker', icon: Clock, label: 'Time Tracker' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'teams', icon: Users, label: 'Teams' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TimeWise</h1>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
                activeTab === item.id
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Time Tracker</h2>
          
          {/* Time Tracker Tool */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Input
                  type="text"
                  placeholder="Enter task name"
                  value={taskName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)}
                  className="flex-grow"
                />
                <Button
                  onClick={handleStartStop}
                  className={`w-24 ${isTimerRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                >
                  {isTimerRunning ? 'Stop' : 'Start'}
                </Button>
              </div>
              <div className="text-4xl font-bold text-center">
                {formatTime(elapsedTime)}
              </div>
            </CardContent>
          </Card>

          {/* Completed Tasks */}
          <h3 className="text-xl font-semibold mb-4">Completed Tasks</h3>
          <Card>
            <CardContent className="p-6">
              {completedTasks.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center">No completed tasks yet</p>
              ) : (
                <ul className="space-y-4">
                  {completedTasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0 last:pb-0">
                      <span>{task.name}</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono">{formatTime(task.time)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimeWiseDashboard;