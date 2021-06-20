module.exports = {
  name: "telefon-al",
  aliases: ['buy-phone'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];500];$authorID]
$setGlobalUserVar[telefon;$sum[$getGlobalUserVar[telefon;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>499;500 Fcoin Eksik!]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📱 $username]
$description[
Güzel! 500 Fcoin Vererek Bir Telefon Aldın!
]
$footer[Bu Eşya Soygun Yaparken Kullanılır!]`
}