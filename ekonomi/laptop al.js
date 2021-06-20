module.exports = {
  	
name: "laptop-al",
  aliases: ['buy-laptop'],
  code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];1000];$authorID]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>999;Bunun İçin 1000 Fcoin'e İhtiyacın var.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[💻 $username]
$description[
Güzel! 1000 Fcoin İle Bir Laptop Aldın!
]
$footer[Soygun Yaparken Kullanılır!]`
}