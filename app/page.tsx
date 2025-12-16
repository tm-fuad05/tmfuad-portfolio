import Banner from "@/components/sections/Banner";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-30 lg:gap-56">
      <div>
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
