module.exports = {
name: "sat-ev", 
aliases: ['sale-house'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[125000;150000]];$authorID]
$setGlobalUserVar[ev;$sub[$getGlobalUserVar[ev;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[550;650]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏡 Satıldı!]
$description[
Güzel İş $username! Evini Başarıyla Sattın!!
]
$footer[💵 +$numberSeparator[$random[125000;150000]] Fcoin | 🗡 +$random[550;650]xp]
$globalCooldown[12h;2. Evini Satmak İçin %time% süre beklemelisin!]
$onlyIf[$getGlobalUserVar[ev;$authorID]>=1;Ev satmak için önce bir ev almalısın!]` 
}