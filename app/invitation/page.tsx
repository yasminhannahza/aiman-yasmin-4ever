"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/lang";

import Countdown from "@/components/Countdown";
import LanguageToggle from "@/components/LanguageToggle";
import Taskbar from "@/components/Taskbar";

export default function InvitationPage() {
  const { lang } = useLang();
  const t = translations[lang as "bm" | "en"];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎵 autoplay from landing
  useEffect(() => {
    const shouldPlay = sessionStorage.getItem("autoplayMusic");

    if (shouldPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
      sessionStorage.removeItem("autoplayMusic");
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="bg-pink-50 min-h-screen pb-28 text-center">

      {/* 🌐 LANGUAGE */}
      <LanguageToggle />

      {/* 🎵 MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music/jatuh_cinta_lagi.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎧 MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 left-4 z-50 bg-white shadow px-4 py-2 rounded-full text-sm"
      >
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      {/* ================= SECTION 1 - IJAB & QABUL ================= */}
      <section id="home" className="py-20 px-6">
        <h2 className="text-gray-600">Ijab & Qabul</h2>

        <h1 className="couple-name text-5xl text-pink-600 mt-3">
          Aiman & Yasmin
        </h1>

        <p className="mt-2 text-gray-700">
          Sabtu, 21 November 2026
        </p>

        <p className="italic mt-6 text-gray-500">
          “Dan Kami menciptakan kamu berpasang-pasangan”  
          <br /> Surah An-Naba’ [78:8]
        </p>
      </section>

      {/* ================= SECTION 2 - JEMPUTAN ================= */}
      <section className="py-20 bg-white px-6">
        <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-700">
          <b>Bismillahirrahmanirrahim</b><br /><br />
          Assalamualaikum dan salam sejahtera,<br /><br />
          Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang,<br /><br />

          Pihak perempuan<br />
          <b>Zainol Abidin Bin Tahir & Fadilah Binti Abdullah</b><br /><br />

          Dengan penuh rasa kesyukuran, kami menjemput<br />
          <b>Dato | Datin | Tuan | Puan | Encik | Cik</b><br />
          ke majlis perkahwinan anakanda kami.
        </p>
      </section>

      {/* ================= SECTION 3 - PHOTO ================= */}
      <section className="py-20 px-6 space-y-16">

        <div className="flex flex-col items-center">
          <div className="w-40 h-52 bg-pink-200 rounded-xl shadow"></div>
          <p className="mt-3 font-medium">
            Yasmin Hannah Binti Zainol Abidin
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-40 h-52 bg-pink-200 rounded-xl shadow"></div>
          <p className="mt-3 font-medium">
            Aiman Syazwan Bin Adam
          </p>
        </div>
      </section>

      {/* ================= SECTION 4 - DETAILS ================= */}
      <section className="py-20 bg-white px-6 text-gray-700">

        <h2 className="text-lg font-semibold mb-4">Tarikh Majlis</h2>

        <p>
          <b>Akad Nikah</b><br />
          21.11.2026 - Sabtu<br />
          5:00 Petang - 7:00 Malam
        </p>

        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE"
          target="_blank"
          className="text-pink-600 underline block mt-2"
        >
          + Add to Google Calendar
        </a>

        <hr className="my-6" />

        <p>
          <b>Resepsi</b><br />
          22.11.2026 - Ahad<br />
          11:00 Pagi - 4:00 Petang
        </p>

        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE"
          target="_blank"
          className="text-pink-600 underline block mt-2"
        >
          + Add to Google Calendar
        </a>

        <hr className="my-6" />

        <p>
          <b>Lokasi</b><br />
          Kediaman Keluarga Pengantin Perempuan<br />
          60 A Kampung Sungai Che Rahmat,<br />
          34900 Pantai Remis, Perak
        </p>

        <a
          href="https://maps.app.goo.gl/2a5Aa4uXBLEVMzHa6?g_st=ipc"
          target="_blank"
          className="text-pink-600 underline block mt-2"
        >
          View Google Maps
        </a>

        <p className="mt-6">
          <b>Tema Pakaian:</b><br />
          Berpakaian tradisional dan sopan
        </p>
      </section>

      {/* ================= SECTION 5 - DOA ================= */}
      <section className="py-20 px-6 text-gray-700 italic leading-relaxed">
        <p>
          “Ya Allah, berkati majlis perkahwinan mereka.  
          Satukanlah hati kedua mempelai ini seperti Engkau satukan hati Adam & Hawa  
          dan seperti Engkau satukan hati Muhammad S.A.W & Siti Khadijah.  
          Semoga Allah S.W.T memberkati mereka serta menghimpunkan mereka kebaikan  
          dan keberkatan di dunia dan di akhirat.”
        </p>
      </section>

      {/* ================= SECTION 6 - COUNTDOWN ================= */}
      <section className="py-20 bg-white">
        <h2 className="text-gray-700 mb-4">Majlis Akan Bermula</h2>
        <Countdown />
      </section>

      {/* ================= SECTION 7 - GALLERY ================= */}
      <section id="gallery" className="py-20 px-6">
        <h2 className="mb-6">Gallery</h2>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="h-32 bg-pink-200 rounded-xl"></div>
          <div className="h-32 bg-pink-200 rounded-xl"></div>
          <div className="h-32 bg-pink-200 rounded-xl"></div>
          <div className="h-32 bg-pink-200 rounded-xl"></div>
        </div>
      </section>

      {/* ================= SECTION 8 - RSVP ================= */}
      <section id="rsvp" className="py-20 bg-white px-6">
        <h2 className="mb-4">Ucapan & RSVP</h2>

        <textarea
          className="w-full max-w-md mx-auto border p-3 rounded-lg block"
          placeholder="Tulis ucapan..."
        />

        <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full">
          Hantar
        </button>
      </section>

      {/* 🧭 TASKBAR */}
      <Taskbar />

    </main>
  );
}