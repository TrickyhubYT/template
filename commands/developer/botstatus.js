const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
  name: "botstatus",
  description: "Shutdowns the Bot!",
  category: "developer",
  run: async (bot, message, args) => {
    const dev = new Discord.MessageEmbed()
    .setTitle("Bot Status")
    .setDescription(`The command can Only be used by  \n Developers: \n<@466290341956419596>`)
    .setColor("RANDOM");
    if(message.author.id !== '466290341956419596') return message.channel.send(dev);
    const status = args[0];
    if (!status) return message.reply("A status type must be provided.");

    const statusType = args[0].toLowerCase();

    if (statusType === "online" || statusType === "idle" || statusType === "dnd" || statusType === "invisible") {
      bot.setStatus(status);
      message.channel.send(`☑️ | Status successfully changed to **${statusType}**.\nPlease note that initially changing status may take up to a minute or two.`);
    } else {
      return message.channel.send(`"${statusType}" is not a valid status type.`);
    }
        }
      
   };
