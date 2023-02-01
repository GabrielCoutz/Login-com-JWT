import jwt from "jsonwebtoken";

export default (token) => jwt.verify(token, process.env.JWT_SECRET);
