"use-client";

import { generateAndShuffleArray } from "@/utils";
import Token from "./Token";

type BoardProps = {
  size: number;
};

export default function Board({ size }: BoardProps) {
  const generateGameTokens = generateAndShuffleArray(size).map(
    (item: number, index: number) => (
      <Token key={`token-${index}-${item}`} value={item} />
    ),
  );

  return (
    <div className="grid grid-cols-4 grid-rows-4 my-10 gap-5">
      {generateGameTokens}
    </div>
  );
}
