export const generateAndShuffleArray = (size: number): number[] => {
  const arraySize = [];

  for (let i = 0; i < size / 2; i++) {
    arraySize.push(i + 1);
    arraySize.push(i + 1);
  }

  for (let i = arraySize.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arraySize[i], arraySize[j]] = [arraySize[j], arraySize[i]];
  }

  return arraySize;
};

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  return formattedTime;
}
