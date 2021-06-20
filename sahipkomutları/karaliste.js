module.exports = { 
name: "blacklist", 
aliases: ["karaliste"],
code: `$setGlobalUserVar[Blacklist;true;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] Sen Karalistede Bulunuyorusn!**
$onlyIf[$mentioned[1]!=;You must mention someone]
$onlyIf[$mentioned[1]!=$authorID;**⛔ Kendini kara listeye alamazsın Kyzer!**]
$onlyForIDs[537283706709344276;**⛔ Bu komut sahibime aittir!**]`
}