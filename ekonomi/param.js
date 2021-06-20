module.exports = {
  name: "param",
  aliases: ['bal'],
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'nin Parası]
$description[
$addField[🗡 Xp;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]] XP
]
$addField[💵 Cüzdan;
$numberSeparator[$getGlobalUserVar[cüzdan;$mentioned[1;yes]]] Fcoin
]
$addField[🏦 Banka;
$numberSeparator[$getGlobalUserVar[banka;$mentioned[1;yes]]] Fcoin
]
$addField[📊 Toplam Parası;
$numberSeparator[$sum[$getGlobalUserVar[cüzdan;$mentioned[1;yes]];$getGlobalUserVar[banka;$mentioned[1;yes]]]] Fcoin]]`
}