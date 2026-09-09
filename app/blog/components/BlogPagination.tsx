"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-white/10 select-none">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1.5 px-4 py-2 border border-white/10 bg-slate-900/60 text-slate-300 text-xs sm:text-sm font-medium hover:border-primary/50 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-sm font-bold border transition-all duration-300 ${
              currentPage === pageNum
                ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                : "border-white/10 bg-slate-900/60 text-slate-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1.5 px-4 py-2 border border-white/10 bg-slate-900/60 text-slate-300 text-xs sm:text-sm font-medium hover:border-primary/50 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 disabled:cursor-not-allowed transition-colors"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
