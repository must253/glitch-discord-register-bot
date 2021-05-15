const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const settings = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let kayityetkili = ayarlar.register //Yetkili
let codeariusver = '842418432916848655' //Verilecek
let codeariusal = '842418432905183250' //Alınacak
let isimön = '☥' //İsmin önüne gelecek simge,tag   
let erkekROL = '842418432916848653' 
let erkekROL2 = '842418432916848651' 
let hesapROL = '841993868324765719'


 let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.registerChannel}>`)
    .setColor("RANDOM")
 
  if (message.channel.id !== settings.registerChannel) return message.channel.send(embed)

if(!message.member.roles.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
   //CodeArius
 let member = message.mentions.members.first() || message.guild.members.get(args[0])
 if (!member) return message.channel.send(`bir kullanıcı etiketlemelisin ya da ID'sini girmelisin.`)  //CodeArius
  let isim = args[1]
  let yaş = args[2]
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)  //CodeArius
  let toplamaisim = `${isimön} ${isim} ${yaş}`
  if (!isim) return message.channel.send('Bir isim yazmalısın.')
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.') //CodeArius
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.')
  //CodeArius
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim} | ${yaş}`)
  },1000)
  setTimeout(function(){
  member.addRole(codeariusver)  
  },2000)
   setTimeout(function(){
  member.removeRole(codeariusal)  
  },2000)
   setTimeout(function(){
  member.addRole(erkekROL2)  
  },4000)
  setTimeout(function(){
  member.addRole(erkekROL)  //CodeArius
  },3000)
 

  
  
  //CodeArius
let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'

  if(kayıtlımı !== 'evet') {
  db.add(`kayıte_${message.author.id}`, 1)  //CodeArius
  db.add(`kayıttoplam_${message.author.id}` , 1)
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)  //CodeArius
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
      let embed = new Discord.RichEmbed()
  .setColor('f5f5f5')  //CodeArius
  .setDescription(`${member} kişisinden <@&${codeariusal}> rolü alınıp <@&${codeariusver}> , <@&${erkekROL}> , <@&${erkekROL2}> rolleri verildi.

<@!${message.author.id}> **Kişisinin toplam** ${toplam} **adet teyiti oldu.**
`)
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(client.user.username + '#' + client.user.tag)
  .setThumbnail("")
message.channel.send(embed)

    message.guild.channels.get('828936755239059456').send(`**${member} aramıza katıldı.** ` ).then(msg => msg.delete({timeout: 100000}));
}

  if(kayıtlımı === 'evet'){
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
    let embed = new Discord.RichEmbed()
  .setColor('f5f5f5')
  .setDescription(` **Bu kişi daha önceden de kayıt edilmiş!**

**Kullanıcı daha önce bu isimle kayıt edilmiş!** \`${eskiismi}\``)
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(client.user.tag)
  .setThumbnail("")

message.channel.send(embed)
    
    
    
    
     
  }
};  //CodeArius

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek'],
  permLevel: 0
}
exports.help = {
  name: 'e',
  description: "erkek kullanıcıları kayıt etme komutu.",
  usage: 'erkek @kişi isim yaş'
}