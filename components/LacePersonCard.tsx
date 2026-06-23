"use client";

import { ReactNode } from "react";

type LacePersonCardProps = {
  title: string;
  name: string;
  icon?: ReactNode;
};

export default function LacePersonCard({
  title,
  name,
  icon,
}: LacePersonCardProps) {
  return (
    <div className="lace-person-card">
      <div className="text-center relative z-10">
        {icon && <div className="mb-3 flex justify-center text-3xl">{icon}</div>}

        <h3 className="text-[18px] uppercase tracking-[0.12em] text-[#c97f86]">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-center gap-3 text-pink-400">
          <span className="h-px w-8 bg-pink-300" />
          <span className="text-sm">♡</span>
          <span className="h-px w-8 bg-pink-300" />
        </div>

        <p className="couple-name mt-5 text-[42px] leading-tight text-pink-500">
          {name}
        </p>
      </div>

      <div className="lace-person-flower">🌸</div>
    </div>
  );
}