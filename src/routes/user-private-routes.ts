import express, { Express, Request, Response } from "express";

import type { Domains } from "../domains";

export const setupUserPrivateRouter = (app: Express, domains: Domains) => {
  var userPrivateRouter = express.Router();

  // TODO: implement a middleware to validate user and team params

  userPrivateRouter.get(
    "/notifications-api/team/:teamID/user/:userID/notifications",
    async (req: Request<{ teamID: string; userID: number }>, res: Response) => {
      console.log("params", req.params);
      const data = await domains.notification.findAll(
        req.params.teamID,
        req.params.userID,
      );
      res.send(data);
    },
  );

  app.use(userPrivateRouter);
};
