"use client";

import { useLang } from "@/context/LangContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "bm" ? "en" : "bm")}
      className="fixed top-4 right-4 bg-white shadow px-3 py-1 rounded-full text-sm z-50"
    >
      {lang === "bm" ? "EN" : "BM"}
    </button>
  );
}