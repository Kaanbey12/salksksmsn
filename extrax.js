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
  $let[a;$apiMessage[$channelID;{color:BDAAF9}{description:<a:emoji_28:852134852332617748> <@$mentioned[1]> Kişisi Için Bir Kayıt Sistemi Başlatıldı!}{thumbnail:$userAvatar[$mentioned[1]]};{actionRow:Erkek,2,3,erkek:Kız,2,4,kız:İptal,2,3,iptal};;yes]]
  $setUserVar[kayıtyapılan;$mentioned[1]]
  $setUserVar[kayıtisimyaş;$message[1] | $message[2]]
  $onlyPerms[admin;$getServerVar[admin]]
  $onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:$customEmoji[yasak] | Lütfen Birini Etiketle!}]
  `
  })



bot.variables({
  kayıtisimyaş:"",
  kayıtyapılan:"",
  hex:"BDAAF9",
  admin:"{color:$getServerVar[hex]}{thumbnail:$userAvatar}{descripton:$customEmoji[yasak] | Üzgünüm Admin Yetkin Yok}",
  kız:"842998514438111252",
  erkek:"842998200050122752"
  })

