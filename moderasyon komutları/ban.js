module.exports = {
  name: "ban",
  code: `
  $ban[$mentioned[1]]
  $description[<:ayarla:850106030419738644> Bir Kullanıcı Sunucumuzdan Yasaklandı!
  
  Kullanıcı: $message[1]
  
  Sebep: $message[2] $message[2] $message[3] $message[4] $message[5]
  
  Yetkili: <@$authorID>]
 $footer[Adalet Sağlancak!]
 $title[Sunucumuzda Bir Kullanıcı Yasaklandı!]
 $color[RED]
 $onlyPerms[ban; Bunu Sadece Üyeleri Yasakla Yetkisi Olanlar Kullanabilir]`
}