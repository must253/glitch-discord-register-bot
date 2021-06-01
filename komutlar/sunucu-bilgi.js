const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (bot, message, args) => {
  
 
  
  
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const taglı_üyeler = message.guild.members.filter(s => !s.user.bot).filter(member => member.user.username.includes("◇"));
  const üye_id = message.guild.members.get(taglı_üyeler.map(x => `${x.id}`))
const embed = new Discord.RichEmbed()
.setColor(`#CE2D0B`)
.setTimestamp()
.addField(`Toplam Üye`, `**${üyesayi}**`, true)
.addField(`Kullanıcılar`, `**${kullanıcılar}**`, true)
.addField(`Botlar`, `**${botlar}**`, true)
.addField(`Üye Durumları`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
.addField(`Tagımızda Bulunan Üyeler `, `Toplam **${message.guild.members.filter(s => !s.user.bot).filter(member => member.user.username.includes("◇")).size}** Kişi Var`,true)
message.channel.send(embed)
  
   const tagı_aldı = new Discord.MessageEmbed()
.setDescription(`**${üye_id}** Tagımızı ( \`◇\`) alarak aramıza katıldı! <@&842418432926679063> Rolüne sahip oldu!**`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')
  
  
  if(taglı_üyeler) üye_id.addRole(ayarlar.tag_rolü_id);
  if(!taglı_üyeler) üye_id.removeRole(ayarlar.tag_rolü_id);
  
  
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'w!üyedurum'
};