import { SetMetadata } from '@nestjs/common';
import { DECORATORS } from '../telegraf.constants';

export type TelegrafCashtagCashtag = string | string[];

export interface CashtagOptions {
  cashtag: TelegrafCashtagCashtag;
}

/**
 * Cashtag handling.
 *
 * @see https://telegraf.js.org/#/?id=cashtag
 */
export const Cashtag = (cashtag: TelegrafCashtagCashtag): MethodDecorator => {
  return SetMetadata(DECORATORS.CASHTAG, { cashtag });
};

/**
 * Cashtag handling.
 *
 * @see https://telegraf.js.org/#/?id=cashtag
 * @deprecated since v2, use Cashtag decorator instead.
 */
export const TelegrafCashtag = Cashtag;