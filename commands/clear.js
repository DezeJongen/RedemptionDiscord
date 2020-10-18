const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but u cant do this!");

    if (!args[0]) return message.reply("No messages has been said.");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Can't delete 0 messages").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] === 1) {
                message.reply("Deleted 1 message.").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Deleted ${args[0]} messages.`).then(msg => msg.delete({ timeout: 3000 }));
            }



        })

    } else {
        return message.reply("Give a number of messages that has to be deleted");
    }

}

module.exports.help = {
    name: "clear"
}