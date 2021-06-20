module.exports = {
  name: "hurdayap-kamyon",
  aliases: ['scrap-truck'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[16500;22000]];$authorID]
$setGlobalUserVar[kamyon;$sub[$getGlobalUserVar[kamyon;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[310;380]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚚 Hurda Oldu!]
$description[
Güzel $username! Aldığın Kamyonu Hurda Yaptın! 
]
$footer[💵 +$numberSeparator[$random[16500;22000]] Fcoin | 🗡 +$random[310;380]xp]
$globalCooldown[2h;Önce Hurda İşleminin Bitmesini Bekle Yaklaşık **%time%** süre!]
$onlyIf[$getGlobalUserVar[kamyon;$authorID]>=1;Lütfen Bir Kamyon Al!]`
}  