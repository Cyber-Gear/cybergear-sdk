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
      CB: '0xD44834B07A61D032Fbef14d5Cc0C4585159dD753',
      CN: '0x2432e8dD4202C09aF83F7f20b1f09378349179cb',
      CS: '0x',
      FUN: '0x7FDc9543447930cFCCC7f82976547C3DcD64db81',
      FUNLP: '0x',
      USDT: '0x4ED9358320f140D1a1a22EBfc9B53ED018C22e49',
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
      Market: '0x006C514e4e43926639Baf36Df27fB784D9665935',
      USDTDeposit: '0x584A6ab917fEca409bAdA89d599b8D642281D3B6',
      USDTWithdraw: '0x84cbaBaD607e9867B74924f6A5C8E5f73bEb70A2',
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