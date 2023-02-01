import bycrypt from "bcrypt";

export default async (password) => await bycrypt.hash(password, 12);
