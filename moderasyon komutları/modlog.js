module.exports = {
  name: "kur-modlog",
  aliases: ["modlog-kur", "modlog"],
  code: `
  
  $if[$message[1]==sıfırla]
  $setServerVar[modlog;0]
  $color[RANDOM]
  $channelSendMessage[$getServerVar[modlog];<@$authorID> - Mod Log $username#$discriminator[$authorID] Tarafından Sıfırlandı!]
  $suppressErrors[$getServerVar[hata]]
 
  $else
  $if[$channelExists[$findServerChannel[$message]]==true]
  $setServerVar[modlog;$findServerChannel[$message]]
  $description[ModLog <#$channelCategoryID[$findServerChannel[$message]]> Kategorisindeki <#$findServerChannel[$message]> Kanalına Ayarlandı!]
  $color[RANDOM]
  
  $endif
  $endif
  
  $argsCheck[>1;{title:Eksik Tanım!}{description:Lütfen Şu Tanımı Kullanın $getServerVar[prefix]modlog <#channel/ID/sıfırla>}{color:RED}]
  $onlyPerms[manageserver;{title:Eksik Yetki}{description:Sunucuyu Yönet Yetkiniz Bulunmuyor!}{color:RED}]`

}