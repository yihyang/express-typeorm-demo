import * as express from "express";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";

import routes from "./routes";


createConnection().then(async connection => {
  // create and setup express app
  const PORT_NUM = 3000;
  const app = express();
  app.use(bodyParser.json());

  app.use("/", routes);

  // start express server
  app.listen(PORT_NUM);
console.log(`Application started at ${PORT_NUM}`);
})
