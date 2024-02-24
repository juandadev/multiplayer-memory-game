"use client";

import React, { useEffect, useState } from "react";
import { generateAndShuffleArray } from "@/utils";
import Token from "./Token";

type BoardProps = {
  size: 16 | 36;
  updateScore(): void;
};

export default function Board({ size, updateScore }: BoardProps) {
  const [gameTokens] = useState<number[]>(generateAndShuffleArray(size));
  const [flippedValues, setFlippedValues] = useState<number[][]>([]);
  const [playedValues, setPlayedValues] = useState<number[][]>([]);

  const handleTokenClick = (value: number, index: number) => {
    setFlippedValues((prevState) => [...prevState, [value, index]]);
    setPlayedValues((prevState) => [...prevState, [value, index]]);
  };

  const renderGameTokens = () => {
    return gameTokens.map((item: number, index: number) => {
      let isFlipped = false;

      if (flippedValues) {
        isFlipped =
          flippedValues.filter((el) => el[0] === item && el[1] === index)
            .length === 1;
      }

      return (
        <Token
          flipped={isFlipped}
          index={index}
          key={`token-${index}-${item}`}
          onClick={handleTokenClick}
          value={item}
        />
      );
    });
  };

  useEffect(() => {
    if (playedValues.length === 2) {
      setTimeout(() => {
        const areTwoEqual: boolean = playedValues[0][0] === playedValues[1][0];

        if (areTwoEqual) {
          updateScore();
        } else {
          const newArray = flippedValues.slice(0, -2);
          setFlippedValues(newArray);
        }

        setPlayedValues([]);
      }, 800);
    }
  }, [flippedValues, playedValues, updateScore]);

  return (
    <div
      className={`grid ${size === 16 ? "grid-cols-4 grid-rows-4" : "grid-cols-6 grid-rows-6"} my-10 gap-5`}
    >
      {renderGameTokens()}
    </div>
  );
}
