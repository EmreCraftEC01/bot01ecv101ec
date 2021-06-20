module.exports = {
  name: "otorol-ayarla",
  code: `$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorolkanal;$mentionedChannels[1]]
  $description[Otorol Kanalı <#$mentionedChannels[1]> 
  Otorol <@&$mentionedRoles[1]> Olarak Ayarlandı!]
  $onlyPerms[admin; Bunun İçin Yetkiniz Yok!]
  `

}