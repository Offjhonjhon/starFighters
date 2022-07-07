import { Router } from 'express';
import { getsRanking } from '../controllers/rankingController.js';

const rankingRouter = Router();

rankingRouter.get("/ranking", getsRanking);

export default rankingRouter;