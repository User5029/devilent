module.exports = async (Discord, client, member) => {

    let cwelcome = member.guild.channels.cache.find(c => c.name === 'memberjoins')

    const embed = new Discord.MessageEmbed()
    .setTitle("Member Joined")
    .setDescription(`${member} has joined`)
    .setTimestamp()

    member.send(`Please make sure your discord name matches your in game name is not please change your nickname in the server, there are many tutorials online if you need them.\nIf your name matches your in game name please sit tight while the admins add you to the server`)

    cwelcome.send(embed)


}