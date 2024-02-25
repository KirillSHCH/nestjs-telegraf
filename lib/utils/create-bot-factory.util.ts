import { Telegraf } from 'telegraf';
import { TelegrafModuleOptions } from '../interfaces';

export async function createBotFactory(
  options: TelegrafModuleOptions,
): Promise<Telegraf<any>> {
  const bot = new Telegraf<any>(options.token, options.options);

  bot.use(...(options.middlewares ?? []));

  if (options.launchOptions !== false) {
    bot.launch(options.launchOptions).catch(() => {
      console.log('Ошибка при попытке запуска телеграм бота');
      return;
    });
  }

  return bot;
}
