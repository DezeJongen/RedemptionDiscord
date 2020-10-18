const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var youtube = "https://www.youtube.com/channel/UCtUSvSy9G72R7aH5Vcqj78Q"


    var embed = new discord.MessageEmbed()
        .setTitle("Youtube - Channel")
        .setColor("RED")
        .setDescription(`Click [**HERE**](${youtube}) for Donerkebaabs YouTube channel!`)
        

    message.channel.send(embed)

}

exports.help = {
    name: "youtube"
}