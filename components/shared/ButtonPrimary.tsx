export default function ButtonPrimary({
  children,
  w = "fit",
  sw = "fit",
  hidden = false,
  disabled = false,
}: {
  children: React.ReactNode;
  w?: "fit" | "full";
  sw?: "fit" | "full";
  hidden?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`relative group ${hidden ? "hidden sm:block" : "block"} w-${sw} sm:w-${w} overflow-hidden p-px font-medium transition-all duration-300 active:scale-[0.99] disabled:active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed  cursor-pointer`}
    >
      <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-sky-400 transition-all duration-500 group-hover:opacity-90" />
      <div className="relative px-6 py-2 bg-slate-950/60 backdrop-blur-md -[11px] flex items-center justify-center gap-2 text-white font-semibold group-hover:bg-transparent transition-all duration-300">
        {children}
      </div>
    </button>
  );
}
