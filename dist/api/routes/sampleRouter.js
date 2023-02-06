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
const sampleRouter = Router();
export default (app) => {
    app.use("/", sampleRouter);
    sampleRouter.get("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("in sample get api");
            return res.json("This is a sample api!");
        }
        catch (error) {
            console.log(error);
        }
    }));
    sampleRouter.post("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    }));
    sampleRouter.delete("/sample", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    }));
};
