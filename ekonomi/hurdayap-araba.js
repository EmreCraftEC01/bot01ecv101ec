module.exports = {
  	
name: "hurdayap-araba",
  aliases: ['scrap-car'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[11000;16000]];$authorID]
$setGlobalUserVar[araba;$sub[$getGlobalUserVar[araba;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[260;300]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚗 Hurda Yapıldı!]
$description[
Güzel $username! Arabanı Hurda Yaptın!!
]
$footer[💵 +$numberSeparator[$random[11000;16000]] Fcoin | 🗡 +$random[260;300]xp]
$globalCooldown[2h;Arabanı Tekrar Hurdaya Vermek İçin \`%time%\` Beklemelisin!]
$onlyIf[$getGlobalUserVar[araba;$authorID]>=1;Hurda Yapmak İçin Bir Arabaya İhtiyacın Var!]`
}