import { Router } from 'express';
import sampleRouter from './routes/sampleRouter';
const apiRouter = Router();
sampleRouter(apiRouter);
export default apiRouter;
