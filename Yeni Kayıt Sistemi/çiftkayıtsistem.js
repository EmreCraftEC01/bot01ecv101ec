module.exports = {
    name: "çiftrolsistem-kapat",
    code: `$setServerVar[çiftkayıt;kapalı]
    $description[Erkek Kız Kayıt Sistemi Sistem Deaktive Edildi! ]
    $onlyPerms[admin; Yeterli Yetkide Olduğunuzu Düşünmüşüyorum. Lütfen \`Yönetici\` Yetkinizin Olduğuna Emin Olun Ve İşleme devam edin!]
    $suppressErrors[$getServerVar[hata]]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]

`
}