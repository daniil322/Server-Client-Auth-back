import dbService from "../../services/MongoDb.service";
import User from "../../interfaces/Users";
import { ObjectID } from "mongodb";

const login = async (user: User) => {
  const collection = await dbService.getCollection("users");
  try {
    const loggedUser = await collection
      .find({ username: user.username })
      .toArray();
    return loggedUser[0];
  } catch (err) {
    console.log("ERROR: cannot find users");
    throw err;
  }
};

const update = async (user: User) => {
  const collection = await dbService.getCollection("users");
  const objectId = new ObjectID(user._id);
  delete user._id;
  try {
    await collection.updateOne({ _id: objectId }, { $set: user });
    return user;
  } catch (err) {
    console.log(`ERROR: cannot update user ${user._id}`);
    throw err;
  }
};

const _checkExistingUsername = async (user: User) => {
  const collection = await dbService.getCollection("users");
  const loggedUser = await collection
    .find({ username: user.username })
    .toArray();
  return loggedUser[0];
};

const register = async (user: User) => {
  const existingUser: User = await _checkExistingUsername(user);
  if (existingUser) throw "UserName already exists";
  try {
    const collection = await dbService.getCollection("users");
    await collection.insertOne(user);
    return user;
  } catch (err) {
    console.log(`ERROR: cannot add user`);
    throw err;
  }
};

export default { register, update, login };
