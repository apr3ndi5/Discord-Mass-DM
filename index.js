const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client(); 
const config = require("./config.json"); 

const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on("ready", () => 
{
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. Total de membros:[ ${client.users.size} ] `); 


});


client.on("guildCreate", guild => 
{
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  });
  
  client.on("guildDelete", guild => 
  {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  });

  fs.readdir("./events/", (err, files) => 
  {
    if (err) return console.error(err);
    files.forEach(file => 
      {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
  client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });

  client.on("message", message => 
  {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    try
    {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    }
     catch (err) 
    {
      console.error(err);
      return message.reply("Comando incorreto, confira o d!ajuda");
    }
    
    let status = [
    { name: `Meu prefixo é d!`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'},
    { name: `Me adicione no seu servidor s2`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'},
    { name: `Para divulgar use d!anunciar`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'}, 
    { name: `Me adicione no seu servidor s2`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'},
    { name: `Sendo submissa ao meu dono`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'}, 
    { name: `Meu prefixo é d!`, type: 'STREAMING', url: 'https://discordapp.com/api/oauth2/authorize?client_id=624273681266376724&permissions=59392&scope=bot'}, 
  ]

   setInterval(function() {
   let randomStatus = status[Math.floor(Math.random() * status.length)];
   client.user.setPresence({ game: randomStatus });
   }, 7000)

  })

})


client.login(config.token);
