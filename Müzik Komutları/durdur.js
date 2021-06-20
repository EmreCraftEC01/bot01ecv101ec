module.exports = ({
    name: "stop",
    aliases: ['st','durdur'],
    description: "Stops the current playing song",
    usage: "",
    category: "music",
    code: `
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
    $color[RANDOM]
    $description[⏹ Şarkıyı Başarıyla Durdurdum!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Ses kanalına gir!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra Boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})