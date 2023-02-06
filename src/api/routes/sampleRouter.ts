import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const sampleRouter = Router();

export default (app: Router) => {
  app.use("/", sampleRouter);

  sampleRouter.get("/sample", async (req: Request, res: Response) => {
    try {
      console.log("in sample get api")
      return res.json("This is a sample api!");
    } catch (error) {
      console.log(error);
    }
  });

  sampleRouter.post("/sample", async (req: Request, res: Response) => {
  });

  sampleRouter.delete("/sample", async (req: Request, res: Response) => {
  });
};