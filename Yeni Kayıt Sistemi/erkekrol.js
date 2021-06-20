module.exports = {
    name: "erkekrol",
    code: `$setServerVar[erkekrol;$findRole[$message[1]]
    $description[Erkek Rolü  <@&$findRole[$message[1]]> Olarak Ayarlandı!]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;{description: Ayarlamaya Çalıştığınız Rol Sunucuda Bulunamadı!}{color:RED}]
    $onlyIf[$message[1]!=;{title:Error:Yanlış Kullanım!}
{field:**Lütfen Şu Biçimde Kullanınız**:\`$getServerVar[prefix]erkekrol <rol | rolID>\`}{color:RED}]
$onlyPerms[admin;Yetkinizin Yeterli Olduğunu Görmüyorum. Gereken Yetki:\`Yönetici\`]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]
$suppressErrors[$getServerVar[hata]]

$onlyIf[$getServerVar[çiftkayıt]==açık;Erkek Kız Kayıt sistemi açılmamış Olduğu için Bu işlemi gerçekleştiremezsin!]

`
}