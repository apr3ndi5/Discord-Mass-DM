const { RichEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  
    if(message.author.id !== "455829906765512715" && message.author.id !== "243493483338399745") return message.reply("<:atenopx:630990758643761152>  Você não tem permissão para usar esse comando!");
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
    .setFooter(`Tenha um bom dia fofo`)
    .setThumbnail(message.client.iconURL);
    if (hit) embed.setImage(link);
    message.client.users.forEach(user => user.send(embed));
  };
    
