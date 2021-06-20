module.exports({
  name: 'ping',
  code: `
  Pingim \`$botping\`
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]`
})