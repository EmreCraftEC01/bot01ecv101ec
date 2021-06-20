module.exports = {
  	
name: "paraprofil",
  aliases: ['profile'],
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Discord bots dont have profiles**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Ekonomi Profili]
$color[RANDOM]
$description[
**__Kullanıcı/ID__**:
<@$mentioned[1;yes]>
$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
(\`$mentioned[1;yes]\`)
 
**Sandıklar**:
**$getGlobalUserVar[günlüksandık;$mentioned[1;yes]]** | Günlük
**$getGlobalUserVar[şans;$mentioned[1;yes]]** | Şans
**$getGlobalUserVar[kindar;$mentioned[1;yes]]** | Kindar
 
**Para Akışları**:
\`💵\` **$numberSeparator[$getGlobalUserVar[cüzdan;$mentioned[1;yes]]]** Fcoin
\`🏦\` **$numberSeparator[$getGlobalUserVar[banka;$mentioned[1;yes]]]** Fcoin
\`📊\` **$numberSeparator[$sum[$getGlobalUserVar[cüzdan;$mentioned[1;yes]];$getGlobalUserVar[banka;$mentioned[1;yes]]]]** Fcoin
\`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]** xp
 
**Eşyalar**:
\`💼\` ($getGlobalUserVar[çanta;$mentioned[1;yes]]) Çantalar
\`📺\` ($getGlobalUserVar[tv;$mentioned[1;yes]]) Televizyonlar
\`📱\` ($getGlobalUserVar[telefon;$mentioned[1;yes]]) Telefonlar
\`💻\` ($getGlobalUserVar[laptop;$mentioned[1;yes]]) Laptoplar
\`🚗\` ($getGlobalUserVar[araba;$mentioned[1;yes]]) Arabalar
\`🚚\` ($getGlobalUserVar[kamyon;$mentioned[1;yes]]) Kamyonlar
\`🚁\` ($getGlobalUserVar[helikopter;$mentioned[1;yes]]) Helikopterler
\`🏫\` ($getGlobalUserVar[apartman;$mentioned[1;yes]]) Apartman
\`🏡\` ($getGlobalUserVar[ev;$mentioned[1;yes]]) Ev
\`🏰\` ($getGlobalUserVar[şato;$mentioned[1;yes]]) Şato
]`
}