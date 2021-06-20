module.exports = {
  	
name: "ev-al",
aliases: ['buy-house'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];100000];$authorID]
$setGlobalUserVar[ev;$sum[$getGlobalUserVar[ev;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];500];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=100000;100,000 Fcoine ihtiyacın var.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=500;500 XPye ihtiyacın var]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏡 $username]
$description[
Güzel! 100,000 Fcoin vererek Bir Ev Aldın!
500 XP Kaybettin
Evi Satıp Kar Elde Edebilirsin!
]
$footer[Kullanım: $getServerVar[prefix]sat-ev]`
}