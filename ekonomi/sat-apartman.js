module.exports = {
  name: "sat-apartman", 
  aliases: ['sale-apartment'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[70000;95000]];$authorID]
$setGlobalUserVar[apartman$sub[$getGlobalUserVar[apartman;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[425;525]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏫 Satıldı!]
$description[
Güzel İş! $username! Apartmanını Başarıyla Sattın!
]
$footer[💵 +$numberSeparator[$random[70000;95000]] Fcoin | 🗡 +$random[425;525]xp]
$globalCooldown[12h;Başka Apartman Satmak İçin %time% süre beklemelisin!]
$onlyIf[$getGlobalUserVar[apartman;$authorID]>=1;Apartman Satmak İçin Apartman Almalısın!]` 
}