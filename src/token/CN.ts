import { CN__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function cn() {
  return CN__factory.connect(token().CN, rpcProvider);
}