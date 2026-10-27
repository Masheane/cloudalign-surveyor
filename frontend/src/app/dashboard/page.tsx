"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"

interface EngineerStatus {
  id: string
  name: string
  avatar: string
  activeTask: string
  client: string
  location: string
  stage: "Site Survey" | "Assessment Report" | "Solution Design & BOM" | "Proposal"
  status: "On Site" | "Drafting" | "Pending Review" | "Available"
}

const INITIAL_ENGINEERS: EngineerStatus[] = [
  {
    id: "eng-1",
    name: "Thatho Motsoasele",
    avatar: "TM",
    activeTask: "Solar & UPS Survey",
    client: "Apex Mining Site B",
    location: "Hlotse Netbank ATM",
    stage: "Site Survey",
    status: "On Site",
  },
  {
    id: "eng-2",
    name: "Letjamela Mabea",
    avatar: "LM",
    activeTask: "Wi-Fi Network Assessment",
    client: "TechHub Campus",
    location: "Qacha Vodacom shop",
    stage: "Solution Design & BOM",
    status: "Drafting",
  },
  {
    id: "eng-3",
    name: "Mphahamele Mbele",
    avatar: "MM",
    activeTask: "CCTV & Access Control",
    client: "Central Logistics HQ",
    location: "FNB HQ",
    stage: "Assessment Report",
    status: "Pending Review",
  },
  {
    id: "eng-4",
    name: "Kebone Setsumi",
    avatar: "KS",
    activeTask: "None",
    client: "Unassigned",
    location: "Standby",
    stage: "Site Survey",
    status: "Available",
  },
]

export default function TeamLeadDashboard() {
  const [engineers, setEngineers] = useState<EngineerStatus[]>(INITIAL_ENGINEERS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [selectedEngineer, setSelectedEngineer] = useState("")
  const [clientName, setClientName] = useState("")
  const [surveyType, setSurveyType] = useState("Solar Installation Survey")

  const handleAssignTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedEngineer || !clientName) return

    setEngineers((prev) =>
      prev.map((eng) =>
        eng.id === selectedEngineer
          ? {
              ...eng,
              activeTask: surveyType,
              client: clientName,
              status: "On Site",
              stage: "Site Survey",
            }
          : eng
      )
    )

    setSelectedEngineer("")
    setClientName("")
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Shared Navbar */}
      <Navbar userName="Tsepo Masita" userRole="Team Lead" userEmail="tsepo.masita@cloudalign.co.ls" />

      <div className="flex flex-1">
        
        {/* Role-Specific Sidebar for Team Lead */}
        <aside className="hidden lg:block w-64 border-r border-slate-200 bg-white p-6 space-y-6">
          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Management Menu</p>
            <nav className="space-y-1 pt-2">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-blue-50 px-3.5 py-2.5 text-xs font-semibold text-blue-700">
                <span>📊</span> Operations Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                <span>📋</span> All Opportunities
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                <span>👥</span> Field Engineer Workload
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                <span>📁</span> Proposals & BOM Approvals
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Operations & Resource Management
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Monitor team status and assign incoming technical surveys.
              </p>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all active:scale-[0.98]"
            >
              + Assign New Task
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <p className="text-xs font-medium text-slate-500">Total Opportunities</p>
              <p className="text-2xl font-bold text-slate-900">12</p>
              <span className="text-xs text-blue-600 font-medium">3 Pending Assignment</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <p className="text-xs font-medium text-slate-500">Surveys In Field</p>
              <p className="text-2xl font-bold text-amber-600">4</p>
              <span className="text-xs text-slate-400">Active Site Inspections</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <p className="text-xs font-medium text-slate-500">Pending Reviews</p>
              <p className="text-2xl font-bold text-purple-600">3</p>
              <span className="text-xs text-slate-400">BOM Approvals</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <p className="text-xs font-medium text-slate-500">Completed Surveys</p>
              <p className="text-2xl font-bold text-emerald-600">18</p>
              <span className="text-xs text-slate-400">Ready for Proposals</span>
            </div>
          </div>

          {/* Engineer Workload Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Field Engineer Workload</h2>
              <p className="text-xs text-slate-500">Real-time status tracking across active pipeline stages.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-semibold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Field Engineer</th>
                    <th className="px-6 py-4">Active Task & Client</th>
                    <th className="px-6 py-4">Pipeline Stage</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {engineers.map((eng) => (
                    <tr key={eng.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                          {eng.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{eng.name}</p>
                          <p className="text-xs text-slate-400">{eng.location}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-800">{eng.activeTask}</p>
                        <p className="text-xs text-slate-500">{eng.client}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                          {eng.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          eng.status === "On Site" ? "bg-amber-50 text-amber-700" :
                          eng.status === "Drafting" ? "bg-blue-50 text-blue-700" :
                          eng.status === "Pending Review" ? "bg-purple-50 text-purple-700" :
                          "bg-emerald-50 text-emerald-700"
                        }`}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current" /> {eng.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => {
                            setSelectedEngineer(eng.id)
                            setIsModalOpen(true)
                          }}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          Reassign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

      {/* Assignment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-5">
            <h3 className="text-lg font-bold text-slate-900">Assign Technical Task</h3>
            <form onSubmit={handleAssignTask} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Select Field Engineer</label>
                <select
                  value={selectedEngineer}
                  onChange={(e) => setSelectedEngineer(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option value="">-- Choose Engineer --</option>
                  {engineers.map((eng) => (
                    <option key={eng.id} value={eng.id}>{eng.name} ({eng.status})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Client & Site Details</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Logistics, Tower B"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Technical Survey Offering</label>
                <select
                  value={surveyType}
                  onChange={(e) => setSurveyType(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="Solar Installation Survey">Solar Installation Survey</option>
                  <option value="Wi-Fi Installation Survey">Wi-Fi Installation Survey</option>
                  <option value="UPS Installation Survey">UPS Installation Survey</option>
                  <option value="CCTV & Access Control Survey">CCTV & Access Control Survey</option>
                  <option value="Data Centre Assessment">Data Centre Assessment</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500"
                >
                  Confirm Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}