const model = require("../../lolmod")
const pagination = require("discord.js-pagination")
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "leaderboard",
    description: "Shows the Leaderboard",
    category: "currency",
    usage: "leaderboard",
    run: async (bot, message, args) => {
        let fa1 = "";
        let fb1 = "";
        let fc1 = "";
        let fa2 = "";
        let fb2 = "";
        let fc2 = "";
        let fa3 = "";
        let fb3 = "";
        let fc3 = "";
        let fa4 = "";
        let fb4 = "";
        let fc4 = "";
        let fa5 = "";
        let fb5 = "";
        let fc5 = ""; 
        let fa6 = "";
        let fb6 = "";
        let fc6 = "";
        let content1 = "**Rank**\u2001**Points**\u2001**Name**\n";
        let content2 = "**Rank**\u2001**Points**\u2001**Name**\n";
        let content3 = "**Rank**\u2001**Points**\u2001**Name**\n";
        let content4 = "**Rank**\u2001**Points**\u2001**Name**\n";
        let content5 = "**Rank**\u2001**Points**\u2001**Name**\n";
        let content6 = "**Rank**\u2001**Points**\u2001**Name**\n";
        model.find({ Guild: message.guild.id }).limit(200).exec(function (err, da) {
            if (err) return console.log(err)
            let data = da.sort((a, b) => b.Points - a.Points)
            for(let i =0;i<=data.length-1;i++){
                if (i >= 0 && i <= 29) {
                    content1 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                } else if (i >= 30 && i <= 59) {
                    content2 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                } else if (i >= 60 && i <= 99) {
                    content3 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                } else if (i >= 100 && i <= 129) {
                    content4 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                } else if (i >= 130 && i <= 149) {
                    content5 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                }else if  (i >= 150 && i <= 169) {
                        content5 += `${i+1}\u2001\u2001\u2001${data[i].Points}\u2001\u2001<@${data[i].User}>\n`
                } else {
                    break;
                }
            }
            let embed1 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content1)
            let embed2 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content2)
            let embed3 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content3)
            let embed4 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content4)
            let embed5 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content5)
            let embed6 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(content6)
            const emojiList = ["???", "???"];
            const pages = [embed1, embed2, embed3, embed4, embed5, embed6]
            pagination(message, pages, emojiList)
        })
    }
}