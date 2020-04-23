const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url =
  "mongodb+srv://daniil:01020304@cluster0-esoug.mongodb.net/test?retryWrites=true&w=majority";

// Database Name
const dbName = "USER_DB";

var dbConn: null = null;

const connect = async () => {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    console.log("Cannot Connect to DB", err);
    throw err;
  }
};

const getCollection = async (collectionName: string) => {
  const db = await connect();
  return db.collection(collectionName);
};

export default {
  getCollection,
};
