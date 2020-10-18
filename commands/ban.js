const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        //var args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry but you can't use this command")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission")

        if (!args[0]) return message.reply("No user has been gave up");

        if (!args[1]) return message.reply("No reason has been gave up");

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        var reason = args.slice(2).join(" ");

        if (banUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You cant ban other staff members!");

        
        if (!banUser) return message.reply("This user can't be found");

        var embedPromt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You want to ban ${banUser}?`);

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(`**Banned:** ${banUser}
            **Banned by:** ${message.author}
            **Reason:** ${reason}`);

        message.channel.send(embedPromt).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                banUser.ban(reason).catch(err => {
                    if (err) return message.reply("Something went wrong");
                });

                message.channel.send(embed);

            } else if (emoji === "❌") {
                msg.delete();

                message.reply("Banning has been cancelled").then(m => m.delete(5000));


            }

        })



    }

    

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);

    }

    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}
module.exports.help = {
    name: "ban"
}











