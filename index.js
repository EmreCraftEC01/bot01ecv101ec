const frost = require("aoi.js")
const bot = new frost.Bot({
token: process.env.token, //Tokeni .env kısmındaki token bölümüne yazın

prefix: "$getServerVar[prefix]" //ayarlanabilir prefixli bot bu nedenle böyle siz burayı şu şekildede yapabilirsiniz:
  //prefix: "botunuzun prefixi"
})
bot.onMessage() 
bot.loadCommands(`./komutlarım/`)


//komutları alta yazın

bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> Sunucuda Küfür Etmene İzin Veremem!
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];amk;oç;amcık;pezevenk;göt;gavat;salak;mal;ez;piç;slk;ezik;piç kurusu;g*t;şrfsz;p*ç;anan;anskm;anaskm;ananı sikiyim;ananı götten;gödden;tten;gvt;napim;31;<@537283706709344276>;@! На Луне | Kyzer]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfürengel]!=kapalı;]
  `
})


bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> Sunucuda Reklam Yapmana İzin Veremem!
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];.discord.gg;.gg;.com;.net;.cf;.ml;.tk;.org;.tr;.gq;.ga;.gov;.glitch.me]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[reklamengel]!=kapalı;]
  `
})

bot.joinCommand({
        channel: "$getServerVar[otorolkanal]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin! Seninle Birlikte $membersCount kişiyiz! Rolün Verildi!
        `
})

bot.joinCommand({
        channel: "$getServerVar[kayıtotorolsistem]", 
        code: `$giveRoles[$authorID;$getServerVar[kayıtsız]]
        <@$authorID> Sunucumuza Hoşgeldin! Seninle Birlikte **$membersCount** kişiyiz! Kayıtsız Rolün Verildi!
        `
})

// ・・・・・・・・・・・・・・・・・・・・・・Emoji Bilgi Başlayış・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・

bot.command({
    name:"emoji-bilgi",
  aliases: ['emojibilgi'],
    code:`
$if[$isNumber[$message[1]]==true]
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$message[1]]
$description[**Emoji İsmi:** \`$emoji[$message[1];name]\`
**Emoji ID:** \`$message[1]\`
**Emoji:** $replaceText[$replaceText[$emoji[$message[1];isanimated];true;<a:$emoji[$message[1];name]:$message[1]>;-1];false;<:$emoji[$message[1];name]:$message[1]>;-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$message[1];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$message[1]]==true;Lütfen geçerli bir emoji/ID/isim belirtin.]
$onlyIf[$emojiExists[$message[1]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$else
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$description[
**Emoji İsmi:** \`$emoji[$resolveEmojiID[$message[1]];name]\`
**Emoji ID:** \`$resolveEmojiID[$message[1]]\`
**Emoji:** $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$emoji[$resolveEmojiID[$message[1]];isanimated]==true]$checkContains[$message[1];<;>;:];truetrue;$message[1];-1];truefalse;<a:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsefalse;<:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsetrue;$message[1];-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$resolveEmojiID[$message[1]];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$resolveEmojiID[$message[1]]]!=;Belirttiğin emoji bulunamadı!]
$onlyIf[$emojiExists[$resolveEmojiID[$message[1]]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$endif
$onlyIf[$message[1]!=;Lütfen bir emoji belirtin.]
`
})
// ・・・・・・・・・・・・・・・・・・・・・・Emoji Bilgi Bitiş・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
//api deneme komutu
	
bot.command({
  name: "oylama",
  code: `$add`})

bot.variables ({
    prefix: "-",
  hata: "Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin! Hatanın Yanlış Olduğunu Düşünüyorsanız Geliştirici İle İletişime Geçiniz!",
  rch: "",
  rmsg: "Tebrikler {user.tag}🎉!, Yeni Seviyen {level}",
  lvl: "0",
  modlogs: "0",
  exp: "0",
   XP: "0",
    banka: "0",
    cüzdan: "0",
    psuffix: '0',
    tv: "0",
    yün: '0',
    çanta: "0",
    telefon: "0",
    laptop: "0",
    araba: "0",
    kamyon: "0",
    helikopter: "0",
    apartman: "0",
    ev: "0",
    şato: "0",
     erkekrol: "",
    kadınrol: "",
    kayıtsız: "",
    normalsistem: "kapalı",
    çiftkayıt: "kapalı",
    üyerol: "",
  katyetkili: "",
    kayıtlog: "",
    kayıtkanal: "",
    kayıtedilenkullanıcısayısı: "",
  kayıtotorolü: "",
  kayıtotorolkanal: "",
  modrol: "",
   otorol: "",
  otorolkanal: "",
  küfürengel: "kapalı",
  reklamengel: "kapalı",
  kayıtsız: "",
    günlüksandık: "0",
    şans: "0",
    kindar: "0",  
  onay: "",
  kayıtotorolsistem: "kapalı",
  red: "",
  Blacklist: "false",
  rexp: "40",
  rsystem: "0",
  aboneyetkili: "ayarlanmadı",
  abonerol: "ayarlanmadı",
}) 

bot.command({
    name:"sunucu-panel",
    code:`
$modifyChannelPerms[$getServerVar[toplamuye];-connect;$guildID]
$modifyChannelPerms[$getServerVar[botc];-connect;$guildID]
$modifyChannelPerms[$getServerVar[insanc];-connect;$guildID]
$modifyChannelPerms[$getServerVar[aktifuye];-connect;$guildID]
$setServerVar[insanc;$createChannel[İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];voice;yes;$getServerVar[kategori]]]
$setServerVar[botc;$createChannel[Bot Sayısı: $botCount;voice;yes;$getServerVar[kategori]]]
$setServerVar[toplamuye;$createChannel[Toplam Üye Sayısı: $membersCount[$guildID];voice;yes;$getServerVar[kategori]]]
$setServerVar[aktifuye;$createChannel[Aktif Üye: $membersCount[$guildID;online];voice;yes;$getServerVar[kategori]]]
$setServerVar[kategori;$createChannel[📊Sunucu İstatistikleri📊;category;yes]]
$setServerVar[sunucupanel;1]
$onlyIf[$getservervar[sunucupanel]!=1;❄1�7 Sunucu panel sistemi zaten ayarlanmış.Lütfen panel kanallarını sil ve tekrar dene.]
$onlyPerms[manageserver;❄1�7 Bu komudu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
$onlyBotPerms[manageserver;❄1�7 Bu komudu uygulayabilmek için **Sunucuyu Yönet** yetkisine sahip olmam gerek.Panel kuruldultan sonra yetkim alınırsa, sistem çalışmayacaktır!]
`
})


bot.joinCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insanc];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyIf[$getservervar[sunucupanel]==1;]`
})
bot.onJoined()
bot.leaveCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insanc];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyIf[$getservervar[sunucupanel]==1;]`
})
bot.onLeave()

bot.presenceUpdateCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insanc];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onPresenceUpdate()
bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[insanc];{execute:insanc}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onChannelDelete()


bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[aktifuye];{execute:aktifuye}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[botc];{execute:botc}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[toplamuye];{execute:toplamuye}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.awaitedCommand({
    name:"botc",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setServerVar[botc;]`
})

bot.awaitedCommand({
    name:"aktifuye",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setserverVar[aktifuye;]`
})

bot.awaitedCommand({
    name:"toplamuye",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setserverVar[toplamuye;]`
})

bot.awaitedCommand({
    name:"insanc",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$resetServerVar[insanc]`
})

bot.awaitedCommand({
    name:"sunucupanel",
    code:`
$resetServerVar[sunucupanel]
`
})



bot.command({
  name:"$alwaysExecute",
  aliases:['<@!$clientID>', '<@$clientID>'],
  code:`$deleteIn[8s]
$title[Sanırım Beni Etiketledin]
$description[
BENİ ETIKETLEME BELANI İKERİM
:lvl: [Botu Davet Et\\]($getBotInvite)]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$color[RANDOM]
$onlyIf[$checkContains[$toLowercase[$message;<@$clientID>;<@!$clientID>]]==true;]`,
  nonPrefixed: true
})



bot.musicStartCommand({

      channel: "$channelID",
      code: `$sendMessage[{description:▄1�7 Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

bot.command({
    name: 'kıs',
    code: `$editButton[🔇;kıs]`
});

bot.awaitedCommand({
    name: 'kıs',
    code: `$volume[0]
 :musical_note: Ses %0 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
    name: 'ses1',
    code: `$volume[10]
 :musical_note: Ses %10 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
    name: 'ses2',
    code: `$volume[50]
 :musical_note: Ses %50 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
    name: 'ses3',
    code: `$volume[100]
 :musical_note: Ses %100 olarak ayarlandı
 $suppressErrors[Müzik Çalmazken ses ayarlanamaz]`
});





bot.variables({
  name: ""
})

bot.command({
  name:"ip",
  code:`
$title[EMRECRAFT IP]
 $description[BAK KARDEŞİM BU İP ACIK DEİLSE **EmreReyiz** e yaz tmmmi 
bi arada bot sohbete gelde konusak
**free1.idley.gg:27072**
] $footer[İsteyen Kişi $username;$authorAvatar]
  `})
bot.command({
  name:"user",
  code:`
  


  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  
  `
})




bot.command({
  name:"gmatasoz",
  code:`
  $title[BİR BAY GM ATASOZU DERKI]
  $image[https://endibleg.sirv.com/20210402_112300.jpg?text.0.text=$message&text.0.opacity=80]

`
})





bot.command ({
  name: "gelengiden-aç",
  code: `
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $onlyIf[$message!=;Kullanım !gelengiden-aç #kanal]
  $setServerVar[gelengiden;$mentionedChannels[1]]
  $setServerVar[gg;açık]
  Gelen-Giden Güncellendi.Kanal <#$mentionedChannels[1]> Olarak Seçildi.
  Kapatmak İçin !gelengiden-kapat yazınız.
  `
})

bot.command({
  name: "gelengiden-kapat",
  code: `
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $resetServerVar[gelengiden]
  $resetServerVar[gg]
  Gelen-Giden Kapatıldı.Açmak İçin !gelengiden-aç #kanal yazınız.
  $onlyIf[$getServerVar[gg]!=kapalı;Bu Özellik Zaten Kapalı !]
  `
}) 








bot.joinCommand({
        channel: "$getServerVar[gelengiden]", 
        code: `
        $color[00ff44]
        $title[Sunucumuza Birisi Katıldı !]
       
 $image[https://endibleg.sirv.com/20210617_202702.png?text.0.text=$authorAvatar[;.webp;.png; ]&text.0.position.x=-35%25&text.0.position.y=-45%25&text.0.size=2&text.0.opacity=93&text.1.text=$username&text.1.position.x=-45%25&text.1.size=2]


        `
})
bot.onJoined()

bot.leaveCommand({
        channel: "$getServerVar[gelengiden]", 
        code: `
        $color[ff0101]
        $title[Sunucumuzdan Birisi Ayrıldı !]
         $image[https://endibleg.sirv.com/20210617_202702.png?text.0.text=$authorAvatar[;.webp;.png; ]&text.0.position.x=-35%25&text.0.position.y=-45%25&text.0.size=2&text.0.opacity=93&text.1.text=$username&text.1.position.x=-45%25&text.1.size=2]

        `
})
bot.onLeave() 








bot.command({
  name:"boks",
  code:`
  $color[GRAY]
  $title[Göster GÜCÜNÜ !]
  $image[https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif]
  $author[Boks Makinesine Vuruldu !;$authorAvatar]
$description[$thumbnail[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU]
$randomText[Sağ;Sol] Elini Yumruk Yapıp Güzelce Kasıldın.
Son hızla vurmaya çalıştın !]
$editIn[5s;{description: Sonuç !
 Vurdun 🤔}{color:$randomText[BLUE;RED]}
{thumbnail:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU}
{author:Bakalım:$authorAvatar}{title:İŞTE BU}{image:https://endibleg.sirv.com/20210523_174002.png?text.0.text=$random[10;100]VURDUN&text.0.position.x=-35%25&text.0.position.y=-70%25&text.0.size=20&text.0.color=ff0000&text.0.opacity=44&text.0.font.family=Passion%20One}]
$onlyIf[$message==;]`
})



bot.command({
  name:"npmkedi",
  code:`
 $title[NAPİM KEDİ SÖYLE SÖYLEDİ]
 
 
 
  $image[
  
https://endibleg.sirv.com/images__2_-removebg-preview.png?text.0.text=$message&text.0.position.y=-25%25&text.0.align=left&text.0.color=ff0000&text.0.opacity=84&text.0.font.family=Oswald&text.0.background.opacity=92&text.0.outline.blur=100



$argsCheck[>1;NAPİM KEDİ NE DİYECEK]
  ]
  
  
  `
  
  
  
  
  
  
  
  
})



bot.command({
  name:"korona",
  code:`
  $title[:flag_tr: Korona İstatistikleri :flag_tr:]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/782961156447797281/789631407449833512/indir__1_-removebg-preview.png]
  
  Vaka Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;cases;]
  Bugün ki Vaka = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayCases;]
  
Vefat Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;deaths;]
Bugün ki  Vefat = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayDeaths;]


  İyileşmiş = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;recovered;]
Bugün ki İyileşmiş = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayRecovered;]

Test Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;tests;]
  
  
  
  
  ]
  
  `
})















bot.command({
name:"mcyaz",
code:  `
  
  

$description[https://minecraftskinstealer.com/achievement/2/Basarim+Kazanildi/$message[1]+$message[2]+$message[3]]
$argsCheck[>1;Doğru Kullanım ec_mcyaz Yazı ]
$globalCooldown[3s;Komutu 3 Saniyede Bir Kullanabilirsin]`

})






bot.command({
  name:  "sil",
  code:  `
 $clear[$message[1]]
 $deletecommand
 $message[1] Kadar mesaj silindi!
 $onlyIf[$isNumber[$message[1]]==true;Lütfen geçerli bir sayı belirtin!]
  $onlyPerms[kick;**Bu komutu kullanmak için yeterli yetkiye sahip değilsin.**]`
  
  
  })






  
  
  
  


bot.command({
  name: "notimposter",
  code: `
  $title [NOT İMPOSTER]
$image[https://endibleg.sirv.com/images%20(1).jpeg?text.0.text=$message&text.0.position.x=-62%25&text.0.position.y=-33%25&text.0.size=14&text.0.font.family=Teko&text.0.background.opacity=79]

$argsCheck[>1;duzgun yaz]

`



   
})






bot.command({
  name: "imposter",
  code: `
$title[ımposter]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&imposter=true&crewmate=$randomText[red;blue;green;pink;purple;white;yellow]]
`



   
})


bot.command({
  name: "sw",
  code: `
$image[http://status.mclive.eu/emrecraft/$message/27072/banner.png]
$argsCheck[>1;duzgun yaz]

   `
})

bot.command({
  name:"ses",
  code:`
  $playSong[https://youtu.be/hRMWYhYvdc0]
  
  `
  
  
  
  
})


bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin ! Otorol Başarıyla Verildi.
        `
})
bot.onJoined()





bot.command({
  name:"çal",
  aliases:['play'],
 code:`$suppressErrors[Şarkı çalmazken kullanamazsın]
 $author[Müzik çalınmaya başlandı;$authorAvatar]
$description[Aranan kelime \`$message\`
Bulunan Şarkı : $get[şarkı]
Şarkı uzunluğu : $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]
Çalan kişi : $userTag[$authorID]]
$color[303136]
$setServerVar[şarkı;$authorID]
$let[şarkı;$playSong[$message;...;yes;yes;:x: \`$message\` adında bir müzik bulamadım.]]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$argsCheck[>1;Lütfen bir şarkı adı gir]`
}) 



bot.command({
  name:"sıralama",
  aliases:['queue'],
 code:`$author[Sıradaki Şarkılar]
 $description[
 $queue[1;10;{number} - {title}]]
 $color[303136]
 $onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
 $onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
 $onlyIf[$queue[1;10;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
 $suppressErrors[Şarkı çalmazken kullanamazsın]`
})


bot.command({
  name:"durdur",
  aliases:['stop','pause'],
 code:`
$addCmdReactions[⏸]
$pauseSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
})
bot.command({
  name:"tekrarla",
  aliases:['loop'],
 code:`
$addCmdReactions[🔁]
$let[geç;$skipSong]
$let[şarkı;$playSong[$songInfo[title];...;yes;yes;:x: \`$songInfo[title]\` adında bir müzik bulamadım.]]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
})
bot.command({
  name:"geç",
  aliases:['skip'],
 code:`
$addCmdReactions[⏯]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
})
bot.command({
  name:"çık",
  aliases:['leave'],
 code:`
$addCmdReactions[⏹]
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Ses kanalından çıkamadım]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
})


bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> BAN TİME
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];amk;oç;piç;sg;amq;orospu;orospucocugu;mal;aq;salak;gerizekali]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  

  `,
nonPrefixed: true
})

bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> BAN TİME
  $DM
  $onlyIf[$checkContains[$toLowercase[$message];amk;oç;piç;sg;amq;orospu;orospucocugu;mal;aq;salak;gerizekali]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  

  `,
nonPrefixed: true
})






bot.command ({
  name:"küfürengel-kapat",
  code:`
  Küfür Engel Sistemi Kapatılmıştır !
$setServerVar[küfür;kapalı]
$onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
`
}) 

bot.command({
  name:"küfürengel-aç",
  code:`
  Küfür Engel Sistemi Açılmıştır !
$setServerVar[küfür;açık]
$onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
`
})



bot.command({
  name:"sg",
  code:`
 <@$authorID> BAN YERSIN
 
 $deletecommand
  `,
nonPrefixed: true
})







bot.command({
 name:"tkm",
 code:`
$title[Taş Kağıt Makas]
$description[Sen **$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];taş;Taş;-1];kağıt; Kağıt;-1];makas;Makas;-1]** Seçtin, Bot İse **$randomText[Taş;Kağıt;Makas]** Seçti.
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]]-$randomText[Taş;Kağıt;Makas];taş-Makas;:tada: **Kazandın**
;-1];kağıt-Taş;:tada: **Kazandın**.;-1];makas-Kağıt;:tada: **Kazandın**.;-1];taş-Kağıt;:frowning: **Kaybettin**.;-1];kağıt-Makas;:frowning:**Kaybettin**.;-1];makas-Taş;:frowning: **Kaybettin**.;-1];taş-Taş;:smile: Sonuç **Berabere**!;-1];makas-Makas;:smile: Sonuç **Berabere**!;-1];kağıt-Kağıt;:smile: Sonuç **Berabere**!;-1]]
$footer[Kullanan $userTag[$authorID]]
$color[RANDOM]
$image[https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Oyuncaklar/Animasyonlar-Tas-Kag-T-Makas/Tas-Kag-T-Makas-87019.gif]
$thumbnail[$authorAvatar]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==taş]-$checkCondition[$toLowercase[$message[1]]==kağıt]-$checkCondition[$toLowercase[$message[1]]==makas]!=false-false-false;:x: Senin Taş veya Kağıt veya Makas seçmen gerek.]
$argsCheck[1;:x: Senin Taş veya Kağıt veya Makas seçmen gerek.]`

})





bot.command({
  name:"yt",
  code:`
$reply[$title[$messageID;tm/eval Hop Parayı Havaya Attın $randomText[YAZI;TURA;DİK siktir] geldi];(yes)]

  `

})


bot.command({
  name:"günaydın",
  code:`
günaydın <@$authorID> Hoşgeldin !
    $onlyIf[$getServerVar[saas]!=kapalı;]
  `,
nonPrefixed: true
})







bot.command({
  name:"sa",
  code:`
  Aleyküm Selam <@$authorID> Hoşgeldin !
    $onlyIf[$getServerVar[saas]!=kapalı;]
  `,
nonPrefixed: true
})

bot.command({
  name: "saas-aç",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vereceğim Yeees
  $resetServerVar[saas]
  $onlyPerms[admin;Yetkin Bulunmamaktadır]
  $onlyIf[$getServerVar[saas]!=açık;Bu Özellik Zaten Açıkmış]
  
  `
})

bot.command({
  name: "saas-kapat",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vermiyorum Artık.
  $setServerVar[saas;kapalı]
  $onlyPerms[admin;Yetkin Bulunmamaktadır]
  $onlyIf[$getServerVar[saas]!=kapalı;Bu Özellik Kapalı Zaten]
  
  `
})
  
  
  

bot.command({
  name:"$alwaysExecute",
  code:`
  $color[RANDOM]
  $description[$thumbnail[$authorAvatar]
  LAN KİM CHATA KATILDI CHAT ADAM GINI ADAM CHATA KATILDI HOŞGELDİNG SAHİP ADAMSIN]
  $cooldown[5m;]
  $onlyIf[$authorID==741211410817613925;]
  `
,
nonPrefixed: true
})
  
  
  
  
  
bot.command({
    name:"sunucukur",
    code:`
    $channelSendMessage[$channelID;Başarıyla Sunucu kurma tamamlandı]
$wait[1s]
$createRole[Üye;ffdb4d;no]
$createRole[Özel;e49a5e;no]
$createRole[Rehber;ca0032;no]
$createRole[Partner;ba5583;no]
$createRole[muted;ababab;no]
$createRole[Moderatör;00d6ff;no]
$createRole[Sunucu botları;ff5558;no]
$createRole[Yönetim;48ff00;no]
$createRole[Co-Owner;ff7fe2;no]
$createRole[Founder;00000;no]
$wait[1s]
$modifyChannelPerms[$get[yetk3];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk2];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk1];-viewchannel;$guildID]
$wait[1s]
$let[yetk3;$createChannel[・özel-oda;text;yes;$get[yetkili]]]
$let[yetk2;$createChannel[・yönetim;text;yes;$get[yetkili]]]
$let[yetk1;$createChannel[・yetkili;text;yes;$get[yetkili]]]
$wait[1s]
$let[yetkili;$createChannel[Yetkili;category;yes]]
$wait[1s]
$createChannel[・reklam-log;text;no;$get[loglar]]
$createChannel[・mesaj-log;text;no;$get[loglar]]
$createChannel[・modlog;text;no;$get[loglar]]
$wait[1s]
$let[loglar;$createChannel[Loglar;category;yes]]
$wait[1s]
$createChannel[・partner-şart;text;no;$get[partner]]
$createChannel[・partnerler;text;no;$get[partner]]
$createChannel[・partner-text;text;no;$get[partner]]
$wait[1s]
$let[partner;$createChannel[Partner;category;yes]]
$wait[1s]
$createChannel[・kelime-oyunu;text;no;$get[kategori2]]
$createChannel[・random-atma;text;no;$get[kategori2]]
$createChannel[・bot-ile-sohbet;text;no;$get[kategori2]]
$createChannel[・tuttu-tutmadı;text;no;$get[kategori2]]
$createChannel[・sayı-saymaca;text;no;$get[kategori2]]
$wait[1s]
$let[kategori2;$createChannel[Eğlence;category;yes]]
$wait[1s]
$createChannel[・Müzik 2;voice;no;$get[kategori]]
$createChannel[・Müzik 1;voice;no;$get[kategori]]
$createChannel[・müzik-odası;text;no;$get[kategori]]
$createChannel[・bot-komut;text;no;$get[kategori]]
$createChannel[・görsel-paylaşım;text;no;$get[kategori]]
$createChannel[・genel-sohbet;text;no;$get[kategori]]
$wait[1s]
$let[kategori;$createChannel[Main;category;yes]]
    $wait[1s]
    $createChannel[・boostlar;text;no;$joinSplitText[]] 
    $createChannel[・rol-al;text;no;$joinSplitText[]] 
    $createChannel[・davetler;text;no;$joinSplitText[]] 
    $createChannel[・sayaç;text;no;$joinSplitText[]] 
    $createChannel[・gelen-giden;text;no;$joinSplitText[]] 
    $let[kurallar;$createChannel[・kurallar;text;yes;$joinSplitText[]] 
    $wait[1s] 
    $textSplit[$createChannel[LOBI;category;yes];]`
})
  
  
  
  
  
  



bot.command({
  name:"durdur",
  aliases:['stop','pause'],
 code:`
$pauseSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$description[ <@$authorID> durdurdum]
$addCmdReactions[🔇]
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Ses kanalından çıkamadım]
`
})





bot.command({
  name:"intikam",
  code:`
$author[INTIKAM Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/787004564888879126/797630449068277811/indir-removebg-preview.png]
    $username#$discriminator Kişisi $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Kişisinden **INTIKAMINI** ALDI]
  $image[https://cdn.discordapp.com/attachments/840539630260060160/845288964721999893/s.gif]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
 $onlyIf[$mentioned[1]!=$authorID;Kendine O Kadar Hızlı Vurdun Ki.Allah Belanı Verdi]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
})
 





bot.command({
  name:"tokatla",
  code:`
  $author[OSMANLI TOKADI Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/787004564888879126/797630449068277811/indir-removebg-preview.png]
    $username#$discriminator Kişisi $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Kişisine **OSMANLI** tokadı attı]
  $image[https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/w680/kemal_sunal_sener_sen_tokat.gif]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
 $onlyIf[$mentioned[1]!=$authorID;Kendine O Kadar Hızlı Vurdun Ki.Allah Belanı Verdi]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
})
 

 
 
//status

bot.status({
  text: "EmreCraft",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "ec_yardım",
  type: "PLAYING",
  time: 12
})

//Read more information about status in docs:
//https://dbd.leref.ga/guide/bot-status

//variables


bot.variables({
    hgkanal: ""
  })

bot.variables({
    gelengiden: ""
  })





bot.variables({
    gg: "kapalı"
  })

  
bot.variables({
    chatt: ""

  })

bot.variables({
    insanc: ""

  })

bot.variables({
    kategori: ""

  })

bot.variables({
    otorollog: ""

  })


bot.variables({
    otorol: ""

  })



bot.variables({
    botc: ""

  })

bot.variables({
    aktifuye: ""

  })

bot.variables({
   toplamuye : ""

  })

bot.variables({
    sunucupanel: ""

  })

bot.variables({
  küfür: "kapalı"
})





bot.variables({
    saas: "Açık", 
    
  })
  
  
bot.variables({
    şarkı: "", 
    
  })
  

  
  









//komutları üste yazın
//durum
bot.variables({
    hgkanal: ""
  })

bot.variables({
    gelengiden: ""
  })





bot.variables({
    gg: "kapalı"
  })

  
bot.variables({
    chatt: ""
  })


bot.variables({
  küfür: "kapalı"
})





bot.variables({
    saas: "Açık", 
    
  })
  
  
bot.variables({
    şarkı: "", 
    
  })
  

  
  




