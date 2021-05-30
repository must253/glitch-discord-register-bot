const Discord = require("discord.js");
const client = new Discord.Client();
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
      let embed2 = new Discord.RichEmbed()
  .setColor('f5f5f5')  //CodeArius
  .setDescription(`${member} kişisinden <@&${codeariusal}> rolü alınıp <@&${codeariusver}> , <@&${erkekROL}> , <@&${erkekROL2}> rolleri verildi.

`)
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(client.user.username + '#' + client.user.tag)
  .setThumbnail("")
message.channel.send(embed2)

  message.guild.channels.get('842418433756233746').send(`**${member} aramıza katıldı.** ` ) 
}
    
    
    
    
     
  
;  //CodeArius

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