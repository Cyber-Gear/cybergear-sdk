import { FUN__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function fun() {
  return FUN__factory.connect(token().FUN, rpcProvider);
}