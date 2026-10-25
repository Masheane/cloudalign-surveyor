"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"

interface FieldTask {
  id: string
  clientName: string
  siteAddress: string
  contactPerson: string
  contactPhone: string
  surveyType: "Solar & UPS" | "Wi-Fi & Network" | "CCTV & Security"
  scheduledDate: string
  isToday: boolean
  status: "Assigned" | "In Progress" | "Pending Review" | "Completed"
  stepNumber: number
  totalSteps: number
}

const MY_ASSIGNMENTS: FieldTask[] = [
  {
    id: "TSK-801",
    clientName: "Apex Mining - Site B",
    siteAddress: "Khubetsoana, Lerakong",
    contactPerson: "Johan Botha",
    contactPhone: "+266 5800 1515",
    surveyType: "Solar & UPS",
    scheduledDate: "Today, 10:30 AM",
    isToday: true,
    status: "In Progress",
    stepNumber: 1,
    totalSteps: 5,
  },
  {
    id: "TSK-804",
    clientName: "Central Logistics HQ",
    siteAddress: "Maseru, Maseru West",
    contactPerson: "David Smith",
    contactPhone: "+266 5000 0000",
    surveyType: "CCTV & Security",
    scheduledDate: "Tomorrow, 09:00 AM",
    isToday: false,
    status: "Assigned",
    stepNumber: 1,
    totalSteps: 5,
  },
  {
    id: "TSK-792",
    clientName: "TechHub Co-Working Campus",
    siteAddress: "Leribe, Mahobong",
    contactPerson: "Claire Vance",
    contactPhone: "+266 6215 7517",
    surveyType: "Wi-Fi & Network",
    scheduledDate: "Oct 24, 2026",
    isToday: false,
    status: "Pending Review",
    stepNumber: 4,
    totalSteps: 5,
  },
]

export default function EngineerDashboard() {
  const [tasks] = useState<FieldTask[]>(MY_ASSIGNMENTS)
  const [activeTab, setActiveTab] = useState<"assigned" | "history">("assigned")
  const [formattedDate, setFormattedDate] = useState("")

  useEffect(() => {
    setFormattedDate(
      new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    )
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* 1. Common Top Navbar */}
      <Navbar 
        userName="Letjamela Mabea" 
        userRole="Field Engineer" 
        userEmail="letjamela.mabea@cloudalign.co.za" 
      />

      {/* Main Layout Wrapper with Sidebar & Content side-by-side */}
      <div className="flex flex-1">
        
        {/* 2. Properly Aligned Left Sidebar */}
        <aside className="hidden lg:flex w-64 border-r border-slate-200 bg-white p-6 flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Field Navigation</p>
              <nav className="space-y-1.5 pt-2">
                <button
                  onClick={() => setActiveTab("assigned")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                    activeTab === "assigned"
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>⚡</span> Active Tasks
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-700 font-bold">
                    {tasks.filter(t => t.status !== "Completed").length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("history")}
                  className={`w-full flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                    activeTab === "history"
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>📁</span> Completed History
                </button>
              </nav>
            </div>
          </div>

          {/* Device Offline Sync Status */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">Offline Sync</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs font-semibold text-slate-200">
              All checklists ready offline
            </p>
          </div>
        </aside>

        {/* 3. Main Workspace Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl">
          
          {/* Header Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-xs border border-slate-200">
            <div>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100 mb-2">
                Field Execution Workspace
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Assigned Site Surveys
              </h1>
             
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
                📅 Today: {formattedDate || "Loading..."}
              </span>
            </div>
          </div>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div 
                key={task.id}
                className={`bg-white rounded-2xl border p-6 shadow-xs transition-all flex flex-col justify-between space-y-5 ${
                  task.isToday ? "border-blue-500 ring-2 ring-blue-500/10" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Top Info & Priority Banner */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                      {task.surveyType}
                    </span>
                    {task.isToday && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white animate-pulse">
                        ⭐ Start Here (Today's Priority)
                      </span>
                    )}
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      task.status === "In Progress" 
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : task.status === "Pending Review"
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}>
                      {task.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      {task.id} • {task.scheduledDate}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                      {task.clientName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <span>📍</span> {task.siteAddress}
                    </p>
                  </div>
                </div>

                {/* Contact Strip */}
                <div className="flex items-center justify-between bg-slate-50 px-3.5 py-2.5 rounded-xl text-xs text-slate-600 border border-slate-100">
                  <span className="font-semibold text-slate-700">👤 {task.contactPerson}</span>
                  <a 
                    href={`tel:${task.contactPhone}`} 
                    className="text-blue-600 font-bold hover:underline bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                  >
                    📞 {task.contactPhone}
                  </a>
                </div>

                {/* Step Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span>Pipeline Progress</span>
                    <span className="text-blue-700 font-bold">Step {task.stepNumber} of {task.totalSteps} (Site Survey)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/50">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(task.stepNumber / task.totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white py-3.5 text-xs font-bold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>📝</span> Launch Survey Checklist
                </button>

              </div>
            ))}
          </div>

        </main>
      </div>

    </div>
  )
}