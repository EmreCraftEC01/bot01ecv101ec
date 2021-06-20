module.exprts = {
  name: "şans-sandığı",
  aliases: ['open-lucky'],
code: `
$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]
$setGlobalUserVar[şans;$sub[$getGlobalUserVar[şans;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[3;7]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Şans Sandığı]
$description[Bir Şans Sandığı Açtın!
]
$footer[💵 + $numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] Fcoin | 🗡 +$random[3;7]xp ]
$onlyIf[$getGlobalUserVar[şans;$authorID]>=1;Şans Sandığın Yok! Lütfen Marketten Bir Tane Satın Al!]
$globalCooldown[3m;Şans Sandığı Açmak İçin %time% Beklemelisin]`
}