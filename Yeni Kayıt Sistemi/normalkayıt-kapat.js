module.exports = {
    name: "normalkayıt-kapat",
    code: `$setServerVar[normalsistem;kapalı]
    $description[Normal Sistem Deaktive Edildi! ]
    $onlyPerms[admin; Yeterli Yetkide Olduğunuzu Düşünmüşüyorum. Lütfen \`Yönetici\` Yetkinizin Olduğuna Emin Olun Ve İşleme devam edin!]
    $suppressErrors[$getServerVar[hata]]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]
`
}