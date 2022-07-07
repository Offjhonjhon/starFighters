import connection from "../config/database.js";

export async function insertFighter(userName: string) {
    await connection.query(
        `INSERT INTO fighters ("username", "wins", "losses", "draws") VALUES (?)`,
        [userName, 0, 0, 0]
    );
}

export async function verifyFighterExistence(userName: string) {
    const user = await connection.query(
        `SELECT * FROM fighters WHERE username = ?`,
        [userName]
    );
    return user.rows.length > 0;
}

export async function updateBatlleResult(winner: string, loser: string, draw: boolean) {
    if (draw) {
        await connection.query(
            `UPDATE fighters SET draws = draws + 1 WHERE username = ?`,
            [winner]
        );
        await connection.query(
            `UPDATE fighters SET draws = draws + 1 WHERE username = ?`,
            [loser]
        );
    }
    else {
        await connection.query(
            `UPDATE fighters SET wins = wins + 1 WHERE username = ?`,
            [winner]
        );
        await connection.query(
            `UPDATE fighters SET losses = losses + 1 WHERE username = ?`,
            [loser]
        );
    }
}