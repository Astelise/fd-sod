const channel = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "time",
  aliases: ["shifttime", "shift-time"],
  permissions: [],
  description: "Displays Time.",
  execute(client, message, args, cmd, Discord) {
    if (cmd === 'time') {


        const shiftime = null;
        const totalshifts = null;

        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.member.user.tag}`)
        .setDescription('Activity Time')
        .setDescription(`Here is the activity time for ${message.author} over the past 14 days.`)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: false })}`)
        .addFields(
    
            
            { name: 'Total Shift Time', value: `${shiftime}` },
            { name: 'Total Shifts', value: `${totalshifts}` },
            
        )
        .setTimestamp()
        .setFooter('CCFD Utilities ');
    
    message.channel.send({ embeds: [exampleEmbed] });


    }}}