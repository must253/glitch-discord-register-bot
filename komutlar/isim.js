  

const Discord = require('discord.js');
const db = require('quick.db')

const settings = require("../ayarlar.json")
  let cezarolu = settings.registerer

  
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.registerChannel}>`)
    .setColor("RANDOM")

 //CodeArius
exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(cezarolu)) return message.channel.send(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`).then(x => x.delete({ timeout: 6500 }));

  if (message.channel.id !== settings.registerChannel) return message.channel.send(embed)

    let isim = args[1]
  let yaş = args[2]
  let isimön = '⍢' //İsmin önüne gelecek simge,tag 
  
   let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!member) return message.channel.send(`bir kullanıcı etiketlemelisin ya da ID'sini girmelisin.`)  
  if (!args[1]) return message.channel.send("Bir isim girmelisin.")
  if (!args[2]) return message.channel.send("Bir yaş girmelisin.")
  let name = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase();
  let age = args[2]
  if (!name) return message.channel.send("İsmini değiştireceğin kişinin ismini yazmalısın.")
  if (!age) return message.channel.send("İsmini değiştireceğin kişinin yaşını yazmalısın.")

  
    member.setNickname(`${isimön} ${isim}  ${yaş}`)
 let isimdeğiştikvola = new Discord.RichEmbed()
      .setColor('f5f5f5') //CodeArius
      .setDescription(`Etiketlenen kişinin ismi Başarıyla **${isimön} ${isim} | ${yaş}** Olarak Değiştirildi`)
      .setThumbnail('')
    message.channel.send(isimdeğiştikvola)


  


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'isim'
};