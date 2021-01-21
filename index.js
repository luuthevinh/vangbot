const TeleBot = require('telebot');
const https = require('https');
const express = require('express')
const app = express()

const TELEGRAM_BOT_TOKEN = "1519565919:AAE_oE1OmI7yiQ6hwfGJEtTFhTKP_doGdtM";

const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

bot.on('text', (msg) => {
    switch (msg.text) {
        case "lô":
            msg.reply.text("lô cc!");
            break;
        case "sủa":
        case "bark":
            msg.reply.text("gâu gâu!");
            break;
        default:
            break;
    }
});

function getImage(url, callback) {
    return https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let dataObj = JSON.parse(data);
            if (dataObj && callback) callback(dataObj.link);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

bot.on(/(kitty|cat|pussy)/, (msg) => {
    return getImage('https://some-random-api.ml/img/cat', (url) => {
        msg.reply.photo(url);
    });
});

bot.on(/(dog|vang|cho|meme)/, (msg) => {
    return getImage('https://some-random-api.ml/img/dog', (url) => {
        msg.reply.photo(url);
    });
});


bot.start();

app.get('/', function (req, res) {
    res.send('lô');
})

app.listen(6969);