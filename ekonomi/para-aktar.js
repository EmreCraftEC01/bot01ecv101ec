module.exports = {
  name: "para-aktar", 
aliases: ['givemoney', 'give-money'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username $username[$mentioned[1]]e Para Aktardı!]
$description[
$username $username[$mentioned[1]]'e **$noMentionMessage** Kadar Para Verdi!!
$username[$mentioned[1]] şimdi **$sum[$getGlobalUserVar[cüzdan;$mentioned[1]];$noMentionMessage]** Fcoin Cüzdanında!!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[cüzdan;$authorID];**⛔ Cüzdanınızda yeteri kadar Fcoin yok**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ Kendine para veremezsin**]
$onlyIf[$mentioned[1]!=;**⛔ Komutu Yanlış Kullandın! Bu doğrusu \`$getServerVar[prefix]para-aktar <@kullanıcı> <miktar>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ Bir Bota Para Veremezsin!**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ Bu Bir Rakam Değil!**: \`$getServerVar[prefix]para-aktar <@kullanıcı> <miktar>\`]
$suppressErrors[Kullanım: **$getServerVar[prefix]para-aktar <@kullanıcı> <miktar>**]`
}