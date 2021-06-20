module.exports = {
  name: "sw",
  code: `
  $title[$serverName[$guildID] | Sunucu Bilgi]
$addField[<a:kral:841976438139387904> Sunucu;$serverOwner]

$addField[:date: Oluşturulma Tarihi;$creationDate[$guildID]]

$addField[`
}