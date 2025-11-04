export const formatWithLeadingZeros = (num: number, length: number = 2): string => {
  return String(num).padStart(length, '0');
};

export const formatIndex = (index: number, length: number = 2): string => {
  return formatWithLeadingZeros(index + 1, length);
};

