import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("🚀 Node TODO Server Start");
});
