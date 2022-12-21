// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const chunkArray = <ArrayType extends unknown>({
  array,
  chunkSize,
}: {
  array: ArrayType[];
  chunkSize: number;
}): ArrayType[][] => {
  const chunks = [];

  for (let i = 0; i < array.length; i = i + chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
};
