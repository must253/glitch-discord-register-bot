const Discord = require('discord.js');


exports.run = async (client, message, args) => {

  
  
   if(args[0] === 'eğlence') {
      let müzik = [`!wasted => profil fotonuza wasted efektini ekler`]; 
   
      const müzikE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
            .setDescription(müzik)
   
   message.channel.send(müzikE)
   }
  
}
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım2',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'yardım2'
};