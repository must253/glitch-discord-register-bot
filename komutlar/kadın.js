const Discord = require('discord.js');
const settings = require('../ayarlar.json')
  //CodeArius
exports.run = async (client, message, args) => {
let kayityetkili = settings.register //Yetkili
let codeariusver = '842418432916848656' //Verilecek
let codeariusal = '842418432905183250' //Alınacak
let isimön = 'ᛉ' //İsmin önüne gelecek simge,tag   
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
  let isim3 = isim[0].toUpperCase();
  let isim2 = isim3 + isim.substring(1);  let yaş = args[2]
 
  let toplamaisim = `${isimön} ${isim2} ${yaş}`
  if (!isim) return message.channel.send('Bir isim yazmalısın.')
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.') //CodeArius
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.')
  
    //CodeArius
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim2} | ${yaş}`)
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

  


   {
      let embed = new Discord.RichEmbed()
  .setColor('f5f5f5')  //CodeArius
  .setDescription(`${member} kişisinden <@&${codeariusal}> rolü alınıp <@&${codeariusver}> , <@&${kadınRol}> , <@&${kadınRol2}> rollleri verildi.
`)
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
 .setFooter(client.user.tag)
  .setThumbnail("")
      message.channel.send(embed)
message.guild.channels.get('842418433756233746').send(`**${member} aramıza katıldı.** ` ) 
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
