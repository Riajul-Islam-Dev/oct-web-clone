import SidebarLayout from "@/components/SidebarLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FCFCFC]">
      <SidebarLayout>{children}</SidebarLayout>
    </div>
  );
}
