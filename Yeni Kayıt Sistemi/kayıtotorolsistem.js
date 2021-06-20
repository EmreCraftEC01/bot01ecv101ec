module.exports = {
    name: "kotorolsistem-aç",
    code: `$setServerVar[kayıtotorolsistem;açık]
    $description[Otorol sistemi Aktive Edildi Gelen Üyelere Kayıtsız Rolü Verilecektir!]
    $onlyPerms[admin; Yeterli Yetkide Olduğunuzu Düşünmüşüyorum. Lütfen \`Yönetici\` Yetkinizin Olduğuna Emin Olun Ve İşleme devam edin!]
    $suppressErrors[$getServerVar[hata]]
$onlyBotPerms[admin;Benim Yetkimin Yetersiz Olduğunu Görüyorum. Lütfen Bana Bu Yetkiyi Verin:\`Yönetici\`]

$onlyIf[$getServerVar[kayıtotorolsistem]==kapalı;**Sunucuda Zaten Kayıt Otorol Sistemi Bulunuyor!]
`
}