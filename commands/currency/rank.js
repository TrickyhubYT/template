const model = require("../../lolmod")
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "rank",
    description: "Shows the user data",
    category: "currency",
    usage: "rank",
    run: async (bot, message, args) => {
        let uid = message.author.id;
        let content = "**Rank**\u2001\u2001**Username**\u2001\u2001**Points** \n";
        model.find({ Guild: message.guild.id }).limit(2000).exec(function (err, da) {
            if (err) return console.log(err)
            let p = 0;
            let data = da.sort((a, b) => b.Points - a.Points)
            for (let i = 0; i <= data.length - 1; i++) {
                if (data[i].User == uid) {
                    content += `${i + 1}\u2001\u2001 \u2001${data[i].Username}\u2001\u2001\u2001\u2001\u2001${data[i].Points}`;
                    break;
                }
            }
            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content)
            message.channel.send(embed)
        })
    }
}