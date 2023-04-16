// CREATED BY https://github.com/HalfTurk/ | Telegram: @DevJake

// Fetches token for you in console
const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

const headers = {
    "Authorization": token
};

// Sends request to get all guilds
fetch("https://discord.com/api/users/@me/guilds", {headers})
    .then(response => response.json())
    .then(data => {
        const guilds = [];
        data.forEach(guild => {
            const name = guild.name;
            const id = guild.id;
            const owner = guild.owner;
            guilds.push(`${name} | ${id} | Owner: ${owner}`);
        });
        guilds.forEach(guild => console.log(guild));
    })
    .catch(error => console.log(error));
