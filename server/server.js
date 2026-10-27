import express from "express";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/productRoute.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("/{*path}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});