import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import snapshot from '@snapshot-labs/snapshot.js';
import { getProvider } from './utils';
import { token } from './constant';

const client = new ApolloClient({
  uri: 'https://hub.snapshot.org/graphql',
  cache: new InMemoryCache(),
})

const hub = 'https://hub.snapshot.org';
const snapshotClient = new snapshot.Client712(hub);

const spaceName = 'fun-topia.eth';

export const vote = {
  getSpace: async () => {
    const spaceQuery = `
      query {
        space(id: "${spaceName}") {
          admins
          members
          strategies {
            name
            params
          }
          filters{
            minScore
          }
          validation{
            name
            params
          }
        }
      }
    `;

    return await client.query({
      query: gql(spaceQuery),
    });
  },

  getProposals: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    id?: string,
    state?: string,
    author?: string,
    author_not?: string,
  ) => {
    const proposalsQuery = `
      query {
        proposals(
          first: ${first}, skip: ${skip}, orderBy: "${orderBy}", orderDirection: ${orderDirection},
          where: {space_in: ["${spaceName}"], ${id ? `id: "${id}",` : ``} ${state ? `state: "${state}",` : ``} ${author ? `author: "${author}",` : ``} ${author_not ? `author_not: "${author_not}",` : ``}}
        ) {
          id
          ipfs
          title
          body
          choices
          discussion
          start
          end
          snapshot
          state
          author
          created
          plugins
          network
          type
          strategies {
            name
            params
          }
          space {
            id
            name
          }
          scores_state
          scores
          scores_by_strategy
          scores_total
          votes
        }
      }
    `;

    return await client.query({
      query: gql(proposalsQuery)
    });
  },

  getVotes: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    proposal?: string,
  ) => {
    const votesQuery = `
      query {
        votes(
          first: ${first}, skip: ${skip}, orderBy: "${orderBy}", orderDirection: ${orderDirection},
          where: {${proposal ? `proposal: "${proposal}",` : ``}}
        ) {
          id
          ipfs
          voter
          created
          choice
          vp
          vp_by_strategy
        }
      }
    `;

    return await client.query({
      query: gql(votesQuery)
    });
  },

  getScores: async (voters: string[], blockNumber: number) => {
    return await snapshot.utils.getScores(
      spaceName,
      [
        {
          name: 'erc20-balance-of',
          params: {
            address: token().FUN,
            symbol: 'FUN',
            decimals: 18
          }
        }
      ],
      '43114',
      voters,
      blockNumber,
    );
  },

  castVote: async (account: string, proposal: string, choice: number) => {
    return await snapshotClient.vote(getProvider(), account, {
      space: spaceName,
      proposal: proposal,
      type: 'single-choice',
      choice: choice,
      metadata: JSON.stringify({})
    });
  },

  createProposal: async (account: string, title: string, body: string, discussion: string, choices: string[], start: number, end: number) => {
    return await snapshotClient.proposal(getProvider(), account, {
      space: spaceName,
      type: 'single-choice',
      title: title,
      body: body,
      discussion: discussion,
      choices: choices,
      start: start,
      end: end,
      snapshot: await getProvider().getBlockNumber(),
      network: '43114',
      strategies: JSON.stringify([
        {
          name: 'erc20-balance-of',
          params: {
            address: token().FUN,
            symbol: 'FUN',
            decimals: 18
          }
        }
      ]),
      plugins: JSON.stringify({}),
      metadata: JSON.stringify({ app: 'snapshot.js' })
    });
  },
}