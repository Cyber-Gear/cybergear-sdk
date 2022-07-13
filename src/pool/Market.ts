import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Market__factory } from 'funtopia-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/fun-topia/market',
  cache: new InMemoryCache(),
})

export function market() {
  return Market__factory.connect(contract().Market, rpcProvider);
}

export const marketInfo = {
  getBuyInfos: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    buyer?: string,
    seller?: string,
    nft?: string,
    token?: string,
    price_gte?: string,
    price_lte?: string,
    hero?: number,
    rarity?: number,
    boxType?: number,
  ) => {
    const buyInfosQuery = `
        query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $buyer: String, $seller: String, $nft: String, $token: String, $price_gte: String, $price_lte: String, $hero: BigInt, $rarity: BigInt, $boxType: BigInt) {
          buyInfos(
            first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
            where: {${buyer ? `buyer: $buyer,` : ``} ${seller ? `seller: $seller,` : ``} ${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``} ${price_gte ? `price_gte: $price_gte,` : ``} ${price_lte ? `price_lte: $price_lte,` : ``} ${hero ? `hero: $hero,` : ``} ${rarity ? `rarity: $rarity,` : ``} ${boxType ? `boxType: $boxType,` : ``}}
          ) {
            buyer
            seller
            nft
            nftId
            token
            price
            fee
            feeAmount
            sellAmount
            buyTime
            hero
            rarity
            boxType
          }
        }
      `;

    return await client.query({
      query: gql(buyInfosQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        buyer: buyer,
        seller: seller,
        nft: nft,
        token: token,
        price_gte: price_gte,
        price_lte: price_lte,
        hero: hero,
        rarity: rarity,
        boxType: boxType,
      },
    });
  },

  getSellInfos: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    seller?: string,
    nft?: string,
    token?: string,
    price_gte?: string,
    price_lte?: string,
    hero?: number,
    rarity?: number,
    boxType?: number,
  ) => {
    const sellInfosQuery = `
        query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $seller: String, $nft: String, $token: String, $price_gte: String, $price_lte: String, $hero: BigInt, $rarity: BigInt, $boxType: BigInt) {
          sellInfos(
            first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
            where: {${seller ? `seller: $seller,` : ``} ${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``} ${price_gte ? `price_gte: $price_gte,` : ``} ${price_lte ? `price_lte: $price_lte,` : ``} ${hero ? `hero: $hero,` : ``} ${rarity ? `rarity: $rarity,` : ``} ${boxType ? `boxType: $boxType,` : ``}}
          ) {
            seller
            nft
            nftId
            token
            price
            sellTime
            hero
            rarity
            boxType
          }
        }
      `;

    return await client.query({
      query: gql(sellInfosQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        seller: seller,
        nft: nft,
        token: token,
        price_gte: price_gte,
        price_lte: price_lte,
        hero: hero,
        rarity: rarity,
        boxType: boxType,
      },
    });
  },

  getCounters: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    nft?: string,
    token?: string,
  ) => {
    const countersQuery = `
        query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $nft: String, $token: String) {
          counters(
            first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
            where: {${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``}}
          ) {
            nft
            token
            transactions
            volume
            items
          }
        }
      `;

    return await client.query({
      query: gql(countersQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        nft: nft,
        token: token,
      },
    });
  },
}