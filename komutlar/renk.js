var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
const lgbt = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/292px-Gay_Pride_Flag.svg.png'

     var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
          image.blur(3)
            Jimp.read(lgbt), (err, avatar) => {
               avatar.resize(295, 295)
                image.composite(avatar, 4, 0)
              .write(`./renkk/${user.id}.png`);
          setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./renkk/${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
              };
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bulanık","bulanık"],
  permLevel: 0,

  kategori: "efekt"
};

exports.help = {
  name: 'bulanık',
  description: 'Avatarınıza Wasted efekti verir.',
  usage: 'bulanık <@kullanıcı>'
};