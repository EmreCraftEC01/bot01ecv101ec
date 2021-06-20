module.exports = {
    name: "k",
    aliases: ["kız"],
    code: `  $giveRoles[$mentioned[1];$getServerVar[kadınrol]]
    $changeNickname[$mentioned[1];$noMentionMessage]
    $title[Kaydedilen Yeni Kullanıcı!][$description [Kaydeden: $username
    Kaydedilen: $mentioned[1]
    Yeni İsim: $message[2] $message[3]
    Yetkilinin Toplam Kaydettiği Üye Sayısı: $getUserVar[kayıtedilenkullanıcısayısı]
    Son Yeni Kullanıcı Sayısı: **$membersCount**]
    $setUserVar[kayıtedilenkullanıcısayısı;$authorID]
    $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
    $onlyIf[$hasRoles[$authorID;$getServerVar[yetkili]]!=false;Üzgünüm Bunu Sadece <@&$getServerVar[yetkili]]> Kişileri Kullanabilir !]
    $channelSendMessage[$getServerVar[kayıtlog]];{title: Yeni Bir Üye Aramıza Katıldı! Ona Merhaba Diyin!};{description: Ona Burada Sıcak Bir Karşılama Yapalım $serverName[$guildID] Arkadaşımızın İsmi: $mentioned[1]!}
    $argsCheck[>2; Lütfen İsim Yaş Belirtin!]
    onlyIf[$hasRole[$authorid;$getServerVar[katyetkili]]==true;Bu komutu sadece $roleName[$getServerVar[katyetkili]] rolündekiler kullanabilir.]
    

  `
}