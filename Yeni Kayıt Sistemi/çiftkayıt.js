module.exports = {
    name: "çiftrolsistem-aç",
    code: `$setServerVar[çiftkayıt;açık]
    $description[Erkek Kız Kayıt Sistem Aktive Edildi! Üyelere Erkek veya Kız Rolü Verilecektir!]
    $onlyPerms[admin; Yeterli Yetkide Olduğunuzu Düşünmüşüyorum. Lütfen \`Yönetici\` Yetkinizin Olduğuna Emin Olun Ve İşleme devam edin!]
    $suppressErrors[$getServerVar[hata]]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]

$onlyIf[$getServerVar[normalkayıt]==kapalı;**Sunucuda Zaten Üye Rollü Kayıt Sistemi Bulunuyor!]
`
}