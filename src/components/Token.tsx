"use client";

import React, { useState } from "react";

type TokenProps = {
  value: number;
};

export default function Token({ value }: TokenProps) {
  const [color, setColor] = useState<string>("bg-sky-950");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    setColor((prevState: string) => {
      if (prevState === "bg-sky-950") return "bg-blue-200";

      return "bg-sky-950";
    });

    if (color === "bg-sky-950") {
      target.innerHTML = `${value}`;
    } else {
      target.innerHTML = "";
    }
  };

  return (
    <div
      className={`${color} w-20 h-20 rounded-full flex justify-center items-center text-4xl select-none cursor-pointer`}
      onClick={handleClick}
    />
  );
}
