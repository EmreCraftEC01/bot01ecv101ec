module.exprts = {
  name: "sandıkaç-şans",
  aliases: ['open-lucky'],
code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[3;7]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Şans Sandığı]
$description[Bir Şans Sandığı Açtın!
]
$footer[💵 + $numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] Fcoin | 🗡 +$random[3;7]xp ]
$onlyIf[$getGlobalUserVar[lucky;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
$globalCooldown[3m;Şans Sandığı Açmak İçin %time% Beklemelisin]`
}