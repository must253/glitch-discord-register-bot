const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
   
  let user = message.mentions.users.first() || message.author;

  
  
  let embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} `, client.user.displayAvatarURL)
    .setTitle(` <a:820063266892939274:835268482933194772> İşte Sunucunun Toplam Üyeleri =>${message.member.guild.memberCount}`)
    .setDescription(`Online Olan Kullanıcılar => ${message.guild.members.filter(m => m.user.presence.status === "online").size}
    Boşta Olan Kullanıcılar => ${message.guild.members.filter(m => m.user.presence.status === "idle").size}
    Rahatsız Edilmek İstemeyen Kullanıcılar =>  ${message.guild.members.filter(m => m.user.presence.status === "dnd").size}
    Toplam Bot => ${message.guild.members.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
  .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL)
  
message.channel.send(embed);
  
}  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'üyeler',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'üyeler'
};