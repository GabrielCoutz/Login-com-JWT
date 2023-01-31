import bycrypt from "bcrypt";

export default async (password, passwordHash) =>
  await bycrypt.compare(password, passwordHash);
