import { USDTDeposit__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function usdtDeposit() {
  return USDTDeposit__factory.connect(contract().USDTDeposit, rpcProvider);
}