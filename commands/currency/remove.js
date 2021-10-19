const point = require("../../lolmod")
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "remove",
    description: "remove Points",
    category: "currency",
    usage: "remove <mention a user> <points>",
    run: async (bot, message, args) => {
        let dbmanagerR = "744594423517806713"
        let perm = new MessageEmbed()
        .setColor("RED")
        .setDescription(`You dont have  <@&${dbmanagerR}>  to use this Command!!`)
        if(!message.member.roles.cache.has(dbmanagerR))return message.reply(perm);
        if (!message.mentions.members.first()) return message.reply("You didn't mention a user")
        if(isNaN(args[0])) return message.reply('**Points** Should be a Number')
        let ad = parseInt(args[0]);
        let user = message.mentions.members.first();
       message.mentions.members.forEach((us)=>{
        point.findOne({ Guild: message.guild.id, User: us.id },
            async (err, data) => {
                if (err) return message.reply("There was an Error Executing this command!");
                if (!data) {
                    let newdata = new point({
                        User: us.id,
                        Username: us.user.username,
                        Guild: message.guild.id,
                        Points: ad,
                    })

                    newdata.save()
                    let embed = new MessageEmbed()
                        .setColor("GREEN")
                        .setDescription(`Substracted **${ad}** points from **${us.user.username}**\nNew Points are **${ad}**`)
                    message.channel.send(embed)
                } else {
                    console.log(data.Points)
                    if (isNaN(data.Points)) return message.reply("error")
                    let old = data.Points;
                    data.Points = data.Points - ad;
                    data.save()
                    let embed = new MessageEmbed()
                        .setColor("GREEN")
                        .setDescription(`Substracted **${ad}** points from **${us.user.username}**\nNew Points are **${old - ad}**`)
                    message.channel.send(embed)
                    
                }
            }
        )
       })
    }
}