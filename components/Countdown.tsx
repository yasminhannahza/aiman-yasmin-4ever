"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-11-21T17:00:00");

  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-medium">
      {time.d}d {time.h}h {time.m}m {time.s}s
    </div>
  );
}