import express from "express";
import { connect } from "./db/connect.js";
import router from "./routes/userAuth.js";
import cors from "cors";

const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use("/api/userAuth", router);

app.listen(5001, () => {
  console.log("Sever Started");
});

// app.post("/post" ,async (req, res) => {
//         console.log(req.body);
//         const {data}=req.body;

//         if(data=="subhan"){
//             res.send({status:"ok"})
//         }
//     })
