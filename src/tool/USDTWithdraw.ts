import { USDTWithdraw__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function usdtWithdraw() {
  return USDTWithdraw__factory.connect(contract().USDTWithdraw, rpcProvider);
}