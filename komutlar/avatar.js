var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

   var user2 = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author ;
  
   const pp = `https://cdn.discordapp.com/avatars/${user2.id}/${user2.avatar}.png`;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
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
  aliases: ["avatar","av"],
  permLevel: 0,

  kategori: "efekt"
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınıza Wasted efekti verir.',
  usage: 'avatar <@kullanıcı>'
};