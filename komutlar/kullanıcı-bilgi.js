const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  
  
  const must= require("moment");
  
must.locale("tr")
  
  if (message.channel.type !== "group") {
    var Durum = message.author.presence.status;
    var Durm =
      Durum == "online"
        ? 0x00ae86
        : Durum == "offline"
        ? 0x808080
        : Durum == "idle"
        ? 0xffff00
        : Durum == "dnd"
        ? 0xff0000
        : 0x00ae86;
    var durm =
      Durum == "online"
        ? "Çevrimiçi"
        : Durum == "offline"
        ? "Çevrimdışı"
        : Durum == "idle"
        ? "Boşta"
        : Durum == "dnd"
        ? "Rahatsız Etmeyin"
        : "Bilinmiyor/bulunamadı.";
    const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField(
        "Ad:",
        message.author.username + "#" + message.author.discriminator
      )
      .addField("ID:", message.author.id)
      .addField("Kayıt tarihi:", must(message.author.createdAt).fromNow())
      .addField("Durum:", durm)
      .addField(
        "Şu an oynadığı oyun:",
        message.author.presence.game
          ? message.author.presence.game.name
          : "Şu an oyun oynamıyor"
      )
      .addField("BOT mu?", message.author.bot ? "\n Evet" : "Hayır");
    console.log(
      "!kullanıcıbilgim komutu " +
        message.author.username +
        " tarafından kullanıldı."
    );
    return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı", "kullanıcı bilgim", "kbilgim"],
  permLevel: 0
};

exports.help = {
  name: "kullanıcıbilgim",
  description: "Komutu kullanan kişi hakkında bilgi verir.",
  usage: "!kullanıcıbilgim"
};
