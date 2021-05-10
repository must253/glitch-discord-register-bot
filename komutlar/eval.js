const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('../ayarlar.json');

exports.run = function(client, message, args) { 
  
   let embed = new Discord.RichEmbed()
    .setTitle("Bu Komutu Sadece Must Kullanabilir")
    .setDescription(` Must => <@638324859818213380>  `)
    .setColor("RANDOM")

 if(!conf.sahip) return message.channel.send(embed);
  if (!args[0] || args[0].includes('token')) return message.channel.send("Kod belirtilmedi `" + this.help.name + "`__`<kod>`__")
  
	const code = args.join(' ');
	function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};
    try {
		  var evaled = clean( eval(code));
      if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace("token", "Yasaklı komut").replace(client.token, "Yasaklı komut").replace(process.env.PROJECT_INVITE_TOKEN, "Yasaklı komut");
		  message.channel.send(`${evaled.replace(client.token, "Yasaklı komut").replace(process.env.PROJECT_INVITE_TOKEN, "Yasaklı komut")}`, {code: "js", split: true});
    } catch(err) { message.channel.send(err, {code: "js", split: true}) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'eval'
};