const Discord = require('discord.js')
module.exports.run = async (client, message) => {
 
  message.delete();
  console.log(`         ---=== PASSADOR ===---   \n\nServers: (${client.guilds.size}):\n\n${client.guilds.map(a => `- ${a.name} (${a.members.size} usuários)`).join(",\n")}`)
message.channel.send("**Aqui está minha lista de servidores!**")
};
