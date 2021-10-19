const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
module.exports = {
    name: "register",
    description: "Verifies the Team!",
    category: "config",
    run: async (bot, message, args) => {
        if(message.channel.id === '743741962598744064' || message.channel.id === '743891999450595408' ){ 
        let user = message.author;

        let nick = args.slice(0).join(" ");
        if (!nick) return message.channel.send({ embed: { color: "RED", description: "You need to input the nickname!" } });

        let member = message.guild.members.cache.get(user.id);
        /*console.log(nick)
        try {
            member.setNickname(nick)
        } catch (error) {
            console.error();
        }*/
        let Success = new Discord.MessageEmbed()
      .setTitle("ESM MatchMaking")
      .setDescription(`Successfully changed the Nickname of  **<@${user.id}>** `)
      .setColor("GREEN")
      .setThumbnail("https://i.imgur.com/JJwIrbT.png")
      .setTimestamp(message.createdAt)
      .setFooter(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true, size: 256 })
      )


        await
            member.setNickname(nick)
                .then(() => {
                    member.roles.add("743739960569495582")
                    member.roles.remove("743747970637365248")
                    message.channel.send(Success);
                })
                .catch(err =>{
                    message.channel.send({ embed: { color: "RED", description: `Error: ${err}`}  })
                    console.log(err)
                });

    }else{
      message.reply('Command Only usable in IGN-Change or Verification')
    }

  }
}