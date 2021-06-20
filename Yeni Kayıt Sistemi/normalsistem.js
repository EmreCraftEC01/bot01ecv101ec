module.exports = {
    name: "normalkayıt-aç",
    code: `$setServerVar[normalsistem;açık]
    $description[Normal Sistem Aktive Edildi! Üyelere Tek Bir Rol Verilecektir!]
    $onlyPerms[admin; Yeterli Yetkide Olduğunuzu Düşünmüşüyorum. Lütfen \`Yönetici\` Yetkinizin Olduğuna Emin Olun Ve İşleme devam edin!]
    $suppressErrors[$getServerVar[hata]]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]

$onlyIf[$getServerVar[çiftkayıt]==kapalı;**Sunucuda Zaten Erkek Kız Kayıt Sistemi Bulunuyor!]
`
}