const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const prefix = "@";
const keepAlive = require('./server')


client.on("ready", () => {
  console.log(`okay ONLINE`)
  console.log(`Prefix - ${prefix}`)
  console.log(`Subscribe 2 MrTahfari`)
  client.user.setActivity({ type: "PLAYING", name: `Kyo Secrets` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'message')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply('you **DONT** have permissions...')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] message **SENT** successfully... | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] something happened :( | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] **SUCCESS**`)
      message.channel.send(`:white_check_mark: | **message SENT successfully**`).then(message.delete({ timeout: 15000 }));
    }
  }

})

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);
