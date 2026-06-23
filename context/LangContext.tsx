"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "bm" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("bm");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLang must be used within LangProvider");
  }

  return context;
}