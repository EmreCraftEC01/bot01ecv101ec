module.exports = {
  name: "levelupmesaj",
 usage: "levelupmesaj <mesaj>",
 description: "message for the leveled up",
 code: `
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
 $description[Mesajı şu şekilde ayarladınız: \`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;Ayrıca şu değişkenleri de kullanabilirsiniz:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;{description:Bu Yetkiye İhtiyacım Var: \`Herkesten Bahset\`}{color:ff2050}]
$onlyPerms[manageserver;{description:Bu komudu kullanmak için \`SUNUCUYU YÖNET\` yetkisine ihtiyacın var!}{color:ff2050}]
$cooldown[5s;Bu komutu kullanmak için **%time%** beklemelisin]`
}
