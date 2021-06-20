module.exports = {
  name: "unblacklist", 
  aliases: ['karalisteden-çıkar', 'whitelist', 'beyazliste'],
code: `$setGlobalUserVar[Blacklist;false;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] ✅ Kullanıcı Karalisteden Çıkarıldı!**
$onlyIf[$mentioned[1]!=;Birinden bahsetmelisin!]
$onlyIf[$mentioned[1]!=$authorID;**⛔ Kendinizi kara listeye alamazsınız!**]
$onlyForIDs[537283706709344276;**⛔ Bu komudu kullanmak İçin Sahibim Olmalısın!**]`
}