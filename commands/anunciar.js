const { RichEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<:wow:627701977282773041>  Você não tem permissão para usar esse comando!");
    message.delete();
    
    if (args.length < 1) return message.reply('*Use* **d!anunciar** *[Link da IMG] <Mensagem>* ');
  
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    let link = args[0];
    let msg = "";
    let hit = regex.test(link)
    if (hit) 
    {
        msg = args.slice(1).join(" ");
    }
     else 
    {
        msg = args.join(" ");
    }
  
    var embed1 = new RichEmbed()
    .setTitle('**|-| Mensagem anunciada com sucesso!**')
    .setColor('RANDOM')
    .setDescription('__**A mensagem está sendo enviada para os membros do servidor!**__');
    message.channel.send(embed1);
  
    var embed = new RichEmbed()
    .setDescription(msg)
    .setColor("RANDOM")
    .setFooter(`Anunciado por: ${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.guild.iconURL);
    if (hit) embed.setImage(link);
    message.guild.members.forEach(user => user.send(embed));
  };
