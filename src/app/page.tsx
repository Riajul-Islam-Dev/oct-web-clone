"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/create_account");
  }, [router]);
  return <h1>Coming soon</h1>;
}
