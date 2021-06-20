module.exports = {
  name: "botstats",
  aliases: ["botinfo", "stats", 'istatistik', 'i'],
  description: "Get bot's Stats",
  usage: "<prefix>info (stat name || all)",
  code: `
  $title[Frost Botun İstatistik Durumu <:frost:851108656682106890> ]
  $description[
  \`Sahip Bilgileri\`
 <a:kral:841976438139387904> Sahip: <@537283706709344276> 
 <a:kral:841976438139387904>  Geliştirici: <@537283706709344276>
 <a:kral:841976438139387904> Sahip Discord Sunucusu: [Tıkla!](https://discord.gg/PTpfftjqTt) <:frost:851108656682106890> 
  
  \`Bot Bilgileri\`
 
 <a:yukleniyor:841976383773212693> Uptime Süresi:
 **$uptime**
 
 <a:destek:841976303052652545> Kullanıcılar: 
 **$allMembersCount**
  
 <a:gif24:852834616913428481> Sunucular:
 **$serverCount**
 
 <a:ayarlama:841976329599320064> Komut Sayısı:
 **$commandsCount**
 
 <a:gif501:852834607820963870> Ping:
 **$ping**
 
<a:ytloadinh:841976255976046644> Oluşturulma Tarihi:
**$creationDate[839052065476968458]**

  \`Sistem\`
  
<:istatistik:842036389351784458> CPU Kullanımı:
**%$cpu**  

<:istatistik:842036389351784458> RAM Kullanımı:  
**$ram MB**

<:aoijs:842362096389062686> Yazılım: 
**Aoi.JS v4.0.0**

  \`Linkler\`
    <a:tik:841976447413649408> [Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=839052065476968458&permissions=8&scope=bot) | <:ytdc:842036382003757067> [Sahibimin Kanalı](https://www.youtube.com/channel/UCupiojq6ktkpL1zYuMz4mGQ)
]
  `
 }
 

