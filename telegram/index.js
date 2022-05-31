const TelegramBot = require('node-telegram-bot-api')

const token = '5111060475:AAH-a3WWxaa-LkJpolGdhPUcYY2G3VHSkiM'

const bot = new TelegramBot(token, { polling: true })


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, msg.text);
});