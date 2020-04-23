import jwt from "jsonwebtoken";
import User from "../interfaces/Users";
import { Request, Response } from "express";

const tokenMiddelware = (req: Request, res: Response, next: Function) => {
  try {
    const user = req.body;
    jwt.verify(user.token, "secret");
    next();
  } catch (err) {
    throw err;
  }
};

const generateToken = (user: User) => {
  const token = jwt.sign(user, "secret");
  user.token = token;
  return user;
};

export { generateToken, tokenMiddelware };
