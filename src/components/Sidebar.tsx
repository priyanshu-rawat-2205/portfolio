import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <div className={`h-screen bg-card fixed left-0 top-0 transition-all duration-300 ${open ? 'w-[280px]' : 'w-[60px]'}`}>
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className={`${open ? 'absolute top-4 right-4' : 'mt-4 mx-auto'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Profile Section - Only show when expanded */}
        {open && (
          <div className="flex flex-col items-center space-y-4 mt-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/your-profile-picture.jpg" alt="Your Name" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-xl font-bold">Priyanshu Rawat</h2>
              <p className="text-muted-foreground">Software Engineer</p>
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
  )
} 