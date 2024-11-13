import { AppSidebar } from "@/components/sidebar/app-sidebar";
import SidebarHeader from "@/components/sidebar/sidebar-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppSidebar>
      {/* Sidebar inset content here */}
      <SidebarHeader />
      <main>{children}</main>
    </AppSidebar>
  );
}
