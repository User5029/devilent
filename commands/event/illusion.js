module.exports = {
    name: 'illusion',
    description: "Quickly announces the date and time of the illusion battle",
    usage: '<date and time range>',
    async execute(client, message, args, Discord, prefix){

        message.delete()
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));

        channel = message.guild.channels.cache.find(c => c.name === 'town-crier')
        if(!channel) return message.reply("Channel town-crier is not found.").then(msg => msg.delete({timeout: 60000}));
        let amessage = args.join(" ");
        if(!amessage) return message.reply("Please enter a date and time for illusion").then(msg => msg.delete({timeout: 60000}));



        //.then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent
        const embed = new Discord.MessageEmbed()
        .setTitle(`Illusion event`)
        .setDescription(`This is a reminder for the illusion event that is happening on the **${amessage}**\nReact to this message if you are participating 1️⃣ for primary and 2️⃣ for secondary. If you are not partipating react with 🛑`)
        .setColor('#00FFFF')
        .setTimestamp()

        const one = '1️⃣'
        const two = '2️⃣'
        const three = '🛑'

        channel.send(`@ here`)
        const msg = await channel.send(embed)
        await msg.react(one)
        await msg.react(two)
        await msg.react(three)



        
    }
}