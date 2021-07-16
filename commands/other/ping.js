module.exports = {
    name: 'ping',
    description: "Ping command",
    execute(client, message, args){  
        message.delete()     
        message.channel.send(`Your current ping is ${client.ws.ping} ping`)
        .then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent      
    }
}