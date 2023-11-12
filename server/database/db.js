//MongoDB Connection...
import mongoose from "mongoose";
const Connection = async () => {
  const URL = `mongodb://touqeer:Ansari@2001@cluster.l6nzyoa.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log("database connect sussessfully...");
  } catch (error) {
    console.log("Error while connecting the database..", error);
  }
};

export default Connection;
