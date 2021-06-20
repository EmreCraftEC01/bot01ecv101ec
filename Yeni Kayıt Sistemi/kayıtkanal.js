module.exports = {
    name: "kayıtkanal",
    code: `$setServerVar[kayıtkanal;$findChannel[$message[1]]
    $description[Kayıt Kanalı  <@#$findChannel[$message[1]]> Olarak Ayarlandı!]
    $onlyIf[$channelExists[$findChannel[$message[1]]]==true;{description: Ayarlamaya Çalıştığınız Kanal Sunucuda Bulunamadı!}{color:RED}]
    $onlyIf[$message[1]!=;{title:Error:Yanlış Kullanım!}
{field:**Lütfen Şu Biçimde Kullanınız**:\`$getServerVar[prefix]kayıtkanal <kanal | kanalID>\`}{color:RED}]
$onlyPerms[admin;Yetkinizin Yeterli Olduğunu Görmüyorum. Gereken Yetki:\`Yönetici\`]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]
$suppressErrors[$getServerVar[hata]]

`
}