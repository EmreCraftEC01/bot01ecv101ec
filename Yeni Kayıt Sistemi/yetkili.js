module.exports = {
    name: "kayıtyetkili",
    code: `$setServerVar[yetkili;$findRole[$message[1]]
    $description[Yetkili Rolü <@&$findRole[$message[1]]> Olarak Ayarlandı!]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;{description: Ayarlamaya Çalıştığınız Rol Sunucuda Bulunamadı!}{color:RED}]
    $onlyIf[$message[1]!=;{title:Error:Yanlış Kullanım!}
{field:**Lütfen Şu Biçimde Kullanınız**:\`$getServerVar[prefix]yetkilirol <rol | rolID>\`}{color:RED}]
$onlyPerms[admin;Yetkinizin Yeterli Olduğunu Görmüyorum. Gereken Yetki:\`Yönetici\`]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]
$suppressErrors[$getServerVar[hata]]
`
}