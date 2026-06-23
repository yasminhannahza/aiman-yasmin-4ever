"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);

    sessionStorage.setItem("autoplayMusic", "true");

    setTimeout(() => {
      router.push("/invitation");
    }, 800);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 overflow-hidden">
      <div
        className={`relative w-[360px] h-[460px] bg-white shadow-2xl rounded-2xl flex items-center justify-center transition-all duration-700 ease-in-out ${
          leaving ? "opacity-0 translate-y-24 scale-95" : "opacity-100"
        }`}
      >
        <div className="absolute left-0 w-1/2 h-full bg-pink-100 rounded-l-2xl" />
        <div className="absolute right-0 w-1/2 h-full bg-pink-100 rounded-r-2xl" />

        <div className="z-10 text-center px-4">
          <p className="text-sm text-gray-500 mb-2">You are invited to</p>

          <h1 className="couple-name text-4xl text-pink-600">
            Aiman & Yasmin
          </h1>

          <p className="text-xs text-gray-500 mt-2">Wedding Invitation</p>
        </div>

        <button
          onClick={handleEnter}
          className="absolute bottom-6 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:scale-110 transition"
        >
          ❤️
        </button>
      </div>
    </main>
  );
}