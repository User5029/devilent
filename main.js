const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER']});
require("dotenv").config()

client.commands = new Discord.Collection();

['command', 'event'].forEach(handler => {
    require(`./handler/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN)