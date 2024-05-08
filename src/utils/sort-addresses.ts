const naturalSortKey = (s: string) => {
  // Split the string into parts: alphabetic and numeric
  const parts: (string | number)[] = s.split(/(\d+)/);
  // Convert numeric parts to numbers for proper numerical sorting
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = parseInt((parts[i] as string), 10);
  }
  return parts;
}

export const sortOptions = (a: string, b: string) => {
  const keyA = naturalSortKey(a);
  const keyB = naturalSortKey(b);
  for (let i = 0; i < Math.min(keyA.length, keyB.length); i++) {
      if (keyA[i] < keyB[i]) return -1;
      if (keyA[i] > keyB[i]) return 1;
  }
  return keyA.length - keyB.length;
}
