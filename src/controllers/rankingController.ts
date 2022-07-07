import { Request, Response } from "express";
import { getRanking } from "../repositories/rankingRepositories.js";

export async function getsRanking(req: Request, res: Response) {
    try {
        const ranking = await getRanking();
        res.status(200).send(ranking);
    }
    catch {
        res.status(500);
    }
}

