module.exports = {
    name: 'announce',
    aliases: ['pingall', 'alert', 'announcement'],
    description: "Announce custom message to annoucment channel",
    usage: "<message>",
    async execute(client, message, args, Discord, prefix){  
        message.delete() 
        channel = message.guild.channels.cache.find(c => c.name === 'town-crier')
        if(!channel) return;
        let amessage = args.join(" ");
        if(!amessage) return;

        //.then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent
        const embed = new Discord.MessageEmbed()
        .setDescription(` ${amessage}`)
        .setColor('#00FFFF')
        .setTimestamp()

        channel.send(`@ here`)
        channel.send(embed)

        
    }
}