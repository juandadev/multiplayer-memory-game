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
