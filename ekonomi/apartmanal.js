module.exports = {
  name: "apartman-al",
  aliases: ["buy-apartment",],
  code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];50000];$authorID]
$setGlobalUserVar[apartman;$sum[$getGlobalUserVar[apartment;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];400];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=50000;Apartman Almak İçin 50.000 Fcoin'e ihtiyacın var!]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=400;Apartman Almak İçin 400 XP'ye ihtiyacın var!.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏫 $username]
$description[
Çok İyi! 50.000 Fcoin vererek bir apartman aldın!
**400 XP Kaybettin!**
Emlak işi yüksek talep görüyor ve fark yaratabilirsiniz! Kar elde etmek ve daha fazla XP kazanmak için Apartmanı Sat!
]
$footer[Kullanım: $getServerVar[prefix]apartman-sat]`
}