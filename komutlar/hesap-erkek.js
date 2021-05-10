  const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const settings = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let kayityetkili = '828319529666215966' //Yetkili
let codeariusver = '829680787979763712' //Verilecek
let codeariusal = '828319540008976384' //Alınacak
let isimön = '⍢' //İsmin önüne gelecek simge,tag   
let erkekROL = '831913287117045791' 
let erkekROL2 = '828319535919792149' 
let hesapROL = '836711087130542141'


 let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.registerChannel}>`)
    .setColor("RANDOM")
 
  if (message.channel.id !== settings.registerChannel) return message.channel.send(embed)


 let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let isim = args[1]
  let yaş = args[2]
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)  //CodeArius
  let toplamaisim = `${isimön} ${isim} ${yaş}`
  if (!member) return message.channel.send(`bir kullanıcı etiketlemelisin ya da ID'sini girmelisin.`)  //CodeArius
  if (!isim) return message.channel.send('Bir isim yazmalısın.')
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.') //CodeArius
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.')
  //CodeArius
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim}  ${yaş}`)
  },1000)
    setTimeout(function(){
  member.removeRole(codeariusal)
  },2000)
    setTimeout(function(){
  member.addRole(codeariusver)  //CodeArius
  },3000)
  setTimeout(function(){
  member.addRole(erkekROL)  //CodeArius
  },4000)
  setTimeout(function(){
  member.addRole(erkekROL2)  //CodeArius
  },5000)
   setTimeout(function(){
  member.addRole(hesapROL)  //CodeArius
  },6000)

  
  
  //CodeArius
let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'
const emoji = client.emojis.find(emoji => emoji.name === "5_");

   {
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
  .setFooter('✩ B I T C H E S')
  .setThumbnail("")
      message.react('840922075094581268');
message.channel.send(embed)

  }

    
    
  
}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['herkek'],
  permLevel: 0
}
exports.help = {
  name: 'he',
  description: "erkek kullanıcıları kayıt etme komutu.",
  usage: 'herkek @kişi isim yaş'
}