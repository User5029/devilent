require('dotenv').config
const moment = require('moment')
const cooldowns = new Map()

module.exports = async (Discord, client, message) => {
    let prefix = process.env.PREFIX
    const member = message.member
    if(!message.guild) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection())
    }

    const current_time = Date.now()
    const time_stamps = cooldowns.get(command.name)
    const cooldown_amount = (command.cooldown) * 1000 || 3000

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${prefix}${command.name}`);
        }
    }
    
    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    
    try {
        if(command) command.execute(client, message, args, Discord, prefix);
    } catch (err) {
        message.reply("Cant execute command please try again later");
        console.log(err);
    }
    
}
