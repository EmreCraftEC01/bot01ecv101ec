module.exports = ({
    name: "resume",
    aliases: ['rs', 'devam-ettir'],
    description: "Resume the current paused song",
    usage: "",
    category: "music",
    code: `
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
    $color[RANDOM]
    $description[▶ Şarkı Oynatılıyor!!]
    $resumeSong  
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalına Gir!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra Yok!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})