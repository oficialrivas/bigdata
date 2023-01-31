import { connect, connection, mongoose } from "mongoose";


mongoose.set('strictQuery', false);

const conn = {
  isConnected: false
}

export async function dbConnect(){
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URL);

 
  conn.isConnected = db.connections[0].readyState;

  console.log(db.connection.db.databaseName)
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));