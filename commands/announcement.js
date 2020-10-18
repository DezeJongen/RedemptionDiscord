const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry but you can't do this");

    var seperator = ",";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Announcement")
            .setColor("#00ee00")
            .setDescription(`Make a announcement by using:\n !announcement title ${seperator} message ${seperator} color ${seperator} channel`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "𝙰𝚗𝚗𝚘𝚞𝚗𝚌𝚎𝚖𝚎𝚗𝚝𝚜";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "No content is specified",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(options.kleur)
        .setDescription(`Message from ${message.author} \n\n ${options.titel} \n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Thats channel doesn't exsist");

    channel.send(announceEmbed);


}

module.exports.help = {
    name: "announcement"
}