import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Sidebar } from "@/components/Sidebar"

function App() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background flex">
      {/* Theme Toggle Button - Fixed to top right */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>

      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content - Adjusted margin to account for sidebar */}
      <main className={`flex-1 transition-all duration-300 ${open ? 'ml-[280px]' : 'ml-[60px]'}`}>
        <div className="container px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          {/* Add your content sections here */}
        </div>
      </main>
    </div>
  )
}

export default App
