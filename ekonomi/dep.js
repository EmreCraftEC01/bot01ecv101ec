module.exports = {
  	
name: "depozito", 
aliases: ['deposit', 'dep', 'payment', 'bankaya-aktar'],
code: `$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$setGlobalUserVar[cüzdan;$sub[$getGlobalUserVar[cüzdan;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, Bankanızda $numberSeparator[$message] Fcoin var!]
$footer[💵 $numberSeparator[$sub[$getGlobalUserVar[cüzdan;$authorID];$message]] Fcoin | 🏦 $numberSeparator[$sum[$getGlobalUserVar[banka;$authorID];$message]] | 📊 $numberSeparator[$sum[$getGlobalUserVar[cüzdan;$authorID];$getGlobalUserVar[banka;$authorID]]] Fcoin]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[cüzdan;$authorID];Cüzdanınızdakinden fazlasını yatıramazsınız!]
$argsCheck[>1;Bankaya Para Yatırmak Mı İstiyorsunuz? Şunu Kullanın! : \`$getServerVar[prefix]dep <miktar>\`]
$onlyIf[$getGlobalUserVar[cüzdan;$authorID]>0;yatırılacak hiçbir şey yok!]`
}