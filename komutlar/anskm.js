exports.run = async (client, message, args) => {
  
   if(message.author.id !== "638324859818213380") return message.channel.send("Bu Komutu Sadece Must Kullanabilir") ;

  
   let member = message.mentions.members.first() || message.guild.members.get(args[0])
  
  
   member.addRole('842418432980549635')  

  
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mustmustmust'],
  permLevel: 0
}
exports.help = {
  name: 'mustmustmust',
  description: "Kadın kullanıcıları kayıt etme komutu.",
  usage: 'mustmustmust @kişi isim yaş'
}