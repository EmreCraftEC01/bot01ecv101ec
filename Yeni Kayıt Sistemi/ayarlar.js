module.exports = {
    name: "ayarlar",
    code: `
    
$addField[Kayıt Kanal;$replaceText[$replaceText[$checkCondition[$getServerVar[kayıtkanal]==];true;Kanal Ayarlanmamış];false;<#$getServerVar[kayıtkanal]>]]

$addField[Kayıt Log;$replaceText[$replaceText[$checkCondition[$getServerVar[kayıtlog]==];true;Kanal Ayarlanmamış];false;<#$getServerVar[kayıtlog]>]]

$addField[Erkek Rol;$replaceText[$replaceText[$checkCondition[$getServerVar[erkekrol]==];true;Erkek Rol Ayarlanmamış];false;<@&$getServerVar[erkekrol]>]]

$addField[Kadın Rol;$replaceText[$replaceText[$checkCondition[$getServerVar[kadınrol]==];true;Kadın Rol Ayarlanmamış];false;<@&$getServerVar[kadınrol]>]]

$addField[Üye Rol;$replaceText[$replaceText[$checkCondition[$getServerVar[üyerol]==];true;Üye Rol Ayarlanmamış];false;<@&$getServerVar[üyerol]>]]

$addField[Normal Sistem;$replaceText[$replaceText[$checkCondition[$getServerVar[normalsistem]==];true;Normal Sistem Açılmamış];false;Normal Sistem Açılmış!]]

$addField[Erkek Kız Kayıt Sistem;$replaceText[$replaceText[$checkCondition[$getServerVar[çiftkayıt]==];true;Erkek Kız Kayıt Sistemi Açılmamış];false;Erkek Kız Sistemi Açılmış!]]

$addField[Yetkili Rol;$replaceText[$replaceText[$checkCondition[$getServerVar[katyetkili]==];true;Yetkili Rol Ayarlanmamış];false;<@&$getServerVar[katyetkili]>]]

$footer[Beni Davet Etmek İçin $getServerVar[prefix]davet yazıp sunucuna mükemmel bir sistem kazandırabilirsin!]
`
}  