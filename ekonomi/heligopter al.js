  module.exports = {
    name: "helikopter-al",
    aliases: ['buy-helicopter'],
    code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];20000];$authorID]
  $setGlobalUserVar[helikopter;$sum[$getGlobalUserVar[helikopter;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];350];$authorID]
  $onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=20000;Bunun İçin 20000 Fcoin'e ihtiyacın var!]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=350;Bunun İçin 350 XP'nin olması lazım.]
  $thumbnail[$authorAvatar]
  $color[RANDOM]
  $title[🚁 $username]
  $description[
  Güzel! 20000 Fcoin vererek Bir Helikopter Aldın!
  **350 XP Kaybettin!**
  Helikopterin Parçalarını Alarak Satıp Kar Edebilirsin.
  ]
  $footer[Kullanım: $getServerVar[prefix]hurdayap-helikopter]`
  }