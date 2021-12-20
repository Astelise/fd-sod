const Discord = require("discord.js");


module.exports = {
    name: 'ping',
    cooldown: 10,
    aliases: ['test'],
    description: "this is a ping command",
    async execute(client, message, args, Discord, msg){
        message.channel.send("Pinging...").then(sent => {
            sent.edit(`My Ping is: ${sent.createdTimestamp - message.createdTimestamp}ms, Also my API Latency is ${Math.round(client.ws.ping)}ms`);
        })}}
