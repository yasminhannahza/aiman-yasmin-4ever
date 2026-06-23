"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    setLeaving(true);
    sessionStorage.setItem("autoplayMusic", "true");

    setTimeout(() => {
      router.push("/invitation");
    }, 700);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div
        className={`w-[360px] h-[460px] bg-white shadow-xl rounded-2xl flex items-center justify-center transition-all duration-700 ${
          leaving ? "opacity-0 scale-95" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <p className="text-gray-500 text-sm">You are invited to</p>

          <h1 className="couple-name text-4xl text-pink-600 mt-2">
            Aiman & Yasmin
          </h1>
        </div>

        <button
          onClick={enter}
          className="absolute bottom-6 w-14 h-14 bg-pink-500 text-white rounded-full"
        >
          ❤️
        </button>
      </div>
    </main>
  );
}