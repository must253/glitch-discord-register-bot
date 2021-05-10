const Discord = require('discord.js');
const db = require('quick.db')
const settings = require('../ayarlar.json')
 //CodeArius
exports.run = async (client, message, args) => {
  
  
    let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.registerChannel}>`)
    .setColor("RANDOM")
  
    if (message.channel.id !== settings.registerChannel) return message.channel.send(embed)

  let kayityetkili = '828319529666215966' //Kayıt yetkilisi İD
  if(!message.member.roles.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
   //CodeArius
  let kişi = message.mentions.users.first();
  if(!kişi) {
    let erkek = await db.fetch(`kayıte_${message.author.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${message.author.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) || '0'
 //CodeArius
    let kayıtlılar = new Discord.RichEmbed()
      .setColor('f5f5f5')
      .setDescription(`**${message.author.username} Kişisinin Teyit Bilgi**\n\n`)
      .setThumbnail('https://cdn.discordapp.com/icons/544527577768001538/a_1fa32517dd9fb1d265309255c635b2c0.gif')
      .addField('  __Erkek__', erkek, true) //CodeArius
      .addField('  __Kız__', kız, true)
      .addField('  __Toplam__', toplam)
    message.channel.send(kayıtlılar)
  }
    if(kişi) { //CodeArius
    let erkek = await db.fetch(`kayıte_${kişi.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${kişi.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${kişi.id}`) || '0'
    let kayıtlılar = new Discord.RichEmbed()
      .setColor('f5f5f5') //CodeArius
      .setDescription(`**${kişi.username} kişisinin teyit bilgisi**\n\n`)
      .setThumbnail('https://cdn.discordapp.com/icons/544527577768001538/a_1fa32517dd9fb1d265309255c635b2c0.gif')
      .addField('  __Erkek__', erkek, true) //CodeArius
      .addField(' __Kız__', kız, true)
      .addField('  __Toplam__', toplam)
    message.channel.send(kayıtlılar)
  } //CodeArius
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ks'],
  permLevel: 0
}
exports.help = {
  name: 'kayıtsay',
  description: "Teyit sayısını gösterir",
  usage: 'kayıtsay <nick>'
}