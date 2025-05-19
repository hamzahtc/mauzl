import {
  format,
  getDate,
  getMonth,
  getYear,
  isValid,
  parseISO,
} from "date-fns";

export const formatBirthDate = (
  day: number,
  month: number,
  year: number
): string => {
  const date = new Date(year, month, day);
  if (!isValid(date)) throw new Error("Invalid date");
  return format(date, "yyyy-MM-dd");
};

export const extractDayMonthYear = (birthDate: string | Date) => {
  const date = typeof birthDate === "string" ? parseISO(birthDate) : birthDate;

  return {
    birthDay: getDate(date),
    birthMonth: getMonth(date) + 1,
    birthYear: getYear(date),
  };
};
