import { ERC20__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';

export function erc20(tokenAddr: string) {
  return ERC20__factory.connect(tokenAddr, rpcProvider);
}