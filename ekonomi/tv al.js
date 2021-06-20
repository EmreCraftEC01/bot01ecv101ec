module.exports = {
  name: "tv-al",
  aliases: ['buy-tv'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];400];$authorID]
$setGlobalUserVar[tv;$sum[$getGlobalUserVar[tv;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>399;400 Fcoin Paraya İhtiyacın Var!]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📺 $username]
$description[
Güzel! 400 Fcoin ile Bir Televizyon Aldın!
]
$footer[Bu eşya bir soygun yapmak için kullanılır]`
}