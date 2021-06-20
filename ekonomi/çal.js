module.exports = {	
name: "çal",
  aliases: ['steal'],
code: `
$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[250;2500]];$authorID]
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$mentioned[1]];$random[250;2500]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[75;150]];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username $username[$mentioned[1]]'in bankasından Fcoin Çaldı!]
$description[
$addField[$username;
💵 +$random[1000;2500] Fcoin
🗡 +$random[75;150]xp
Toplam: $sum[$getGlobalUserVar[cüzdan;$authorID];$random[1000;2500]] Fcoin | $sum[$getGlobalUserVar[XP;$authorID];$random[75;150]]xp
]
$addField[$username[$mentioned[1]];
Toplam: $sub[$getGlobalUserVar[cüzdan;$mentioned[1]];$random[1000;2500]] Fcoin | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]]xp
]]
$footer[💵 -$random[1000;2500] Fcoin | 🗡 -$random[75;150]xp]
$globalCooldown[30m;]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=1000;Birinin banka hesabından para çalmak için en az 1.000 XP'ye ihtiyacınız var]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=500;Cüzdanından Çalmak için en az 500 XP'ye ihtiyaçları var!]
$onlyIf[$getGlobalUserVar[banka;$mentioned[1]]>=7500;Bankalarının çalınması için en az 7.500 Fcoin içermesi gerekiyor.]
$onlyIf[$isBot[$mentioned[1]]!=true;Discord Botlarını Soyamazsın!]
$onlyIf[$mentioned[1]!=$authorID;Kendini Soyamassın!]
$onlyIf[$mentioned[1]!=;Birini Etiketlemelisin! Bunu dene: \`$getServerVar[prefix]çal @kullanıcı\`]`
}