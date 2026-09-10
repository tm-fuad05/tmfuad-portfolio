export default function ButtonSecondary({
  children,
  w = "fit",
}: {
  children: React.ReactNode;
  w?: "fit" | "full";
}) {
  return (
    <button
      className={`w-full sm:w-${w} border border-primary text-white  px-4 py-2 font-semibold hover:shadow-sm hover:shadow-primary cursor-pointer duration-300 capitalize flex items-center justify-center gap-2`}
    >
      {children}
    </button>
  );
}
