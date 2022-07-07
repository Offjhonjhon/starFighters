import fightersSchema from "../schemas/fightersSchema.js";
import { Request, Response } from "express";
import { verifyFighterExistenceGithub } from "../services/userService.js";

export function fightersValidation(req: Request, res: Response, next) {
    const fighters = req.body;
    const { error } = fightersSchema.validate(fighters);

    if (error) {
        res.status(422).send(error.details.map(d => d.message));
    }

    next();
};

export function fightersExistenceValidation(req: Request, res: Response, next) {
    const { firstUser, secondUser } = req.body;

    const firstFighterExists = verifyFighterExistenceGithub(firstUser);
    const secondFighterExists = verifyFighterExistenceGithub(secondUser);

    Promise.all([firstFighterExists, secondFighterExists])
        .then(() => {
            next();
        })
        .catch(() => {
            res.status(404).send("One or more fighters do not exist");
        });
}

