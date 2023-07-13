import { db } from "../db/connect.js";

export const formSubmit = async (req, res) => {
  const { name, email, phone, comment } = req.body;

  try {
    const collection = db.collection("forms");
    await collection.insertOne({ name, email, phone, comment });
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
