"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = sessionStorage?.getItem("isAdmin");

    if (isAdmin != "true") {
      router.replace("/admin-verification");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <div>
      <h1 className="text-9xl text-white">I am Admin Muhahahaha</h1>
    </div>
  );
}
