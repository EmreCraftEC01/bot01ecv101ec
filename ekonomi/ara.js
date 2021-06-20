module.exports = {
 
  name: "ara",
  aliases: ['search'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[20;60]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$title[Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[annen uyurken yastığının içinde para buldun!;Babanın Cüzdanını Aradın!;Cumhurbaşkanının yatağını aradın;Frost Developmentin Kasasını Aradın!;Bankadan Yere Düşen Paraları Aradın!]
]
$footer[💵 +$random[20;60] Fcoin | 🗡 +$random[1;5]xp]
$globalCooldown[30m; Bu Komutu **%time%** Süre Geçtikten Sonra Tekrar Kullanabilirsin!]`
}