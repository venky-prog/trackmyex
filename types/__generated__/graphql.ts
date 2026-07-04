export type CreateUserInput = {
  dob: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};
