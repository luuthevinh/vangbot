const TeleBot = require('telebot');

const TELEGRAM_BOT_TOKEN = "1519565919:AAE_oE1OmI7yiQ6hwfGJEtTFhTKP_doGdtM";

const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

bot.on('text', (msg) => {
    msg.reply.text("lô cc!");
});

bot.on(/(show\s)?kitty*/, (msg) => {
    return msg.reply.photo('http://thecatapi.com/api/images/get');
});

bot.start();