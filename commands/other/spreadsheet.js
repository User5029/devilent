module.exports = {
    name: 'spreadsheet',
    description: "spreadsheet link command",
    async execute(client, message, args, Discord, prefix){
        message.delete()

        if(!message.author.id === '721416593166303352') return message.channel.send("Command disabled").then(msg => msg.delete({timeout: 60000}));
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));

        message.reply("Please check your dms")//.then(msg => msg.delete({timeout: 10000}));

        const embed = new Discord.MessageEmbed()
        .setDescription("[Spreadsheet link](https://docs.google.com/spreadsheets/d/16GrFSEQb_K87xadDArtEkqVrEwkWZCo40I2kIgEhCMA/edit#gid=718511539)")

        message.member.send(embed)
    
    }
}