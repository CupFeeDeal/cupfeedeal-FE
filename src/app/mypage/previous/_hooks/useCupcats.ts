export function chunk<T>(array: T[], size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export const levelToCount: { [key: number]: string } = {
  1: "한",
  2: "두",
  3: "세",
  4: "네",
  5: "다섯",
  6: "여섯",
  7: "일곱",
  8: "여덟",
  9: "아홉",
  10: "열",
};

// 컵캣 간격 커스텀
export const getColumnStyle = (
  rowIndex: number,
  colIndex: number
): React.CSSProperties => {
  // rowIndex: 0, 1, 2 (각 그룹)
  // colIndex: 0, 1, 2 (해당 그룹 내에서의 위치)
  if (rowIndex === 0) {
    // 첫 번째 줄 (1~3번)
    if (colIndex === 0) return { left: "5%" };
    if (colIndex === 1) return { right: "30%" };
    if (colIndex === 2) return { right: "5%" };
  } else if (rowIndex === 1) {
    // 두 번째 줄 (4~6번)
    if (colIndex === 0) return { left: "3%" };
    if (colIndex === 1) return { right: "22%" };
    if (colIndex === 2) return { left: "29.5%" };
  } else if (rowIndex === 2) {
    // 세 번째 줄 (7~9번째)
    if (colIndex === 0) return { left: "20%" };
    if (colIndex === 1) return { right: "30%" };
    if (colIndex === 2) return { right: "5%" };
  }
  return {};
};
