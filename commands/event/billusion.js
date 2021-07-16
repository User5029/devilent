module.exports = {
    name: 'billusion',
    aliases: ['illusionplanning', 'planib'],
    description: "Creates a reaction command for planning times in illusion",
    usage: '<date of first slot> <date of second slot>',
    async execute(client, message, args, Discord, prefix){
        message.delete()

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));

        channel = message.guild.channels.cache.find(c => c.name === 'town-crier')
        if(!channel) return message.reply("Channel town-crier is not found.").then(msg => msg.delete({timeout: 60000}));
        if(!args[0]) return message.reply("Please enter a date and time for date of option 1").then(msg => msg.delete({timeout: 60000}));
        if(!args[1]) return message.reply("Please enter a date and time for date of option 2").then(msg => msg.delete({timeout: 60000}));



        //.then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent
        const embed = new Discord.MessageEmbed()
        .setTitle(`Illusion planning`)
        .setDescription(`This is the planning for illusion battle **${args[0]}** and **${args[1]}**
        React to this message with the times you can play, do not react if you cant play them
        1️⃣ for ${args[0]} at 14-15H
        2️⃣ for ${args[0]} at 20-21H
        3️⃣ for ${args[1]} at 14-15H
        4️⃣ for ${args[1]} at 20-21H`)
        .setColor('#00FFFF')
        .setTimestamp()

        const one = '1️⃣'
        const two = '2️⃣'
        const three = '3️⃣'
        const four = '4️⃣'

        channel.send(`@ here`)
        const msg = await channel.send(embed)
        await msg.react(one)
        await msg.react(two)
        await msg.react(three)
        await msg.react(four)



        
    }
}