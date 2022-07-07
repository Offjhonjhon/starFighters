import { Request, Response } from "express";
import { getStars } from "../services/starsService.js";
import { setWinner, managesResult } from "../services/battleService.js";

export async function managesBattle(req: Request, res: Response) {

    try {
        const { firstUser, secondUser } = req.body;

        const firstUserStars = await getStars(firstUser);
        const secondUserStars = await getStars(secondUser);

        const result = await setWinner(firstUserStars, secondUserStars, firstUser, secondUser);

        await managesResult(result, firstUser, secondUser);

        res.status(200).send(result);
    }
    catch {
        res.status(500);
    }
}

