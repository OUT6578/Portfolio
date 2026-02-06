import { SidebarProvider } from "../ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import SiteHeader from "./siteHeader"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Site Header - Fixed at top */}
      <SiteHeader />
      {/* Sidebar and Main Content */}
      <SidebarProvider>
        <div className="flex-1 flex">
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}