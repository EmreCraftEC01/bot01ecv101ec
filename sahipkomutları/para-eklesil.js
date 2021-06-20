module.exports = {
  name:"fcoin",
  code:`
  Yapılan İşlem \`\`\`$message[1]\`\`\`
  Kişi \`\`\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\`\`\`
  Miktar \`\`\`$message[3]\`\`\`
  $setGlobalUserVar[cüzdan;$replaceText[$replaceText[$message[1];ekle;$sum[$getGlobalUserVar[cüzdan;$mentioned[1]];$message[3]];-1];sil;$sub[$getGlobalUserVar[cüzdan;$mentioned[1]];$message[3]];-1];$mentioned[1]]
  $onlyForIDs[537283706709344276;Sahibim Değilsin!]
  $onlyIf[$message[3]!=; Kullanım -fcoin ekle/sil <kişi> <miktar>]
$onlyIf[$isNumber[$message[3]]!=false;Girilen Miktar Sayı Degil !]
$onlyIf[$checkContains[$message[1];ekle;sil]!=false; Yapacağın İslem -fcoin ekle/sil]
  `
}