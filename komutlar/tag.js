exports.run = function(client, message, args) {
  
message.channel.send('〥')

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'tag komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'tag'
};