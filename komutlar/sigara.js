
const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    return message.channel.send("**Yak Yak Yak**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('π¬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('π¬ β ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('π¬ ββ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('π¬ βββ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('π¬ βββ');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('π¬ ββ');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('π¬ β');
                        }, 1300);
                        setTimeout(() => {
                            msg.delete(`**Sigara Bitti **`);              
                            return message.channel.send(`**Sigara Bitti **`);
                        }, 10000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['yak', 'sigara'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara iΓ§ersiniz",
                  usage: "w!sigara"
                };