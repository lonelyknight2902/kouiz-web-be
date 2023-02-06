var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { SampleController } from "../../controllers/sample.controller";
const sampleRouter = Router();
export default (app) => {
    app.use("/", sampleRouter);
    sampleRouter.get("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return res.json(SampleController.getSample());
        }
        catch (error) {
            console.log(error);
        }
    }));
    sampleRouter.post("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { x, y } = req.body;
        try {
            yield SampleController.createSample(x, y);
            return res.status(StatusCodes.CREATED).json({
                info: {
                    message: "SUCCESS_CREATED",
                },
            });
        }
        catch (error) {
            console.log(error);
        }
    }));
    sampleRouter.delete("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { x } = req.body;
        try {
            yield SampleController.deleteSample(x);
            return res.status(StatusCodes.OK).json({
                info: {
                    message: "SUCCESS_DELETED",
                },
            });
        }
        catch (error) {
            console.log(error);
        }
    }));
};
