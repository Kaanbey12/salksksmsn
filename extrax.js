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
  name:"kayıt",
  code:`
  $let[a;$apiMessage[$channelID;{color:BDAAF9}{description:
  <a:emoji_28:852134852332617748> <@$mentioned[1]> Kişisi Için Bir Kayıt Sistemi Başlatıldı!
  }{thumbnail:$userAvatar[$mentioned[1]]}{actionRow:Erkek,2,3,erkek:Kız,2,4,kız:İptal,2,3,iptal};;yes]]
  $setUserVar[kayıtyapılan;$mentioned[1]]
  $onlyPerms[admin;$getServerVar[admin]]
  `
  })

bot.variables({
  kayıtyapılan:"",
  admin:"{
  })