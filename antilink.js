const db = require("quick.db");
const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";
//app active
//other req
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
});
//command handler maybe
bot.on("message", async message => {
  if(message.content == "delete"){
    console.log("o")
    let a = db.all();
    console.log(a)
    for(let i = 0;i <=a.length-1;i++){
      db.delete(a[i].ID)
    }
    message.reply("DOne")
  }
  if(message.content == "show"){
    console.log(db.all())
  }
  let regx = new RegExp("https://www.");
  let reg = new RegExp("http://www.");
  if (
    regx.test(message.content.toLowerCase()) == true ||
    reg.test(message.content.toLowerCase()) == true
  ) {
    if (!message.member.permissions.has("EMBED_LINKS")) {
      message.delete();
      message.reply("Do not send links");
    }
  } else {
    if (message.author.bot == true) return;
    if (message.content.toLowerCase().startsWith("!")) {
      if (!message.guild) return;
      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      let cmd = args.shift().toLowerCase();
      if (cmd.length == 0) return;
      let command = bot.commands.get(cmd);
      if (!command) command = bot.commands.get(bot.aliases.get(cmd));
      if (command) {
        if (
          db.has(`data_${message.author.id}.timeout.${command.name}`) == false
        ) {
          db.set(`data_${message.author.id}.timeout.${command.name}`, 0);
        }
        command.run(bot, message, args);
      }
    }
  }
});