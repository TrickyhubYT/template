
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  category: "info",
  description: "Shows the help Section!",
  run: async (bot, message, args) => {
    const help = new MessageEmbed()
    .setTitle(`${message.guild.name}'s Help`)
    .setDescription(``)
    .setColor("RANDOM")
    .setThumbnail("https://i.imgur.com/Bwn8AhY.png")
    .addFields(
        { name: 'Fun', value: '``8ball``,``avatar``,``meme``,``reddit``,``trivia``' },
        { name: 'Config', value: '``register``' },
	      { name: 'Points', value: 'These Commands are Usable only by **Database Manager** \n ``add``,``remove``,``data``,``reset``' },
        { name: 'Scoring', value: '``leaderboard``,``rank``' },
        { name: 'Map Randomizer', value: '``pickmapsnd(queue number)``,``pickmapdom``,``pickmaphp``' },
        { name: 'Team Randomizer', value: '``pickteamsnd(queue number)``,``pickteamdom``,``pickteamhp``' },
        { name: 'Information', value: '``help``,``oldest``,``youngest``,``ping``' },
        { name: 'Utility', value: '``dm``,``emoji``,``poll``,``purge``,``setnick``,``slowmode``' },
        { name: 'Developer', value: 'This is only accessable by Bot Developer! i.e Nora#2100 \n``restart`` ' }

	)
    .setTimestamp(message.createdAt)
    .setFooter(
      message.author.tag,
      message.author.displayAvatarURL({ dynamic: true, size: 256 })
    ) 
    message.channel.send(help)
  }
}
