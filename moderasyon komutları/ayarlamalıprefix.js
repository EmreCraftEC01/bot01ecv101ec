module.exports = {
name: "setprefix",
aliases: ['changeprefix', 'prefix', 'prefixayarla'],
code: `
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
$author[Başarılı;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Bu Sunucuda Prefixim:** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**Prefixi Ayarlamak İçin:** \`$getServerVar[prefix]setprefix \`]
$onlyPerms[admin;**Bu komutu kullanmak için** \`ADMIN\` **yetkisine sahip olmalısın!**]`
}