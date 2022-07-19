export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      CB: '0x',
      CN: '0x',
      CS: '0x',
      FUN: '0x',
      FUNLP: '0x',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    }
  } else {
    return {
      CB: '0x',
      CN: '0x',
      CS: '0x',
      FUN: '0x',
      FUNLP: '0x',
      USDT: '0x',
    };
  }
};

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      Market: '0x',
      USDTDeposit: '0x',
      USDTWithdraw: '0x',
    };
  } else {
    return {
      Market: '0x',
      USDTDeposit: '0x',
      USDTWithdraw: '0x',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x1',
      chainName: 'Ethereum-Mainnet',
      rpcUrls: ['https://mainnet.infura.io/v3/']
    };
  } else {
    return {
      chainId: '0x4',
      chainName: 'Rinkeby-Testnet',
      rpcUrls: ['https://rinkeby.infura.io/v3/']
    };
  }
};