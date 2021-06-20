module.exports = {
  name: "soy",
  aliases: ['rob'],
code: `
$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$mentioned[1]];$random[0;750]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[50;75];$authorID]]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username $username[$mentioned[1] isimli kişiyi soydu!]
$description[
$addField[$username;
💵 +$random[0;750] Fcoin
🗡 +$random[50;75]xp
Toplam: $sum[$getGlobalUserVar[cüzdan;$authorID];$random[0;750]] Fcoin | $sum[$getGlobalUserVar[XP;$authorID];$random[50;75]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[cüzdan;$mentioned[1]];$random[0;750]] Fcoin | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]]xp
]]
$footer[💵 -$random[0;750] Fcoin | 🗡 -$random[50;75]xp]
$globalCooldown[15m;Tekrar Soygun Yapabilmek İçin %time% süre beklemelisin]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=750;Birini soymak için cüzdanınızın en az 750 Fcoin içermesi gerekiyor.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=75;Birini soymak için en az 75xp'ye ihtiyacınız var.]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=25;en az 25xp'ye ihtiyaçları var]
$onlyIf[$getGlobalUserVar[cüzdan;$mentioned[1]]>=750;Etiketlediğin Kişinin Cüzdanında 750 Fcoin yok!]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Botları Soyamassın!**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ Kendini soyamazsın**]
$onlyIf[$mentioned[1]!=;**⛔ Soymak için birinden bahset**]`
}