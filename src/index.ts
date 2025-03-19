import express, { Express, Request, Response } from "express";

import config from "./config";
import { setupModels } from "./models";
import { setupDomains } from "./domains";
import { setupUserPrivateRouter } from "./routes/user-private-routes";

// Init all dependencies
const models = setupModels();
const domains = setupDomains(models);

// Setup server routes
const app: Express = express();

app.get("/healthcheck", (req: Request, res: Response) => {
  // TODO: route used by k8s to check health status for this pod
  // it should return bad status code if some important dependency isn't ok.
  res.sendStatus(200);
});

setupUserPrivateRouter(app, domains);

app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
});

// TODO: handle graceful shutdown
