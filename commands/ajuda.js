const { RichEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  
    message.delete();
    var prefix = 'd!';
    let embedd = new RichEmbed()
    .setAuthor(`${message.author.tag} esses são os comandos!`)//message.author.username
    .setColor('RANDOM')
    .setDescription(`**__D!ANUNCIAR__**\n\nPara usar o anuncio escreva ${prefix}anunciar + imagem ou gif enviada à todos os membros + mensagem que sera enviada\n\n **Para me adicionar no seu servidor só** [Clicar aqui!](https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot) `)
    .setThumbnail(message.author.displayAvatarURL)
    return message.channel.send(embedd);
};
