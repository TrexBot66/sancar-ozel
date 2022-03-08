const Config = require('../../Conf/Config.json');
const Discord = require('discord.js')
const { mmb, staff } = require('../../Models')
const moment = require('moment')
moment.locale('tr')
module.exports = {
    name: 'türk',
    enable: true,
    guildOnly: true,
    aliases: ['türk', 't', 'tr'],
    cooldown: {
        enable: false,
        onGuild: false,
        timeOut: 5,
        msg: 'Bu komutu tekrar kullanabilmek için **{time}** saniye beklemelisin.'
    },
    /**
     * .k @üye isim yaş
     */
    run(message, args, client) {

        let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let serverid = client.guilds.cache.get(Config.Server);

        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(Config.Roles.RegOfficer)) return message.reply('Bu komutu kullanmak için yeterli yetkiye sahip değilsin!')
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('Lütfen üyeyi belirtiniz.')
        let isim = args[1];
        let yas = args[2];
        
        member.roles.add(Config.Roles.türk).catch(e => { });

        message.channel.send({ embeds: [new Discord.MessageEmbed().setFooter(message.guild.name).setDescription(`**Kullanıcıya başarılı bir şekilde <@&${Config.Roles.türk}> permi verildi.**`)] })
    }}