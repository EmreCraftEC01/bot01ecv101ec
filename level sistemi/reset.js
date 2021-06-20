module.exports = {
name: "levelkanal-sıfırla",
 usage: "levelkanal-sıfırla #kanal ",
 description: "reset the levelup channel",
 code: `
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
 $description[Seviye Kanalı Başarıyla Sıfırlandı!]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Seviye sistemi bu sunucuda __devre dışı__ bırakıldı}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:Bu Yetkiye İhtiyacım Var: \`Herkesten Bahset\`}{color:ff2050}]
$onlyPerms[manageserver;{description:Bu komudu kullanmak için \`SUNUCUYU YÖNET\` yetkisine ihtiyacın var!}{color:ff2050}]
$cooldown[5s;Bu komutu kullanmak için **%time%** beklemelisin]`
}