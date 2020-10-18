const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try{

var text = "**Redemption Bot** \n\n**commands** \n !roster - tells the faction roster of Vanity.\n !youtube - to see DonerKebaabs YouTube channel. \n\n **staff commands** \n !kick - With this command u can kick someone.(!kick [user] [reason]) \n !ban - With this command u can ban someone. (!ban [user] [reason])\n !warn - With this command u can warn someone (!warn [user] [reason]) \n !clear -  With this command u can clear messages (!warn [how many] \n !announcement - With this you can make a announcement (!announcement [title] , [message] , [color] , [channel]"

message.author.send(text);

message.reply("**A help list has been send in your private message.**").then(msg => msg.delete({timeout: 3000}))

}catch (error) {
message.reply("Something went wrong!");
    }

}

module.exports.help = {
    name: "help"
}