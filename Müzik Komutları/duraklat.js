module.exports = ({
    name: "pause",
    aliases: ['ps','duraklat'],
    description: "Çalmakta olan şarkıyı duraklatın",
    usage: "",
    category: "music",
    code: `
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
    $color[RANDOM]
    $description[⏸ Şarkıyı Duraklattım!]
    $pauseSong
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra Boş!}]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})