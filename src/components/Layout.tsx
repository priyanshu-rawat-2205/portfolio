import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content - Adjusted margin to account for sidebar */}
      <main className={`flex-1 transition-all duration-300 ${open ? 'ml-[280px]' : 'ml-[60px]'}`}>
        <div className="container px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 