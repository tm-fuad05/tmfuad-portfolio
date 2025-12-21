import CustomLoader from "@/components/shared/CustomLoader";
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CustomLoader />
    </div>
  );
}
