const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "Application/json",
        "User-Agent": "Writing Javascript action Github skills course.",
    },
    json:true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;