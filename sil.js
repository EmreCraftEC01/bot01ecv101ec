module.exports = {
name: "sil",
code: `
$deleteIn[7s]
$wait[2s]

$sendMessage[
$splitText[1] Kadar Mesaj Uzaya Fırlatıldı! :rocket: :rocket: ;no]
$textSplit[$clear[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message];everyone;$channelID;yes]]
$deletecommand
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message]]==true;❌ Bir Rakam Gir! {delete:10s}]
$onlyPerms[managemessages;❌ Mesajları Yönet Yetkin Yok! {delete:10s}]
$onlyBotPerms[managemessages;❌ Mesajları Yönet Yetkim Yok! ]
$deleteIn[3s]
`
}