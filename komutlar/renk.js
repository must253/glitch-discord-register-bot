var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295).write(`./avatarr/${user.id}.png`);
          setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./avatarr/${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["renk","renk"],
  permLevel: 0,

  kategori: "efekt"
};

exports.help = {
  name: 'renk',
  description: 'Avatarınıza Wasted efekti verir.',
  usage: 'renk <@kullanıcı>'
};