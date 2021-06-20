module.exports = {
  name: "şanssandığı-al",
  aliases: ['buy-lucky'],
  code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];250];$authorID]
$setGlobalUserVar[şans;$sum[$getGlobalUserVar[şans;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>249;Bunu almak için 250 Fcoin'e ihtiyacın var!]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Şans Sandığı]
$description[250 Fcoin ile şanslı bir sandık satın aldınız!
Açın ve 5.000 Fcoin'lik şanslı potu kazanma şansı için şansınızı zorlayın! İyi şanslar!
]
$footer[Açmak İçin: $getServerVar[prefix]şans-sandığı]`
}