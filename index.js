const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = 'ВАШ_ТОКЕН_БОТА';
const WEBAPP_URL = process.env.WEBAPP_URL || 'https://your-url.glitch.me'; // для теста

const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));

// Пример кнопки Web App
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Открыть кейс', {
    reply_markup: {
      inline_keyboard: [[{
        text: "🎁 Открыть кейс",
        web_app: { url: WEBAPP_URL }
      }]]
    }
  });
});
