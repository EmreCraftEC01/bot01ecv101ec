  module.exports = {
    name: "kamyon-al.js",
    aliases: ['buy-truck'],
  code: `$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];15000];$authorID]
  $setGlobalUserVar[kamyon;$sum[$getGlobalUserVar[kamyon;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];300];$authorID]
  $onlyIf[$getGlobalUserVar[cüzdan;$authorID]>=15000;15,000 Fcoine İhtiyacın Var! ]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=300;300 XPye İhtiyacın var!]
  $thumbnail[$authorAvatar]
  $color[RANDOM]
  $title[🚚 $username]
  $description[
  Güzel! 15000 Fcoin Vererek Bir Kamyon Satın Aldın!
  **300 XP Kaybettin!!**
  Kamyonu Hurda Yapabilir ve Karlı Çıkabilirsin!.
  ]
  $footer[Kullanım: $getServerVar[prefix]hurdayap-kamyon]`
  }