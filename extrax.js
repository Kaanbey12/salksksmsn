const extrax = require('aoi.js');
const bot = new extrax.Bot({
  token: process.env.token,
  prefix:"."
  
  })

bot.loadCommands('./komutlar/');

bot.onMessage();
bot.onInteractionCreate();


bot.readyCommand({ 
    channel: "Log kanal İD", 
    code: `$djsEval[client.channels.cache.get("924325699362381848").join()]
<@$clientID> yeniden bağlandı. Online.
$log[$userTag[$clientID] ismi ile giriş yapıldı]`
}) 



  
bot.variables({
  kayıtisimyaş:"",
  kayıtyapılan:"",
  hex:"BDAAF9",
  admin:"{color:$getServerVar[hex]}{thumbnail:$userAvatar}{descripton:$customEmoji[yasak] | Üzgünüm Admin Yetkin Yok}",
  kız:"842998514438111252",
  erkek:"860498494476124170"
  })

