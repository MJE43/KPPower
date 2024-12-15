export type AppUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
