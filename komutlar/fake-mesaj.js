 const Discord = require('discord.js');

exports.run = function (client, message, args) {
  
     if(message.author.id !== "638324859818213380") return message.channel.send("Bu Komutu Sadece Must Kullanabilir") ;

    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen Birisini Etiketle')
    let yazi =   args.join(' ').split('')
    if (!yazi) return message.reply('Lütfen Yazini Yaz')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["fake-mesaj","fake mesaj","fakemesaj"],
    permLevel: 3
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'w!fakemesaj'
};