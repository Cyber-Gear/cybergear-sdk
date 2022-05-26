import { CS__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function cs() {
  return CS__factory.connect(token().CS, rpcProvider);
}