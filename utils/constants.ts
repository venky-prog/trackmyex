export const DATE_REGEX =
  /^(0[1-9]|[12][0-9]|3[01])([/-])(0[1-9]|1[0-2])\2\d{4}$/;
export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{}|;:'",.<>?/]{8,}$/;

export const passwordErrorMessage =
  "Password must be at least 8 characters long and include at least one letter and one number. Only common symbols are allowed.";

export const dateErrorMessage =
  "Date must be in the format DD/MM/YYYY or DD-MM-YYYY and be a valid calendar date.";

export const dateOverErrorMessage = "Date of birth indicates an age below 10 years. Please enter a valid date of birth.";

export const passwordMissMatchErrorMessage = "Password and confirmation password should match.";