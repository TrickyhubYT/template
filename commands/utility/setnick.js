const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "setnick",
  category: "utility",
  description: "Changes Nickname!",
  usage: "setnick",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**You Dont Have Permissions To Change Nickname! - [MANAGE_GUILD]**");

    if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**I Dont Have Permissions To Change Nickname! - [CHANGE_NICKNAME]**");
  
    if (!args[0]) return message.channel.send("**Please Enter A User!**")
  
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    if (!member) return message.channel.send("**Please Enter A Username!**");

    if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Set or Change Nickname Of This User!**')

    if (!args[1]) return message.channel.send("**Please Enter A Nickname**");

    let nick = args.slice(1).join(' ');

    try {
    member.setNickname(nick)
    const embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**Changed Nickname of ${member.displayName} to ${nick}**`)
        .setAuthor(message.guild.name, message.guild.iconURL())
    message.channel.send(embed)
    } catch {
        return message.channel.send("**Missing Permissions - [CHANGE_NICKNAME]")
    }

}
    
};
