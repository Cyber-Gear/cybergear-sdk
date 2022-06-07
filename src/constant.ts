export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      CB: '0x',
      CN: '0x',
      CS: '0x',
      FUN: '0x3c1c0Bd9bFD90254916C4cb5e7221Ce907b4D4b1',
      FUNLP: '0x',
      USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      WAVAX: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    }
  } else {
    return {
      CB: '0x2EF20B723A777048F7F350a9B23DC861102de071',
      CN: '0x8FeB8ad9282b22fEE33F5da25f4aCAFe4BFAA925',
      CS: '0x7E47837BBCB61D9675C66e6e64c6b307E5687F3A',
      FUN: '0x18b2978D7E4EAc4A00c66Ab00d68bA7E77141A79',
      FUNLP: '0x',
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
      Market: '0xFfc78d708c478a75f1a0d0cd6889940eC141A51f',
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