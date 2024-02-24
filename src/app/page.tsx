"use client";

import { useState } from "react";
import Board from "@/components/Board";

export default function Home() {
  const [score, setScore] = useState<number>(0);

  const handleScore = () => {
    setScore((prevState) => prevState + 1);
  };

  return (
    <>
      <header className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl">memory</h1>
        <div className="flex gap-2">
          <button className="bg-amber-500 text-white px-6 py-2 rounded-full">
            Restart
          </button>
          <button className="bg-gray-300 text-blue-950 px-6 py-2 rounded-full">
            New Game
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <Board size={16} updateScore={handleScore} />
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center bg-amber-500 text-white p-3 rounded-lg w-40">
            <p>Player 1</p>
            <p className="text-2xl">{score}</p>
          </div>
        </div>
      </main>
    </>
  );
}
