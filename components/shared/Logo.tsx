import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <figure className="relative w-10 h-7 md:w-12 md:h-8 transition-transform duration-300 hover:scale-105">
      <Link href="#home" className="block w-full h-full">
        <Image
          fill
          src="/images/logo2.png"
          alt="Logo"
          className="object-contain"
        />
      </Link>
    </figure>
  );
}
