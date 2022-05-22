import { ethers, utils, constants, BigNumber } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { token, network } from './constant';

export const util = utils;
export const constant = constants;
export const bn = BigNumber;

export const rpcProvider = new ethers.providers.JsonRpcProvider(network().rpcUrls[0]);
let web3Provider = newWeb3Provider(localStorage.getItem('walletType'));

function newWeb3Provider(walletType: string | null) {
  let provider;

  if (walletType == 'walletconnect') {
    provider = new WalletConnectProvider({
      rpc: {
        [Number(network().chainId)]: network().rpcUrls[0],
      },
      chainId: Number(network().chainId)
    });
  } else {
    provider = (window as any).ethereum;
  }

  return provider;
}

export const wallet = {
  getCurrentAccount: async () => {
    return await web3Provider.request({ method: 'eth_accounts' });
  },

  getAccount: async (walletType: string | null) => {
    web3Provider = newWeb3Provider(walletType);
    localStorage.setItem('walletType', walletType ? walletType : 'metamask')
    return walletType == 'walletconnect' ? await web3Provider.enable() : await web3Provider.request({ method: 'eth_requestAccounts' });
  },

  getChainId: async () => {
    return await web3Provider.request({ method: 'eth_chainId' });
  },

  addChain: async () => {
    return await web3Provider.request({
      method: 'wallet_addEthereumChain',
      params: [network()]
    });
  },

  addKAI: async (img: string) => {
    return await web3Provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token().KAI,
          symbol: 'KAI',
          decimals: 18,
          image: img,
        },
      },
    });
  },

  disconnect: async () => {
    return await web3Provider.disconnect();
  },

  onAccountChanged: (handleAccountsChanged: any) => {
    web3Provider.on('accountsChanged', handleAccountsChanged);
  },

  onChainChanged: (handleChainChanged: any) => {
    web3Provider.on('chainChanged', handleChainChanged);
  },

  onDisconnect: (handleDisconnect: any) => {
    web3Provider.on('disconnect', handleDisconnect);
  },
}

export function getProvider() {
  return new ethers.providers.Web3Provider(web3Provider);
}

export function getSigner() {
  return new ethers.providers.Web3Provider(web3Provider).getSigner();
}

export function getRandomNumber(snId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [snId, slot])).mod(range).add(base).toNumber();
}
