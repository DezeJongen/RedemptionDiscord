const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry but you can't use this command")

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No permission")

    if (!args[0]) return message.reply("No user has been gave up");

    if (!args[1]) return message.reply("No reason has been gave up");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("This user can't be found");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You cant warn other staff members!");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    })

var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(`**Warned:** ${warnUser}
            **Warned by:** ${message.author}
            **Reason:** ${reason}`)
            .addField("Warns:", warns[warnUser.id].warns);

var channel = message.member.guild.channels.cache.get("765645889959886900");

if(!channel) return message.reply("No log channel has been found!");

channel.send(embed);

}

module.exports.help = {
    name: "warn"
}