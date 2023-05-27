 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Lord Creative Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`Botumu eklemek için  **Acon** \`${prefix}davet\` yazabilirsiniz :) `)  
.addField(`__Genel Komutlar__`,`\`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`\`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`\`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`\`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`\`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`\`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | **ELCHAİRA** **ACON BOTUNU SUNCUYA EKLEMEK İÇİN**\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}