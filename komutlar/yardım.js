const Discord = require('discord.js');
const db = require('quick.db')

const settings = require("../ayarlar.json")
  let cezarolu = settings.registerer

exports.run = function(client, message, args) {  
  
  
   let embed3 = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`Burası komutlar kanalı değil. komutlar kanalı: <#${settings.commandChannel}>`)
    .setColor("RANDOM")
  
    if (message.channel.id !== settings.commandChannel) return message.channel.send(embed3)
  
  
  
  
      const cvp2 = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
.setDescription(`__**Kayıt Yardımını Görmek İçin**__
 \`>\`!yardım kayıt
 __**Eğlence Yardımını Görmek İçin**__
 \`>\`!yardım eğlence`)
  
    let cvp = args[0]

  if (!cvp) return message.channel.send(cvp2)
  
let cezarolu = settings.registerer 
  
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`)
    .setColor("RANDOM")
    message.channel.send(embed)


  
  
  
  
if(args[0] === 'kayıt') {  let embed2 = new Discord.RichEmbed()
    .setTitle("Kayıt Komutları")
    .setDescription(`Selam! Bu bot sunucundaki üyeleri kolayca kayıt edebilmen için tasarlandı. Aşağıda komutların genel bilgisine ulaşabilirsin.
  __**Erkek Üye Kayıdı**__
 \`>\` Erkek üyeleri kaydetmek için: \`!erkek [etiket veya ID] [adı] [yaş]\`
 __** İsimlerini Görmek İçin**__
 \`>\` Kullanıcın Önceki İsimlerini Görmek: \`!isimler [etiket veya ID] \`
__**Kadın Üye Kayıdı**__
\`>\` Kadın üyeleri kaydetmek için: \`!kadın [etiket veya ID] [adı] [yaş]\`
__**Kaydedilenleri Görmek İçin**__
\`>\` Kendinin veya bir üyenin kaydettiği kişi sayısını görmek için: \`!kayıtsay (etiket veya ID)\`
`)
    .setColor("RANDOM")

  message.channel.send(embed2)}
  
   if(args[0] === 'eğlence') {
      let müzik = [`!wasted => profil fotonuza wasted efektini ekler`]; 
   
      const müzikE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
.setDescription(`__**!wasted**__
\`>\`profil fotonuza wasted efektini ekler 
__**!hapishane**__
\`>\`profil fotonuza hapishane efektini ekler
__**!aşkölçer**__
\`>\`etiketlediğiniz kişi ile aranızdaki ilişkiyi ölçer
__**!kapaklaflar**__
\`>\`etiketlediğiniz kişiye özlü sözlü laflar söyler`)
   
   message.channel.send(müzikE)
   }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'yardım'
};