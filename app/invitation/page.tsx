"use client";

import { useEffect, useRef, useState } from "react";
import Taskbar from "@/components/Taskbar";

export default function InvitationPage() {
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // autoplay music
  useEffect(() => {
    const shouldAutoplay = sessionStorage.getItem("autoplayMusic");

    if (shouldAutoplay === "true" && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));

      sessionStorage.removeItem("autoplayMusic");
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Play failed:", err);
      }
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center px-6 pt-10 pb-32 relative">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/music/jatuh_cinta_lagi.mp3" type="audio/mpeg" />
      </audio>

      {/* CARD */}
      <div
        className={`bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-gray-500 mb-2">
          Dengan penuh kesyukuran kami menjemput
        </p>

        <h1 className="couple-name text-4xl text-pink-600">
          Aiman & Yasmin
        </h1>

        <p className="text-gray-600 mt-2">Majlis Perkahwinan</p>

        <div className="mt-4 text-gray-700">
          <p>Sabtu, 12 Julai 2026</p>
          <p>Dewan Seri Indah</p>
        </div>

        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full">
          RSVP Sekarang
        </button>
      </div>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-28 right-6 w-14 h-14 rounded-full bg-pink-500 text-white shadow-xl flex items-center justify-center hover:scale-110 transition"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <Taskbar />
    </main>
  );
}