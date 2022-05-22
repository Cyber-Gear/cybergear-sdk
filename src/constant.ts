export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      CB: '0x',
      CN: '0x',
      CS: '0x',
      KAI: '0x',
      KAILP: '0x',
      USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      WAVAX: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    }
  } else {
    return {
      CB: '0x',
      CN: '0x',
      CS: '0x',
      KAI: '0x',
      KAILP: '0x',
      USDC: '0x',
      WAVAX: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    };
  }
};

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      Market: '0x',
      JoeRouter: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    };
  } else {
    return {
      Market: '0x',
      JoeRouter: '0x',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0xa86a',
      chainName: 'Avalanche-Mainnet',
      rpcUrls: ['https://api.avax.network/ext/bc/C/rpc']
    };
  } else {
    return {
      chainId: '0xa869',
      chainName: 'Avalanche-Testnet',
      rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc']
    };
  }
};