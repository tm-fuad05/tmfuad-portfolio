"use client";

import { FormEvent, useState } from "react";
import { Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { VerifyAdminPassword } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export default function AdminVerification() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await VerifyAdminPassword(password);

    if (res.success) {
      sessionStorage.setItem("isAdmin", "true");
      router.replace("/admin");
    } else {
      setError(res?.error);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 bg-cyan-500/15 rounded-full blur-[120px]" />

      {/* Verification Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] flex flex-col items-center">
        {/* Shield Icon Badge */}
        <div className="size-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-inner">
          <ShieldCheck className="size-8" />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 text-center">
          Admin Portal
        </h1>
        <p className="text-sm text-slate-400 text-center mb-8">
          Please enter your master security key to access the dashboard.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <div className="relative">
              {/* Left Lock Icon */}
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="size-5" />
              </div>

              {/* Password Input */}
              <input
                type={"password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter secret key..."
                className="w-full pl-11 pr-11 py-3.5 bg-slate-950/70 border border-white/15 rounded-xl placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-transparent"
              />
            </div>
            <small className="text-xs text-red-400 ">{error}</small>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group py-3.5 px-5 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Authorize Access</span>
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </div>
    </main>
  );
}
