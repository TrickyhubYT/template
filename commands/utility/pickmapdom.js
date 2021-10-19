
        const { MessageEmbed } = require("discord.js");
        const e = require("express");
        const talkedRecently = new Set();
        module.exports = {
          name: "pickmapdom",
          description: "Gives random map",
          category: "Utility",
          run: async (bot, message, args) => {
        if(message.channel.id === '743888556547899453'){ 
          let role = "743897320478736446"
          let username = message.guild.roles.cache.get(role).members.map(m => m.user.tag)
          let player = '7'
          if (username.length > player){
       const responses = ['Firing range','Standoff', 'Meltdown'];
       const respond = () => responses[Math.floor(Math.random() * responses.length)]
       let map = new MessageEmbed()
           .setColor("GREEN")
           .setDescription(`Your Game Map is **${respond()}** Goodluck!`)
            message.reply(map)  
          }else{
            let playerneed =  `${username.length - 8}`
            let corect = Math.abs(playerneed)
            let fail = new MessageEmbed()
            .setColor("RED")
            .setTitle(`Not Enough Players!`)
            .setDescription(`${corect} Players needed To start`)
             message.reply(fail)
           }
          
         }else{ message.channel.send("This command can only be executed in **DOM Communication**")
        }
       }
       

      }
