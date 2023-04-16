// CREATED BY https://github.com/HalfTurk/ | Telegram: @DevJake

// Fetches token for you in console
const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

const headers = {
    "Authorization": token
};

// Sends request to get all friendships
fetch("https://discord.com/api/users/@me/relationships", {headers})
    .then(response => response.json())
    .then(data => {
        const friends = [];
        data.forEach(friend => {
            const username = friend.user.username;
            const tag = friend.user.discriminator;
            const id = friend.user.id;
            const full_username = `${username}#${tag}`;
            friends.push(`${full_username} | ${id}`);
        });
        friends.forEach(friend => console.log(friend));
    })
    .catch(error => console.log(error));
