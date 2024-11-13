import { SidebarTrigger } from "../ui/sidebar";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-2">
      <SidebarTrigger />
      <div>First Item</div>
    </nav>
  );
}
