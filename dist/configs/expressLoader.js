import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import api from "../api";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", api);
export default () => {
    app.listen(port, () => {
        console.log(`⚡️[SERVER]: Server is running at http://localhost:${port}...`);
    });
    return 0;
};
