const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message) {
    if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Pingim : **' + client.ping + '**');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'ping'
};