module.exports = {
  name: "dilen", 
aliases: ['beg'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[0;25]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$title[Dilen]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Kyzerden Para Dilendin;Jandarmadan Para Dilendin;Mahkumdan Para Dilendin;Polisten Para Dilendin;Zabıtadan Para Dilendin;Cumhurbaşkanından Para Dilendin;Sevgilinden Para Dilendin;Hırsızdan Para Dilendin;Frost Development Admininden Para Dilendin]
]
$footer[💵 +$random[0;25] Fcoin | 🗡 +$random[0;5]xp]
$globalCooldown[8h;%time% sonra tekrar dilenebilirsin!]`
}