module.exports = {
  name: "kick",
  code: `

  $onlyPerms[kick; Bunun İçin Yetkiniz Yok!]
  $kick[$mentioned[1]]
  $description[<:ayarla:850106030419738644> Bir Kullanıcı Sunucumuzdan Atıldı!
  
  Kullanıcı: $message[1]
  
  Sebep: $message[2] $message[2] $message[3] $message[4] $message[5]
  
  Yetkili: <@$authorID>]
 $footer[Adalet Sağlancak!]
 $title[Sunucumuzda Bir Kullanıcı Atıldı!]
 $color[RED]
 $onylPerms[kick; Bunu Sadece Üyeleri Yasakla Yetkisi Olanlar Kullanabilir]`
}