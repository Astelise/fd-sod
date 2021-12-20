const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });require('dotenv').config();

const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection(); 

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


 console.log('Connected to CCFD!')





      
client.login(process.env.DISCORD_TOKEN);