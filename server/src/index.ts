import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import todoRouter from "./routes/todoRoutes";

const startServer = async () => {
  const app = express();

  app.use(compression());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.json());

  app.use("/todo", todoRouter);

  app.listen(4000, () => {
    console.log("🚀 Node TODO Server Start");
  });

  await createConnection();
};

startServer();
