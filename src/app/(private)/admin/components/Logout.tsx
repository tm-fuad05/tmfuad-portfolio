/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { logout } from "@/app/actions/adminVerification";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Logout() {
  const { replace, refresh } = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      await Swal.fire({
        position: "center",
        title: "Logged out",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      replace("/");
      refresh();
    } catch (error: any) {
      console.error(error.message);
      Swal.fire("Something went wrong!", "", "error");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/60 transition-all shadow-sm group cursor-pointer"
    >
      <LogOut className="size-4 text-slate-400 group-hover:text-red-400 transition-colors" />
      <span>Logout</span>
    </button>
  );
}
