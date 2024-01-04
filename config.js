module.exports = {
TOKEN: "MTE5MjQwNDc2NzkzNTMxMTk1Mw.Gi-nfq.lGGCs-RJ_AgOOg-76GSrsm1Gbyh-2QiWSIS5B0",
ownerID: ["1153172663838195724"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1192404767935311953&permissions=8&redirect_uri=https%3A%2F%2Fkgufycfdmjhvyut-f673959e18a8.herokuapp.com%2F&scope=bot", //write your discord bot invite.
supportServer: "idk", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://indumina1:indumina1@cluster0.y0pxmkf.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
status: '❤️ imsus',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
embedColor: "ffa954", //hex color code
errorLog: "opps", //write your discord error log channel id.


sponsor: {
status: false, //true or false
url: "idk", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
