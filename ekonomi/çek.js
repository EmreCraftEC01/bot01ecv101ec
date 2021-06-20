module.exports = {
    name: 'paraçek',
  aliases: ['withdraw', 'with', 'para-çek', 'çek'],
  code: `$setGlobalUserVar[cüzdan;$sum[$getGlobalUserVar[cüzdan;$authorID];$message];$authorID]
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, Bankanızdan $numberSeparator[$message] Fcoin çektiniz!]
$footer[💵 $numberSeparator[$sum[$getGlobalUserVar[cüzdan;$authorID];$message]] Fcoin | 🏦 $numberSeparator[$sub[$getGlobalUserVar[banka;$authorID];$message]] Fcoin | 📊 $numberSeparator[$sum[$getGlobalUserVar[cüzdan;$authorID];$getGlobalUserVar[banka;$authorID]]] Fcoin]
$onlyIf[$isNumber[$message[1]]==true;Bir Sayı Giriniz!]
$onlyIf[$message<=$getGlobalUserVar[banka;$authorID];Bankanızdaki paradan fazla çekemezsiniz!!]
$argsCheck[>1;Ne kadar çekiyorsun?]
$onlyIf[$getGlobalUserVar[banka;$authorID]>0;Geri çekilecek hiçbir şey yok!]`
}
