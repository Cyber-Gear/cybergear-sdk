import { CB__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function cb() {
  return CB__factory.connect(token().CB, rpcProvider);
}