import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Home, User, Briefcase, Code, Mail, Sun, Moon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useTheme } from "@/components/theme-provider"

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

      {/* Sidebar - Always visible */}
      <div className={`h-screen bg-card fixed left-0 top-0 transition-all duration-300 ${open ? 'w-[280px]' : 'w-[60px]'}`}>
        <div className="flex flex-col h-full">
          {/* Burger Menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="mt-4 mx-auto"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Profile Section - Only show when expanded */}
          {open && (
            <div className="flex flex-col items-center space-y-4 mt-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/your-profile-picture.jpg" alt="Your Name" />
                <AvatarFallback>YN</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">Your Name</h2>
                <p className="text-muted-foreground">Your Title</p>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 w-full mt-8 px-2">
            <Button variant="ghost" className={`w-full ${open ? 'justify-start' : 'justify-center'}`}>
              <Home className="h-5 w-5" />
              {open && <span className="ml-2">Home</span>}
            </Button>
            <Button variant="ghost" className={`w-full ${open ? 'justify-start' : 'justify-center'}`}>
              <User className="h-5 w-5" />
              {open && <span className="ml-2">About Me</span>}
            </Button>
            <Button variant="ghost" className={`w-full ${open ? 'justify-start' : 'justify-center'}`}>
              <Code className="h-5 w-5" />
              {open && <span className="ml-2">Projects</span>}
            </Button>
            <Button variant="ghost" className={`w-full ${open ? 'justify-start' : 'justify-center'}`}>
              <Briefcase className="h-5 w-5" />
              {open && <span className="ml-2">Experience</span>}
            </Button>
            <Button variant="ghost" className={`w-full ${open ? 'justify-start' : 'justify-center'}`}>
              <Mail className="h-5 w-5" />
              {open && <span className="ml-2">Contact</span>}
            </Button>
          </nav>

          {/* Social Links - Only show when expanded */}
          {open && (
            <div className="mt-auto pb-6 flex gap-4 justify-center">
              {/* Add your social media links here */}
              <Button variant="ghost" size="icon">
                {/* Add social media icons */}
              </Button>
            </div>
          )}
        </div>
      </div>

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
