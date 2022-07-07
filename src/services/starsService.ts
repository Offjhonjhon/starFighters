import axios from "axios";

export async function getStars(userName: string) {
    try {
        const githubUrl = `https://api.github.com/users/${userName}/repos`
        const userData = await axios.get(githubUrl);

        const starArray = userData.data.map(repo => repo.stargazers_count);

        return starArray.reduce(function (accumulator: number, currentValue: number) {
            return accumulator + currentValue;
        }, 0);
    }
    catch (error) {
        console.log(error);
    }
}
