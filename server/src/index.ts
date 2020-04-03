import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import { requestLoggerMiddleware } from "./middleware";

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(requestLoggerMiddleware);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello Word!");
});

app.listen(4000, () => {
  console.log("🚀 Node TODO Server Start");
});
