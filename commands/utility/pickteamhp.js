const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const talkedRecently = new Set();
const shuffle = require("shuffle-array")

module.exports = {
  name: "pickteamhp",
  description: "Gives Random captain",
  category: "Utility",
  run: async (bot, message, args) => {
    if(message.channel.id === '750257469644734495'){
    if (username.length > player){
   let role = "750257768811855953"
   let player = '9'
   let a = message.guild.roles.cache.get(role).members.map(m => m.user.tag)
   let b = shuffle(a)
   let c = shuffle(b)
   let d = shuffle(c)
   let e = shuffle(d)
   let f = shuffle(e)
   let g = shuffle(f)
   let username = shuffle(g)
   if (username.length > player){
let team1 = [];
let team2 = [];
const random = require("random")
let c1 = random.int(0,3)
let c2 = random.int(4,7)
let cap1 = 0;
let cap2 = 0;
for(let i =0; i<=10;i++){
  if (i >= 0 && i <= 4) {
    team1.push(username[i])
  if(i == c1){
  cap1 = username[i];
  }
  } else if (i >= 5 && i <= 9) {
    team2.push(username[i])
  if(i==c2){
  cap2 = username[i]
  }
  }
  }
let em = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Captain of **Team 1**: ${cap1}\nCaptain of **Team 2**: ${cap2}\nMembers of **Team 1**:\n${team1.join("\n")}\nMembers of **Team 2**:\n${team2.join("\n")}`)
message.channel.send(em)
  
  }else{
    let playerneed =  `${username.length - 10}`
    let corect = Math.abs(playerneed)
    let fail = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Not Enough Players!`)
    .setDescription(`${corect} Players needed To start`)
     message.reply(fail)
   }}
   else{ message.channel.send("This command can only be executed in **HP Communication**")
}}}}
