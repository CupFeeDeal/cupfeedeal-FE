export function chunk<T>(array: T[], size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export const catPositions = [
  { top: "20.5%", left: "5%" },
  { top: "20.5%", right: "30%" },
  { top: "20.5%", right: "5%" },

  { top: "48%", left: "3%" },
  { top: "48%", left: "27%" },
  { top: "48%", left: "52%" },

  { top: "75%", left: "20%" },
  { top: "75%", right: "30%" },
  { top: "75%", right: "5%" },
];
