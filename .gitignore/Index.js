const discord = require("discord.js");
const bot = new discord.Client();

var prefix = ("g/");

bot.on('ready', function(){
    bot.user.setGame("en dev");
    console.log("connected");
});

bot.login("NjEzMzY2NTk0MDkyOTI0OTY5.XV5GDQ.SIZtZW4Mtq8ph1mFo-y4r1LPGv4");


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commands: \n g/help");
   }

   if(message.content === "salut"){
       message.reply("bien le bonjour. :)");
       console.log("Commande Salut effectuer");
   }
})
