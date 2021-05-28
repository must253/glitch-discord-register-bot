
const Discord = require("discord.js");

exports.run = (client, message) => {

const FwhyCode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`Senin Malafat **%${FwhyCode}CM**`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kaçcm",
  description: "Efkarınızı ölçer",
  usage: "kaçcm"
};
