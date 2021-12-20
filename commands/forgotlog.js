const channel = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "forgotlog",
  aliases: ["forgottolog", "forgot-log"],
  permissions: [],
  description: "Logs Forgot Log",
  execute(client, message, args, cmd, Discord) {
    if (cmd === 'forgotlog') {

        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " | "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
    
            const role = '905880604476837968';
    const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.member.user.tag}`)
        .setDescription('**__Forgot To Log__**')
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: false })}`)
        .addFields(
    
            
            { name: 'Rank:', value: `<@&${role}>` },
            { name: 'Timestamp:', value: `${datetime}` },
            
        )
        .setTimestamp()
        .setFooter('CCFD Utilities ');
    
    message.channel.send({ embeds: [exampleEmbed] });


    }}}