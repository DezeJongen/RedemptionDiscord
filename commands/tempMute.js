const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry but you can't use this command")

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No permission")

    if (!args[0]) return message.reply("No user has been gave up");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("This user can't be found");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("You cant mute other staff members!");

    var muteRole = message.guild.roles.cache.get(`765866618542096415`)
    if (!muteRole) return message.channel.send("Role muted has not been found!");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("No mute time has been found");

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} has been muted for ${muteTime}`);

setTimeout(() => {
    
mutePerson.roles.remove(muteRole.id);

message.channel.send(`${mutePerson} has been unmuted`);


}, ms(muteTime));


}

module.exports.help = {
    name: "tempmute"
}