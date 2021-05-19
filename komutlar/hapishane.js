const Discord = require('discord.js');
var Jimp = require('jimp');

module.exports.run = async (client, message, args) => {
  
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/444475700871823361/517270320021766145/hapishane.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 0, 0).write(`./img/hapishane/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/hapishane/${client.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'efekt',
  permLevel: 0
};

exports.help = {
  name: 'hapishane',
  description: 'Hapishane efekti',
  usage: 'hapishane'
};