import jwt from "jsonwebtoken";
import User from "../interfaces/Users";

const checkToken = (token: string) => {};

const getNewToken = (user: User) => {};

export { getNewToken, checkToken };
