module.exports = {
  	
name: "hurdayap-helikopter",
aliases: ['scrap-helicopter'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[22000;29000]];$authorID]
$setGlobalUserVar[helikopter;$sub[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[360;435]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚁 Hurda Oldu!]
$description[
Güzel $username! Helikopterini Hurda Yaptın!
]
$footer[💵 +$numberSeparator[$random[22000;29000]] Fcoin | 🗡 +$random[360;435]xp]
$globalCooldown[2h;Tekrar Hurda Yapabilmek İçin **%time%** süre beklemelisin!]
$onlyIf[$getGlobalUserVar[helikopter;$authorID]>=1;Helikopterin Yok Lütfen Birtane Satın Al!!]`
}