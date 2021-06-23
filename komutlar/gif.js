
module.exports.run = async (client, message, args) => {
  


  const search = 'reddit-random-image';
		const image = search('CatGifs');
	message.channel.send(image)
    
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'gif',
  permLevel: 0
};

exports.help = {
  name: 'gif',
  description: 'gif',
  usage: 'gif'
};