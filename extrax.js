const extrax = require('aoi.js');
const bot = new extrax.Bot({
  token: process.env.token,
  prefix:"."
  
  })

bot.loadCommands('./komutlar/');

bot.onMessage();


bot.readyCommand({ 
    channel: "Log kanal İD", 
    code: `$djsEval[client.channels.cache.get("924325699362381848").join()]
<@$clientID> yeniden bağlandı. Online.
$log[$userTag[$clientID] ismi ile giriş yapıldı]`
}) 


bot.command({
  name:"$alwaysExecute",
  code:`
  $setServerVar[$sum[$getServerVar[rank;$authorID];1];$authorID]
  $onlyIf[$getServerVar[rank;$authorID]==$getServerVar[level];
  `
  })