"use client";

import { useState } from "react";

export default function Taskbar() {
  const [active, setActive] = useState("home");

  const items = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12 11.204 3.046a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75v8.25A1.5 1.5 0 0 0 6 19.5h3.75v-4.125A1.125 1.125 0 0 1 10.875 14.25h2.25a1.125 1.125 0 0 1 1.125 1.125V19.5H18a1.5 1.5 0 0 0 1.5-1.5V9.75"
          />
        </svg>
      ),
    },
    {
      id: "event",
      label: "Event",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v11.25a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V6.75a1.5 1.5 0 0 1 1.5-1.5Z"
          />
        </svg>
      ),
    },
    {
      id: "location",
      label: "Location",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 4.72-4.72a1.125 1.125 0 0 1 1.59 0l2.94 2.94a1.125 1.125 0 0 0 1.59 0l5.16-5.16a1.125 1.125 0 0 1 1.59 0l1.91 1.91"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 8.25h.008v.008h-.008V8.25Z"
          />
        </svg>
      ),
    },
    {
      id: "rsvp",
      label: "RSVP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3 6 8.29 6.217a1.2 1.2 0 0 0 1.42 0L21 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full px-4 pb-4">
      <div className="mx-auto max-w-md rounded-3xl bg-pink-500 shadow-2xl border border-pink-400/40">
        <div className="grid grid-cols-5 items-center py-3">
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    isActive ? "bg-white/20 scale-105" : "bg-transparent"
                  } text-white`}
                >
                  {item.icon}
                </div>

                <span
                  className={`text-[10px] leading-none transition ${
                    isActive ? "text-white font-medium" : "text-white/80"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}