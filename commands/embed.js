const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    var botEmbed = new discord.MessageEmbed()
        .setTitle("Redemptions discord -bot")
        .setDescription("»**!help** om alle commands op een rijtje te zien\n »**!roster** Om de Redemptions faction roster te zien. \n »**!youtube** om DonerKebaabs YT link te krijgen.")
        .setColor("#f5bf42");

    return message.channel.send(botEmbed)
}

//**Roster REDEMPTION** \n===================== \n**[L]** DonerKebaab\n**[CL]** Husieh\n**[C]** Backero\n=====================\n**[M]** Tinus\n**[M]** HellsPvP \n**[M]** ? \n=====================\n**[R]** Nqlls\n**[R]** BroodjeWorst\n**[R]** Fainth\n**[R]** Gido\n**[R]** ?s\n=====================\n -You think you are good enough to join our faction?\n -Create a ticket on the Redemption Discord! \n=====================
//»**!help** om alle commands op een rijtje te zien\n »**!roster** Om de Redemptions faction roster te zien. \n »**!youtube** om DonerKebaabs YT link te krijgen.
//__**MUTES:**__\n –Swearing **2D**\n –Racism **4D**\n –Sexism **4D**\n –Discrimination **4D**\n –Spamming **1D**\n –Death threats **5D**\n __**BANS:**__\n –DDOS/DOXS threats **(perm)**\n –Abusing a bug **10D**\n –PM advertisement **10D**\n –Sending IPloggers **(perm)**\n –Sending IRL info/photos **(perm)**\n –Alting while your main is banned/muted **(perm)**\n__**NOTE:**__ By joining our Discord server you will automatically aprove with these rules.

module.exports.help = {
    name: "embed"
}