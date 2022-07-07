import connection from "../config/database.js";

export async function getRanking() {
    await connection.query(
        `
            SELECT username, wins, losses, draws
            FROM fighters
            ORDER BY wins DESC, draws DESC
        `
    );
}
