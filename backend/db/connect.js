import mongoose from "mongoose";

let db;

//** Db Connection */
export const connect = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB is Connected");
      db = mongoose.connection.db;
    })
    .catch((err) => {
      console.log(`DB Connection error: ${err}`);
    });
};

export { db };

// import mongoose from "mongoose";

// //** Db Connection */

// export const connect = () => {
//   mongoose.set("strictQuery", true);
//   mongoose
//     .connect("mongodb://127.0.0.1:27017/testdb", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("DB is Connected");
//     })
//     .catch((err) => {
//       console.log(`DB Connection error: ${err}`);
//     });
// };

//connect.js
