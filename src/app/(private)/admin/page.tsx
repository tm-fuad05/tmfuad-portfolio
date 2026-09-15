/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomLoader from "@/components/shared/CustomLoader";
import Logo from "@/components/shared/Logo";
import AdminSidebar from "./components/AdminSidebar";
import PostBlogForm from "./components/PostBlogForm";
import { Menu } from "lucide-react";
import ManageBlogs from "./components/ManageBlogs";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"manage" | "post">("manage");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isAdmin = sessionStorage?.getItem("isAdmin");

    if (isAdmin !== "true") {
      router.replace("/admin-verification");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return <CustomLoader />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col md:flex-row relative">
      {/* Mobile Top Header with Hamburger */}
      <header className="md:hidden flex items-center justify-between p-4 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Open sidebar"
          >
            <Menu className="size-5" />
          </button>
          <span className="font-bold text-sm text-white">Admin Dashboard</span>
        </div>
        <Logo />
      </header>

      {/* Sidebar (Desktop sticky + Mobile responsive drawer) */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {activeTab === "manage" ? <ManageBlogs /> : <PostBlogForm />}
      </main>
    </div>
  );
}
