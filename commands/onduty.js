const channel = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "onduty",
  aliases: ["duty", "on-duty"],
  permissions: [],
  description: "Logs onduty.",
  execute(client, message, args, cmd, Discord) {
    if (cmd === 'onduty') {


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
	.setDescription('On Duty')
	.setThumbnail(`${message.author.displayAvatarURL({ dynamic: false })}`)
	.addFields(

        
		{ name: 'Rank:', value: `<@&${role}>` },
		{ name: 'Timestamp:', value: `${datetime}` },
		
	)
	.setTimestamp()
	.setFooter('CCFD Utilities ');

message.channel.send({ embeds: [exampleEmbed] });
    
const rolez = message.guild.roles.cache.find(role => role.name === "On-Duty");
message.member.roles.add(rolez);


//const lol = new performance.mark("start");


//lol;
 
const Stopwatch = require('statman-stopwatch');
 sw = new Stopwatch();
sw.start();
module.exports = sw
}}}
