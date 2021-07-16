module.exports = {
    name: 'kor',
    description: "Quickly announces a warning that kor will begin on a set date",
    usage: '<data and time>',
    cooldown: 5,
    async execute(client, message, args, Discord, prefix){
        message.delete()

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));

        channel = message.guild.channels.cache.find(c => c.name === 'town-crier')
        if(!channel) return message.reply("Channel town-crier is not found.").then(msg => msg.delete({timeout: 60000}));
        let amessage = args.join(" ");
        if(!amessage) return message.reply("Please enter a date and time for illusion").then(msg => msg.delete({timeout: 60000}));



        //.then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent
        const embed = new Discord.MessageEmbed()
        .setTitle(`KoR event`)
        .setDescription(`This is a reminder for the KoR event (Contention of Lords) that is happening on the **${amessage}**`)
        .setColor('#00FFFF')
        .setTimestamp()

        channel.send(`@ here`)
        const msg = await channel.send(embed)



        
    }
}