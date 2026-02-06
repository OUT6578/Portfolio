import * as React from 'react';
import {
  Activity,
  LayoutGrid,
  Kanban,
  Hourglass,
  LogOut,
  CheckCircle,
  ChevronsRight,
  ChevronsLeft,
  Notebook,
} from 'lucide-react';
// import { NavMain } from '../ui/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
  SidebarSeparator,
} from '../ui/sidebar';
import { useSidebar } from '../ui/sidebar';
import { NavMain } from '../ui/nav-main';

// If you need these, uncomment and ensure paths are correct
// import { clearAllStorage } from '@/lib/helperFunction';
// import { useAuth } from 'react-oidc-context';
// import { useNavigate } from 'react-router';

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar();

  // Uncomment if you need authentication
  // const auth = useAuth();
  // const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    // clearAllStorage();
    // auth.signoutRedirect();
    console.log('Logout clicked');
  };

  const navMainItems = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutGrid,
    },
    {
      title: 'Tasks',
      url: '/task',
      icon: Activity,
    },
    {
      title: 'Board',
      url: '/board',
      icon: Kanban,
    },
    {
      title: 'Pending Approval',
      url: '/pending-approval',
      icon: Hourglass,
    },
    {
      title: 'Completed',
      url: '/completed',
      icon: CheckCircle,
    },
  ];

  const ManualUrl = '/user-manual'; // Replace with your actual manual URL

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Toggle Button */}
      <div className="flex justify-end pt-4 px-4">
        {state === 'collapsed' ? (
          <ChevronsRight
            onClick={toggleSidebar}
            className="w-8 h-8 cursor-pointer text-gray-600 hover:text-primary transition-colors"
          />
        ) : (
          <ChevronsLeft
            onClick={toggleSidebar}
            className="w-8 h-8 cursor-pointer text-gray-600 hover:text-primary transition-colors"
          />
        )}
      </div>
      
      <SidebarSeparator />
      
      {/* Main Navigation */}
      <SidebarContent className="flex flex-col justify-between">
        <NavMain items={navMainItems} />
      </SidebarContent>
      
      {/* Footer */}
      <SidebarFooter>
        <SidebarSeparator />
        
        {/* User Manual Button */}
        <SidebarMenu>
          <SidebarMenuButton
            onClick={() => window.open(ManualUrl, '_blank')}
            tooltip="User Manual"
            className="transition-all cursor-pointer duration-300 active:bg-primary hover:bg-primary hover:text-white h-12 w-full"
          >
            <div className="flex items-center gap-2">
              <Notebook className="w-6 h-6" />
              <span>User Manual</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenu>
        
        {/* Logout/Exit Button */}
        <SidebarMenu>
          <SidebarMenuButton
            onClick={handleLogout}
            tooltip="Exit"
            className="transition-all cursor-pointer duration-300 active:bg-primary hover:bg-primary hover:text-white h-12 w-full"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-6 h-6" />
              <span>Exit</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}