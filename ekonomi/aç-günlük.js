module.exports = {
  name: "sandıkaç-günlük",
  aliases: ['open-daily'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];250];$authorID]
$setGlobalUserVar[günlüksandık;$sub[$getGlobalUserVar[günlüksandık;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];15];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Günlük Sandık]
$description[$username, Bir Günlük Kasa Açtı!
]
$footer[💵 +250 Fcoin | 🗡 +15xp]
$onlyIf[$getGlobalUserVar[günlüksandık;$authorID]==1;**⛔ Senin Günlük Sandığın Yok! Almak İçin: \`$getServerVar[prefix]günlük\`**]`
}