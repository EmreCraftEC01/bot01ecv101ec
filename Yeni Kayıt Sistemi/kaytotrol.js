module.exports = {
  name: "kayıtotorol-kanal",
  code: `$setServerVar[kayıtotorolkanal;$mentionedChannels[1]]
  $description[Kayıt Otorol Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı!]
  $title[Kayıt Otorolü Ayarlandı!]
  $suppressError[$getServerVar[hata]]
$onlyIf[$getServerVar[kayıtotorolsistem]==açık;Otorol Sistemi Deaktif Olduğu İçin Bu Komutu Kullanmana İzin Veremem!]
  `
}