import TopNav from "@/components/landing/top-nav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
