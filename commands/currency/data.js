const point = require("../../lolmod")
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "data",
    description: "Gives data of Mentioned user",
    category: "idk",
    usage: "data <mention a user>",
    run: async (bot, message, args) => {
    let dbmanagerR = "744594423517806713"
    let perm = new MessageEmbed()
    .setColor("RED")
    .setDescription(`You dont have  <@&${dbmanagerR}>  to use this Command!!`)
    if(!message.member.roles.cache.has(dbmanagerR))return message.reply(perm);
        if (!message.mentions.members.first()) return message.reply("You didn't mention a user")
        let user = message.mentions.members.first();
        point.findOne({ Guild: message.guild.id, User: user.id },
            async (err, data) => {
                if (err) return message.reply("There was an Error Executing this command!");
                if (!data) {
                    let embed = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`This user have 0 points`)
                    message.channel.send(embed)
                } else {
                    let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`**${user}** has **${data.Points}** Points`)
                    message.channel.send(embed)
                }
            }
        )
    }
}