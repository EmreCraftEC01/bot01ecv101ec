module.exports = {
name: "günlük",
aliases: ['daily'],
  code: `$setGlobalUserVar[günlüksandık;$sum[$getGlobalUserVar[günlüksandık;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Günlük]
$description[
1 Adet Günlük Sandığınız Var!

]
$footer[Sandığı Açmak İçin, $getServerVar[prefix]sandıkaç-günlük]
$onlyIf[$getGlobalUserVar[günlüksandık;$authorID]<1;**Envanterinde Zaten Bir Günlük Sandık Var! Lütfen Onu Açıp Tekrar Dene Açmak İçin: ** \`$getServerVar[prefix]sandıkaç-günlük\`]
$globalCooldown[12h;**⛔ Bu Komutu %time% içinde tekrar kullanabilirsin!**]`
}