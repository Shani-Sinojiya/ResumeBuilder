import mongoose from "mongoose";

const DBConn = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected");
    return;
  }
  mongoose.connect(`${process.env.MONGODB_URI}`, {}, (err: any) => {
    if (err) throw err;
    console.log("Connection Sucssesful");
  });
};

export default DBConn;