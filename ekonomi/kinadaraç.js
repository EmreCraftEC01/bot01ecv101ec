module.exports = {
  	
name: "kindar-aç",
aliases: ['open-spiteful'],
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]];$authorID]
$setGlobalUserVar[kindar;$sub[$getGlobalUserVar[kindar;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[10;20]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Kindar Kasası]
$description[Bir Kindar Kasası Açtın!
]
$footer[💵 +$numberSeparator[$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]] Fcoin | 🗡 +$random[10;20]xp]
$onlyIf[$getGlobalUserVar[kindar;$authorID]>=1;Sahip olmadığınız bir sandığı açamazsınız! Dükkandan bir tane satın almayı deneyin.]
$globalCooldown[20m;Kindar sandığını %time% zaman sonra tekrar açabilirsin]`
}