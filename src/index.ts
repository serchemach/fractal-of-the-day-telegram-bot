import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv' 
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('hipster', Telegraf.reply('λ'));
bot.command('start', (ctx) => {
    ctx.getChat().then((chat) => {
        const chatObjectString = JSON.stringify(chat);
        ctx.reply(chatObjectString);
        console.log(chatObjectString);
    })
})
bot.launch();

bot.telegram.sendMessage("11111", "HIIIIII!");

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
