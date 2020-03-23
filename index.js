const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **MESSAGE SENT** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Bot is online now!');
    let statuses = [
        "  a y a n _ ",
        "  g h o s t _ ",
        "  a c b _ " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.login("NjkxNjI3NzM4MjI5ODk5Mjk1.XniuqQ.DVE7lmfjUZzMXa36BPpSV99PXgE");