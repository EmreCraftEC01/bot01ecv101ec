module.exports = {
  name: "araba-al",
  aliases: ['buy-car'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];10000];$authorID]
$setGlobalUserVar[araba;$sum[$getGlobalUserVar[araba;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];250];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=10000;10000 Fcoine ihtiyacın var!]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=250;250 XPye ihtiyacın var]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚗 $username]
$description[
Güzel! 10,000 Fcoin Vererek Bir Araba Aldın!
**250 XP Kaybettin!**
Arabayı Hurdaya Vererek Kar Elde Edebilirsin!
]
$footer[Kullanım: $getServerVar[prefix]hurdayap-araba]`
}