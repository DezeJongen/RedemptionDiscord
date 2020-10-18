const discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    const reason = message.content.split(" ").slice(1).join(" ");

    const SupportCategory = message.guild.channels.cache.find(category => category.name === "Support");

    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
        SupportCategory = await message.guild.channels.create('Support', {
            type: 'category',
        });
    };

    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
        message.channel.send("Sorry, but do not have permission to create the catergory")
    }

    if (!message.guild.roles.cache.find(role => role.name === "Support Team")) {
        await (message.guild.roles.create({
            name: 'Support Team',
            color: 'BLUE',
        }));
    };

    const supportrole = message.guild.roles.cache.find(role => role.name === "Support Team")


    if (!supportrole) {
        return message.channel.send("There is no **Support Team** role in this server")
    }

    if(!reason) return message.channel.send("Please specify a ticket subject \n `ticket (subject`")

    const channelName = `ticket-${message.author.username}-${message.author.discriminator}`
    if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username}-${message.author.discriminator}`)) {
        return message.channel.send("You already have a ticket open")
    }

    message.guild.channels.create(channelName, { parent: SupportCategory.id, topic: `Ticket Owner: ${message.author.id}` }).then(c => {
        const sr = message.guild.roles.cache.get(supportrole)
        const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
        c.updateOverwrite(supportrole, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        c.updateOverwrite(everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        });
        let CreatedTicketEmbed = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("New Support Ticket")
            .setDescription(`<@${message.author.id}> Your support ticket channel is <${c.id}>`)
            .setTimestamp()
            .setFooter("Made By Spu")
        message.channel.send(CreatedTicketEmbed)
        let GreetEmbed = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("New Support Ticket")
            .addField(`new Support Ticket`, `,@${message.author.id}> Thanks for making a support ticket we will be with you shortly`)
            .addField(`Issue:`, reason)
            .setTimestamp()
            .setFooter("Made By Spu")
        c.send(GreetEmbed)
    }).catch((err) => console.error(err))


}

module.exports.help = {
    name: "ticket",
    aliases: ["new"]

}