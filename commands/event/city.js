module.exports = {
    name: 'city',
    description: "City seige command for quickly announcing city seiges",
    usage: '<on or in> <time and/or date>',
    async execute(client, message, args, Discord, prefix){
        message.delete()

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));

        channel = message.guild.channels.cache.find(c => c.name === 'town-crier')
        if(!channel) return message.reply("Channel town-crier is not found.").then(msg => msg.delete({timeout: 60000}));
        let amessage = args.slice(1).join(" ")
        if(!amessage) return message.reply("Please enter a date and time for city seige").then(msg => msg.delete({timeout: 60000}));

        if(args[0] === 'on') {
            const embed = new Discord.MessageEmbed()
            .setTitle(`City seige`)
            .setDescription(`City seige on **${amessage}**`)
            .setColor('#00FFFF')
            .setTimestamp()
    
            channel.send(`@ here`)
            const msg = await channel.send(embed)            
        } else if(args[0] === 'in') {
            const embed = new Discord.MessageEmbed()
            .setTitle(`City seige`)
            .setDescription(`City seige in **${amessage}** minutes`)
            .setColor('#00FFFF')
            .setTimestamp()
    
            channel.send(`@ here`)
            const msg = await channel.send(embed)
        } else {
            message.reply("Please enter a date and time or how long until the seige").then(msg => msg.delete({timeout: 60000}));
        }        
    }
}