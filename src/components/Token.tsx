"use client";

import React, { useRef } from "react";

type TokenProps = {
  flipped: boolean;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onClick(value: number, index: number): void;
  value: number;
};

export default function Token({ flipped, index, onClick, value }: TokenProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  if (ref.current && flipped) {
    ref.current.innerHTML = `${value}`;
  } else if (ref.current && !flipped) {
    ref.current.innerHTML = "";
  }

  const handleClick = () => {
    if (!flipped) {
      onClick(value, index);
    }
  };

  return (
    <div
      className={`${flipped ? "bg-blue-200" : "bg-sky-950"} w-20 h-20 rounded-full flex justify-center items-center text-4xl select-none cursor-pointer`}
      ref={ref}
      onClick={handleClick}
    />
  );
}
