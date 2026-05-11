export const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
export const phoneRegex = /^[\d\s\-+()]{7,15}$/;

export function isEmail(value: string) {
  return emailRegex.test(value);
}

export function isPhone(value: string) {
  return phoneRegex.test(value);
}

export function isCardNumber(value: string) {
  const digits = value.replace(/\s/g, "");
  return /^\d{13,19}$/.test(digits);
}
