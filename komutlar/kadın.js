const Discord = require('discord.js');
const db = require('quick.db')
const settings = require('../ayarlar.json')
  //CodeArius
exports.run = async (client, message, args) => {
let kayityetkili = settings.register //Yetkili
let codeariusver = '842418432905183250' //Verilecek
let codeariusal = '841993868307857427' //Alınacak
let isimön = '☥' //İsmin önüne gelecek simge,tag   
let kadınRol = '842418432916848654' //Verilecek
let kadınRol2 = '842418432916848652' //Verilecek


 let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.registerChannel}>`)
    .setColor("RANDOM")


  if (message.channel.id !== settings.registerChannel) return message.channel.send(embed)


  if(!message.member.roles.has(kayityetkili))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
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
  member.setNickname(`${isimön} ${isim}  ${yaş}`)
  },1000)
  setTimeout(function(){
  member.addRole(kadınRol  )  //CodeArius
  },3000)
    setTimeout(function(){
  member.addRole(codeariusver)  //CodeArius
  },2000)
  member.removeRole(codeariusal)
  setTimeout(function(){
  member.addRole(kadınRol2)  //CodeArius
  },4000)
  
  //CodeArius

  
  let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'
const emoji = client.emojis.find(emoji => emoji.name === "5_");

   {
  db.add(`kayıtk_${message.author.id}`, 1)  //CodeArius
  db.add(`kayıttoplam_${message.author.id}` , 1)
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)  //CodeArius
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
      let embed = new Discord.RichEmbed()
  .setColor('f5f5f5')  //CodeArius
  .setDescription(`${member} kişisinden <@&${codeariusal}> rolü alınıp <@&${codeariusver}> , <@&${kadınRol}> , <@&${kadınRol2}> rollleri verildi.

<@!${message.author.id}> **Kişisinin toplam** ${toplam} **adet teyiti oldu.**
`)
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter('✩ B I T C H E S')
  .setThumbnail("")
 message.react('823290747217248306');
      message.channel.send(embed)
message.guild.channels.get('828936755239059456').send(`**Bir Kullanıcı Kayıt Oldu ${member} ** ` ).then(msg => msg.delete({timeout: 100000}));  
  }
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kadın'],
  permLevel: 0
}
exports.help = {
  name: 'k',
  description: "Kadın kullanıcıları kayıt etme komutu.",
  usage: 'kadın @kişi isim yaş'
}