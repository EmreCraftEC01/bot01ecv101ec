module.exports = {
	
name: "çanta-al",
aliases: ['buy-bag'],
code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];250];$authorID]
$setGlobalUserVar[yün;$sum[$getGlobalUserVar[yün;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[💼 $username]
$description[
250 Fcoin Vererek Bir Çanta Aldın!!
]
$footer[Bu eşya bir soygun yapmak için kullanılır]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>249;Bu eşyayı almak için 250 Fcoin'e ihtiyacın var!]`
}