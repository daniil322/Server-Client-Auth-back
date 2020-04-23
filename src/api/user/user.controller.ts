import { Request, Response } from "express";
import userService from "./user.service";
import { generateToken } from "../../middlewares/jwt.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const loggedInUser = await userService.login(user);
    const token = generateToken(user);
    loggedInUser.token = token.token;
    res.send(loggedInUser);
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const user = await userService.update(newUser);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const registerUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const user = await userService.register(newUser);
    const token = generateToken(user);
    user.token = token.token;
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "username already exists" });
  }
};

export default { loginUser, updateUser, registerUser };
