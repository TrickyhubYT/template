const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "purge",
  category: "utility",
  description: "Clears specific number of chats!",
  usage: "purge",
  run: async (bot, message, args) => {
    let dbmanagerR = "743736430932787261"
    let perm = new MessageEmbed()
    .setColor("RED")
    .setDescription(`You dont have  <@&${dbmanagerR}>  to use this Command!!`)
    if(!message.member.roles.cache.has(dbmanagerR))return message.reply(perm);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
    if (isNaN(args[0]))
        return message.channel.send('**Please Supply A Valid Amount To Delete Messages!**');

    if (args[0] > 100)
        return message.channel.send("**Please Supply A Number Less Than 100!**");

    if (args[0] < 1)
        return message.channel.send("**Please Supply A Number More Than 1!**");

    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
}
};
