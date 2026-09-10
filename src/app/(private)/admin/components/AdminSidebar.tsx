import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { FileText, PlusCircle, Home, X } from "lucide-react";

interface AdminSidebarProps {
  activeTab: "manage" | "post";
  setActiveTab: (tab: "manage" | "post") => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  isOpen = false,
  onClose,
}: AdminSidebarProps) {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden animate-in fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-72 md:w-64 bg-slate-900/95 md:bg-slate-900/60 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Top Header with Logo & Close button for Mobile */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <h2 className="text-base font-bold text-white tracking-wide">
                  Admin Panel
                </h2>
                <span className="text-[10px] text-slate-400 font-medium block">
                  TM Fuad Portfolio
                </span>
              </div>
            </div>

            {/* Mobile Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <button
              onClick={() => {
                setActiveTab("manage");
                if (onClose) onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "manage"
                  ? "bg-primary text-white font-semibold shadow-lg shadow-primary/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <FileText className="size-4" />
              <span>Manage Blogs</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("post");
                if (onClose) onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "post"
                  ? "bg-primary text-white font-semibold shadow-lg shadow-primary/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <PlusCircle className="size-4" />
              <span>Post Blogs</span>
            </button>
          </nav>
        </div>

        {/* Bottom Button: Back to Main Page */}
        <div className="pt-6 border-t border-slate-800">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/60 transition-all shadow-sm group"
          >
            <Home className="size-4 text-slate-400 group-hover:text-primary transition-colors" />
            <span>Go to Main Site</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
