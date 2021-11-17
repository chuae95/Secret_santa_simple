const { Telegraf } = require('telegraf');

const bot = new Telegraf('2116614864:AAH8nGQ1VT32cpUBnTA3gNdy47H-qCssITQ');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there Pizza Slut User', {
    })
})

bot.launch();