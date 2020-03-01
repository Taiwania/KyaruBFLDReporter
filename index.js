const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
  console.log("凱留戰地記者已上線，在此為您服務。");
  console.log(client.user.username);
});

client.on('message', msg => {
    if (msg.content === "kr!Hello") {
        msg.reply("歡迎。請不要亂接身體。");
    }
});

client.login(token);