module.exports = {
name: "kindar-al",
aliases: ['buy-spiteful'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];1000];$authorID]
$setGlobalUserVar[kindar;$sum[$getGlobalUserVar[kindar;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Kindar Sandığı]
$description[1000 Fcoin ile kindar kasası satın aldınız!
** Açın ve ne bulduğunuzu görün!
Sadece uyarı! Kindar olabilir, İyi Şanslar!**
]
$footer[Kullanım: $getServerVar[prefix]sandıkaç-kindar]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>999;Need $1,000 in your cüzdan, try withrawing it first]`
}