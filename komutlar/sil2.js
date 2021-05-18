const Discord = require('discord.js');

exports.run = function(client, message, args) {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanman için \`Mesajları Yönet\` Yetkisine sahip olan gerek!`);
  
  var u = message.mentions.users.first()
  var x = args[1]
  if (!u) return message.channel.send("Geçersiz argüman! `sil-üye <kullanıcı> <sayı>`")
  
  if (!x) return message.channel.send("Geçersiz argüman! `sil-üye <kullanıcı> <sayı>`")
  
  if (isNaN(x)) return message.channel.send("Geçersiz argüman! `sil-üye <kullanıcı> <sayı>`")
  
  if (x < 1) return message.channel.send("``1`` adetten az mesaj silemem!")
  if (x > 100) return message.channel.send("``100`` adetten fazla mesaj silemem!")
  
 var fetched =  message.channel.messages.fetch({limit: x})
  
  if (u) {
    var fetched = fetched.filter(m => m.author.id === u.id)
    .array()
    .slice(0, x)
    }
    
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
    
        
  message.channel.send(`\`${u.tag}\` adlı kullanıcının \`${x}\` adet mesajı başarıyla silindi!`).then(msg => msg.delete(5000));
  
    //message.delete();
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil2', 
  description: 'Slots oyunu oynatır',
  usage: 'sil2'
};