module.exports = {    	
name: "heist",
code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$random[4800;7600]];$authorID]
$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$setGlobalUserVar[telefon;$sub[$getGlobalUserVar[telefon;$authorID];1];$authorID]
$setGlobalUserVar[yün;$sub[$getGlobalUserVar[yün;$authorID];1];$authorID]
$setGlobalUserVar[tv;$sub[$getGlobalUserVar[tv;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[20;42]];$authorID]
$color[00ff00]
$thumbnail[$userAvatar[$authorID]]
$title[Heist]
$description[$username, güvenlik sistemini kendi lehinize çevirmek için bir \`laptop\`, kameraları kapatmak için sistemli bir \`Akıllı Telefon\' kullandınız ve \`Çantanızı\' doldururken gözetimi izlemek için \`TV \' ekranını kullandınız bir sürü nakit ile ve sonra kaçak $randomText [bir göle !; bir köprünün üzerinden !; bir fırtına kanalından aşağı !; şehir etrafında ayrı çöp bidonlarında !; rastgele bir kamyonun yatağında !; bir çatıda!; bir çukurda!]
]
$footer[💵 + $numberSeparator[$random[4800;7600]] Fcoin | 🗡 +$random[20;42]] XP
$onlyIf[$getGlobalUserVar[laptop;$authorID]>=1;Laptopun Yok! Lütfen Birtane Satın Al.]
$onlyIf[$getGlobalUserVar[telefon;$authorID]>=1;Telefonun Yok! Lütfen Birtane Satın Al.]
$onlyIf[$getGlobalUserVar[yün;$authorID]>=1;Çantan Yok! Lütfen Birtane Satın Al.]
$onlyIf[$getGlobalUserVar[tv;$authorID]>=1;Televizyonun Yok! Lütfen Birtane Satın Al..]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=300;Soygunu Gerçekleştirmek İçin En Az 300 XPye ihtiyacın var!]
$globalCooldown[8h;Polisler Seni aramayı %time% sonra bırakırlar sakin ol ve diğer soygun için dinlen!!!]`
}