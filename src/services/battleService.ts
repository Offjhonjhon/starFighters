import { verifyFighterExistence, insertFighter } from "../repositories/userRepositories.js";
import { updateBatlleResult } from "../repositories/userRepositories.js";

export async function setWinner(firstUserStars: number, secondUserStars: number, firstUser: string, secondUser: string) {
    if (firstUserStars > secondUserStars) {
        return {
            winner: firstUser,
            loser: secondUser,
            draw: false
        };
    }
    else if (firstUserStars < secondUserStars) {
        return {
            winner: secondUser,
            loser: firstUser,
            draw: false
        };
    }
    else {
        return {
            winner: null,
            loser: null,
            draw: true
        };
    }
}

export async function managesResult(result, firstUser: string, secondUser: string) {
    try {
        const { winner, loser, draw } = result;

        const winnerExists = await verifyFighterExistence(winner);
        const loserExists = await verifyFighterExistence(loser);

        if (!winnerExists) {
            await insertFighter(winner);
        }
        if (!loserExists) {
            await insertFighter(loser);
        }

        await updateBatlleResult(winner, loser, draw);

    }
    catch (error) {
        console.log(error);
    }

}



