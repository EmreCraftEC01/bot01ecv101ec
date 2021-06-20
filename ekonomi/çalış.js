module.exports = {
  name: "çalış", 
aliases: ['work'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Çalış]
$description[
$username, $randomText[Frost Developmentta Çalıştın;Berberde Çalıştın;Bakkalda Çalıştın;Kuaförde Çalıştın;Markette Çalıştın;Askeriyede Çalıştın;Sevdiğin Kızın Yanında Çalıştın]
]
$footer[💵 +$random[45;100] Fcoin | 🗡 +$random[5;10]xp]
$globalCooldown[8h;Biraz dinlen ve %time% sonra tekrar işe git!]`
}