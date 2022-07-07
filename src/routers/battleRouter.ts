import { Router } from 'express';
import { managesBattle } from '../controllers/battleController.js';
import { fightersValidation, fightersExistenceValidation } from '../middlewares/fightersValidation.js';

const battleRouter = Router();

battleRouter.post("/battle", fightersValidation, managesBattle);

export default battleRouter;