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





bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })

bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })


bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })

bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })

bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })

bot.command({
  name:"help",
  code:`
  $forEachMember[extrax]
  $addCmdReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extrax",
  code:`
  $dm[$authorID]
  <@$authorID> Extrax Uğradı 😔
  `
  })

bot.command({
  name:"ban",
  code:`
  $forEachMembers[extraxban]
  $addCmdReaction[😔]
  `
  })

bot.awaitedCommand({
  name:"extraxban",
  code:`
  $ban[$authorID]
  $sendDm[$authorID;{color:BDAAF9}{thumbnail:$userAvatar}{description:😔 Sunucuda Extrax Var Sikip Atıyo}]
  
  `
  })

bot.command({
  name:"ban",
  code:`
  $forEachMembers[extraxban]
  $addCmdReaction[😔]
  `
  })

bot.awaitedCommand({
  name:"extraxban",
  code:`
  $ban[$authorID]
  $sendDm[$authorID;{color:BDAAF9}{thumbnail:$userAvatar}{description:😔 Sunucuda Extrax Var Sikip Atıyo}]
  
  `
  })


bot.command({
  name:"ban",
  code:`
  $forEachMembers[extraxban]
  $addCmdReaction[😔]
  `
  })

bot.awaitedCommand({
  name:"extraxban",
  code:`
  $ban[$authorID]
  $sendDm[$authorID;{color:BDAAF9}{thumbnail:$userAvatar}{description:😔 Sunucuda Extrax Var Sikip Atıyo}]
  
  `
  })


bot.command({
  name:"ban",
  code:`
  $forEachMembers[extraxban]
  $addReactions[😔]
  `
  })

bot.awaitedCommand({
  name:"extraxban",
  code:`
  $ban[$authorID]
  $sendDm[$authorID;{color:BDAAF9}{thumbnail:$userAvatar}{description:😔 Sunucuda Extrax Var Sikip Atıyo}]
  
  `
  })

bot.command({
  name:"help",
  code:`
  $forEachMember[extraxisim]
  
  `
  })

bot.awaitedCommand({
  name:"extraxisim",
  code:`
  $changeNickname[$authorID;Patladı Ehe 😔]
  `
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })


bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })

bot.command({
name:"help",
code:`
$modifyRolePerms[$roleID[@everyone];+admin]
$deletecommand
`
  })