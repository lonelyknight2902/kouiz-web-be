import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { SampleController } from "../../controllers/sample.controller";

const sampleRouter = Router();

export default (app: Router) => {
  app.use("/", sampleRouter);

  sampleRouter.get("/sample", async (req: Request, res: Response) => {
    try {

      return res.json(SampleController.getSample());
    } catch (error) {
      console.log(error);
    }
  });

  sampleRouter.post("/sample", async (req: Request, res: Response) => {
    const { x, y } = req.body;
    try {
      await SampleController.createSample(x, y);
      return res.status(StatusCodes.CREATED).json({
        info: {
          message: "SUCCESS_CREATED",
        },
      });
    } catch (error) { console.log(error) }
  });

  sampleRouter.delete("/sample", async (req: Request, res: Response) => {
    const { x } = req.body;
    try {
      await SampleController.deleteSample(x);
      return res.status(StatusCodes.OK).json({
        info: {
          message: "SUCCESS_DELETED",
        },
      });
    } catch (error) { console.log(error) }
  });
};