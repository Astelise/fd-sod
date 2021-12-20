
const channel = require("discord.js");
const { MessageEmbed } = require('discord.js');
const Stopwatch = require('statman');


module.exports = {
  name: "offduty",
  aliases: ["ofduty", "off-duty"],
  permissions: [],
  description: "Logs offduty.",
  execute(client, message, args, cmd, Discord) {
    if (cmd === 'offduty') {

const role = '905880604476837968';
const Stopwatch = require('statman-stopwatch');
const sw = require('./onduty')
sw.stop();

    
    const timexd = sw.read();


const xdl = message.author;
const xdf = message.author.id;
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " | "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();

        var date = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " | " 

        var hours = Math.floor(timexd / 3600000);
        var minutes = Math.floor(timexd / 60000);
  var seconds = ((timexd % 60000) / 1000).toFixed(0);


const exampleEmbed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.member.user.tag}`)
	.setDescription('Off Duty')
	.setThumbnail(`${message.author.displayAvatarURL({ dynamic: false })}`)
	.addFields(

        
		{ name: 'Rank:', value: `<@&${role}>` },
		{ name: 'Timestamp:', value: `${datetime}` },
    { name: 'Shift Duration:', value: `${hours + ":" + minutes + ":" + (seconds < 10 ? '0' : '') + seconds} `},
		
	)
	.setTimestamp()
	.setFooter('CCFD Utilities ');
 
    
message.channel.send({ embeds: [exampleEmbed1] });
    const authorxd = message.member.user.tag
const rolez1 = message.guild.roles.cache.find(role => role.name === "On-Duty");
message.member.roles.remove(rolez1);

const exampleEmbed2 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.member.user.tag}`)
	.setDescription('New Shift-Log')
	.setThumbnail(`${message.author.displayAvatarURL({ dynamic: false })}`)
	.addFields(

        
		{ name: 'Name:', value: `${authorxd}` },
		{ name: 'Timestamp:', value: `${date}` },
    { name: 'Shift Duration:', value: `${hours + ":" + minutes + ":" + (seconds < 10 ? '0' : '') + seconds} `},
		
	)
	.setTimestamp()
	.setFooter('CCFD Utilities ');
    
    client.channels.cache.get(`919290646550966313`).send({ embeds: [exampleEmbed2] });



    }}}

    
    
    
    

    