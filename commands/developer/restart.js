const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
  name: "restart",
  description: "Shutdowns the Bot!",
  category: "developer",
  run: async (bot, message, args) => {
    const dev = new Discord.MessageEmbed()
        .setTitle("Restart")
        .setDescription(`The command can Only be used by  \n Developers: \n<@466290341956419596>`)
        .setColor("RANDOM");
        if(message.author.id !== '466290341956419596') return message.channel.send(dev);
        message.channel.send(`Restarting The Bot!`).then(() =>{
        process.exit(1);
        })
        }
      
   };
