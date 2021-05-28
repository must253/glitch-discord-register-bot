var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

      message.channel.startTyping();
        var user = 'https://cdn.glitch.com/f3d0d588-f959-4b76-93d1-649eb40e3dc7%2F48e56ab8-2892-4235-90ae-f93dbd56c5d2.image.png?v=1622226309012'
        if (!message.guild) user = message.author;

        Jimp.read(user, (err, image) => {
            image.resize(295, 295)
          image.color(['#ffff00']).write(`./renkk/${user.id}.png`);
          setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./renkk/${user.id}.png`));
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