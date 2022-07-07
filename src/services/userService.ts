import axios from "axios";

export async function verifyFighterExistenceGithub(userName: string) {
    try {
        const githubUrl = `https://api.github.com/users/${userName}`
        const userData = await axios.get(githubUrl);

        return userData.data;
    }
    catch (error) {
        console.log(error);
    }
}
