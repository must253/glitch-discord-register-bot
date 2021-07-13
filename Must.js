const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db')
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const queue = new Map();



const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Bot Hostlandı!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

//KAYIT MESAJ


//botu sese sokma
client.on('ready', ()=>{
client.channels.get('842418432989069348').join()
})
//botu sese sokma
//otorol



//

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.login(process.env.token);









///hgbb

//hg-bb



//küfür engel

client.ayarlar = {
  
    prefix: "!"
}



client.on("guildMemberAdd", async (member, msg) => {
   
   const registery =  "842418432937951264";
     
  
   let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
   
 
   let member2 = member.user;
  let zaman = new Date().getTime() - member2.createdAt.getTime();
  var user = member2;
  var tbzaman = [];
  if (zaman < 1296000000) {
    tbzaman = "<:deepsy_hayir:843074510013464576>";
  } else {
    tbzaman = `<:deepsy_evet:843074468750295040>`;
  }
   
   
   const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "Oluşturulalı 15 Gün Geçmiş!";
    if (kurulus < 1296000000) kontrol = "Oluşturulalı 15 Gün Geçmemiş!";
   
  
  
  
   const kurulus2 = new Date().getTime() - user.createdAt.getTime();
    var kontrol2;
    if (kurulus2 > 1296000000) kontrol2 = "<:deepsy_evet:843074468750295040>";
    if (kurulus2 < 1296000000) kontrol2 = "<:deepsy_hayir:843074510013464576>";
     
     const Webhook = new Discord.WebhookClient(process.env.webhookid , process.env.webhooktoken)
    
    const UNREGİSTER = '842418432905183250'
     const SUPHELİ_ROLE = '842418432905183247'
     if (kurulus < 1296000000) 
       member.addRole(SUPHELİ_ROLE)
     member.removeRole(UNREGİSTER);
     
     
     if (kurulus > 1296000000) 
     member.addRole(UNREGİSTER);
   
    var must = ayarlar.registerChannel
    if(!must) return;
     
    const embed = new Discord.RichEmbed()
    .setTitle('Hoş Geldin!')
    .setDescription(`**Deepsy'e hoş geldin ${member} **\n\nHesabın \`${moment(member.createdTimestamp).format("DD")} ${kur[moment(member.createdTimestamp).format('MM')]} ${moment(member.createdTimestamp).format('YYYY h:mm:ss')} \`  tarihinde oluşturulmuş.  (${moment(member.createdTimestamp).add(5, 'seconds').fromNow().replace("months ago", "Ay Önce ").replace("years ago","yıl önce").replace("a year ago.","bir yıl önce").replace("a months ago","bir ay önce").replace("minutes ago","dakika önce").replace("days ago","gün önce").replace("a days ago","bir gün önce").replace("a minutes ago","bir dakika önce")}.)\n\nSunucu kurallarımız <#842418433261830242> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\nSunucumuz seninle birlikte **${member.guild.memberCount}** kişiye ulaştı! Sol tarafta bulunan <#842418433261830237> odalarından birine girerek kayıt işlemini gerçekleştirebilirsin.\n\n<@&${registery}> Rolünde ki Yetkililer seninle en kısa sürede ilgilenecektir.\n\n**Bu Kullanıcı   ${kontrol} | ${tbzaman}** `)
    .setColor('RANDOM')
     if (kurulus > 1296000000) kontrol = Webhook.send(`**Deepsy'e hoş geldin ${member} **\n\nHesabın Güvenli  ${kontrol2}\n\nSunucu kurallarımız <#842418433261830242> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\nSunucumuz seninle birlikte **${member.guild.memberCount}** kişiye ulaştı! Sol tarafta bulunan <#842418433261830237> odalarından birine girerek kayıt işlemini gerçekleştirebilirsin.\n\n<@&${registery}> Rolünde ki Yetkililer seninle en kısa sürede ilgilenecektir.`);

       if (kurulus < 1296000000) kontrol = Webhook.send(`** Hoş Geldin   ${member}** Seninle birlikte **${member.guild.memberCount}** kişiyiz.\n\nBu Kullanıcı Hesabı 15 Günden Önce Açılmış.  Bu Sebepten  <@&${SUPHELİ_ROLE}> Rolü Verildi!! `);

     

  });



