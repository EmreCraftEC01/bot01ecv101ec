module.exports = {
name: "levelkanal",
aliases: [],
usage: "levelkanal <kanal>",
description: "Level Kanalı Ayarlar",
code: `
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
$description[Level Kanalı <#$mentionedChannels[1;yes]> olarak ayarlandı!]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:Bu Yetkiye İhtiyacım Var: \`Herkesten Bahset\`}{color:ff2050}]
$onlyPerms[manageserver;{description:Bu komudu kullanmak için \`SUNUCUYU YÖNET\` yetkisine ihtiyacın var!}{color:ff2050}]
$cooldown[5s;Bu komutu kullanmak için **%time%** beklemelisin!]`
}