const Discord = require("discord.js");
const ms = require('ms')
const fs = require("fs");
const Timeout = new  Set();
const bot = new Discord.Client();
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach((handler)=>{
  require(`./handlers/${handler}`)(bot);
});
bot.on("ready", async () => {
  function randomStatus() {
        let status = [">help"] // You can change it whatever you want.
        let rstatus = Math.floor(Math.random() * status.length);
          bot.user.setActivity(status[rstatus], {type: "LISTENING", url: "https://discord.gg/jseTk2F"});
        }; setInterval(randomStatus, 18000)
    console.log(`Hi, ${bot.user.username} is now online!`);
});
bot.on("message", async (message) => { 
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  if(!message.member)message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if(cmd.length == 0) return;
    let command = bot.commands.get(cmd)
  if(!command) command = bot.commands.get(bot.aliases.get(cmd));
  if(command){
   command.run(bot,message,args)
 }
});
bot.login(token);