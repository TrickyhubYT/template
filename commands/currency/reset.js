const db = require("../../lolmod");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "reset",
  category: "currency",
  description: "Reset the database",
  run: async (bot, message, args) => {
    let dbmanagerR = "746417699730489425"
        let perm = new MessageEmbed()
        .setColor("RED")
        .setDescription(`You dont have  <@&${dbmanagerR}>  to use this Command!!`)
        if(!message.member.roles.cache.has(dbmanagerR))return message.reply(perm);
    db.deleteMany({ Guild: `${message.guild.id}` }, function (err) {
      if(err) console.log(err);
      console.log("Database Successfully reset By "  + message.author.tag)
      let embed = new MessageEmbed()
                .setColor("RED")
                .setDescription("Database Successfully reset By "+ `<@${message.author.id}>`)
      message.channel.send(embed)
    });
  }
}
