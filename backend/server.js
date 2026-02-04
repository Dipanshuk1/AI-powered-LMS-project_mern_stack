import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./configs/mongodb.js";

dotenv.config();
const app = express();
await connectDB();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 