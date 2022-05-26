import { Market__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function market() {
    return Market__factory.connect(contract().Market, rpcProvider);
}