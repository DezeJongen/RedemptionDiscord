const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Couldnt find any files!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`The file ${f} is loaded`);

        bot.commands.set(fileGet.help.name, fileGet);

    })


});


bot.on("Ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("Factions", { type: "PLAYING" });

});

bot.on("message", async message => {

    //Als bit bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);




});


bot.login(botConfig.token);

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get(`752592496458203195`);

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get(`752592496890085504`);

    if (!channel) return;

    channel.send(`Hey ${member}, welcome in the Redemption Discord!`);

})


 bot.login(process.env.token);