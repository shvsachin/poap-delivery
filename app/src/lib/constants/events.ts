// Types
import { AirdropEvent } from 'lib/types';

// Events addresses
import yamHeroes from 'lib/events/yam';
import medallaResuscitators from 'lib/events/resuscitators';
import medalla from 'lib/events/medalla';
import proofOfGucci from 'lib/events/proof-of-gucci';
import proofOfGucciDesign from 'lib/events/proof-of-gucci-design-competition';
import muirGlacier from 'lib/events/muir-glacier';
import halfRekt from 'lib/events/half-rekt';
import coinGecko from 'lib/events/coin-gecko-yield-farming';
import yfiOG from 'lib/events/yfi-og';
import yCover from 'lib/events/ycover';
import lumberjackers from 'lib/events/lumberjackers';
import keepStakers from 'lib/events/keep-stakers';
import eth2Genesis from 'lib/events/eth2-genesis';
import aaveV2Pioneers from 'lib/events/aave-v2-pioneers';

const events: AirdropEvent = {
  resuscitator: {
    key: 'resuscitator',
    image:
      'https://storage.googleapis.com/poapmedia/medalla-testnet-resuscitator-2020-logo-1598019050780.png',
    cardTitle: 'Medalla Resuscitators',
    cardText: `<p>An unexpected bug on the Medalla testnet kept the network at peril. Once again the community participation was required to sort this issue and finalize the network once again.</p><p>Anyone who attested from the 75,000th to the 115,000th block is qualified to claim this POAP.</p>`,
    pageTitle: '🚑️ Medalla Resuscitators',
    pageText: `<p>An unexpected bug on the Medalla testnet kept the network at peril. Once again the community participation was required to sort this issue and finalize the network once again.</p><p>Anyone who attested from the 75,000th to the 115,000th block is qualified to claim this POAP.</p>`,
    contractAddress: process.env.GATSBY_RESUSCITATOR_AIRDROP_CONTRACT || '',
    addresses: medallaResuscitators,
    eventIds: process.env.GATSBY_RESUSCITATOR_EVENT_IDS
      ? process.env.GATSBY_RESUSCITATOR_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink:
      'https://github.com/poap-xyz/poap-delivery/tree/development/events/medalla-resuscitators',
    active: true,
    link: '/medalla-resuscitator',
  },
  yam: {
    key: 'yam-heroes',
    image: 'https://storage.googleapis.com/poapmedia/yam-heros-2020-logo-1597862089982.png',
    cardTitle: 'Yam Heroes',
    cardText: `<p>YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm and lived thrilling first 24 hours</p><p>Crazy game theoretical dynamics created the cohort of $YAM Heroes, that are now awarded this rare POAP to hold with pride</p>`,
    pageTitle: '🍠 Yam Heroes',
    pageText: `<p><a target="_blank" rel="noopener noreferrer" href="https://yam.finance">YAM</a>, an experiment in fair farming, governance and elasticity, took Ethereum by storm and lived thrilling first 24 hours.</p><p>Crazy game theoretical dynamics created the cohort of $YAM Heroes, that are now awarded this rare POAP to hold with pride.</p>`,
    contractAddress: process.env.GATSBY_YAM_AIRDROP_CONTRACT || '',
    addresses: yamHeroes,
    eventIds: process.env.GATSBY_YAM_EVENT_IDS
      ? process.env.GATSBY_YAM_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/yam-heroes',
    active: true,
    link: '/yam',
  },
  muirGlacier: {
    key: 'muir-glacier',
    image:
      'https://storage.googleapis.com/poapmedia/muir-glacier-ethereum-mainnet-hard-fork-2020-logo-1589843256434.png',
    cardTitle: 'Muir Glacier',
    cardText: `<p>The Ethereum network went through a scheduled upgrade at block number 9,200,000, on Friday, January 3, 2020</p><p>A big thanks to the Ethereum community and to all Ethereum developers across all clients and platforms who came together to provide input, thoughts, and contribution.</p>`,
    pageTitle: '❄️ Muir Glacier',
    pageText: `<p>The Ethereum network went through a scheduled upgrade at block number 9,200,000, on Friday, January 3, 2020</p><p>A big thanks to the Ethereum community and to all Ethereum developers across all clients and platforms who came together to provide input, thoughts, and contribution.</p>`,
    contractAddress: process.env.GATSBY_MUIR_GLACIER_AIRDROP_CONTRACT || '',
    addresses: muirGlacier,
    eventIds: process.env.GATSBY_MUIR_GLACIER_EVENT_IDS
      ? process.env.GATSBY_MUIR_GLACIER_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/muir-glacier',
    active: true,
    link: '/muir-glacier',
  },
  gucci: {
    key: 'gucci',
    image: 'https://storage.googleapis.com/poapmedia/proof-of-gucci-2020-logo-1599058054046.png',
    cardTitle: 'YFI - Proof of Gucci',
    cardText: `<p>Andre Cronje’s feet deserve only the finest most luxurious handcrafted Italian fashion so the community came up with a great proposal. Everyone who participated in the voting are now owners of a POAP NFT representing their participation in this once in a lifetime event. Will these Guccis be worn at the YFI Tokyo party?</p>`,
    pageTitle: '✨ Proof of Gucci',
    pageText: `<p>Andre Cronje’s feet deserve only the finest most luxurious handcrafted Italian fashion so the community came up with a great proposal.</p><p>Everyone who participated in the voting are now owners of a POAP NFT representing their participation in this once in a lifetime event.</p><p> Will these Guccis be worn at the YFI Tokyo party?</p>`,
    contractAddress: process.env.GATSBY_PROOF_OF_GUCCI_AIRDROP_CONTRACT || '',
    addresses: proofOfGucci,
    eventIds: process.env.GATSBY_PROOF_OF_GUCCI_EVENT_IDS
      ? process.env.GATSBY_PROOF_OF_GUCCI_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/proof-of-gucci',
    active: true,
    link: '/proof-of-gucci',
  },
  gucciCompetition: {
    key: 'gucci-competition',
    image:
      'https://storage.googleapis.com/poapmedia/proof-of-gucci-design-competition-2020-logo-1599058118153.png',
    cardTitle: 'YFI - Proof of Gucci Design Competition',
    cardText: `<p>Right after the Proof of Gucci proposal had passed, a design competition was set up to come up with an exclusive POAP design to celebrate the positive outcome.</p><p>YFI token holders who voted for their favorite design are entitled to receive this POAP</p>`,
    pageTitle: '✨ Proof of Gucci - Design Competition',
    pageText: `<p>Right after the Proof of Gucci proposal had passed, a design competition was set up to come up with an exclusive POAP design to celebrate the positive outcome.</p><p>YFI token holders who voted for their favorite design are entitled to receive this POAP</p>`,
    contractAddress: process.env.GATSBY_PROOF_OF_GUCCI_COMPETITION_AIRDROP_CONTRACT || '',
    addresses: proofOfGucciDesign,
    eventIds: process.env.GATSBY_PROOF_OF_GUCCI_COMPETITION_EVENT_IDS
      ? process.env.GATSBY_PROOF_OF_GUCCI_COMPETITION_EVENT_IDS.split(',').map((i) =>
          parseInt(i, 10),
        )
      : [],
    githubLink:
      'https://github.com/poap-xyz/poap-delivery/tree/development/events/proof-of-gucci-design-competition',
    active: true,
    link: '/proof-of-gucci-design',
  },
  medalla: {
    key: 'medalla',
    image: 'https://storage.googleapis.com/poapmedia/medalla-validators.png',
    cardTitle: 'Medalla Validator',
    cardText: `<p>To celebrate the launch of the Eth2.0 multiclient testnet Medalla, and to encourage as much community engagement as possible, we have teamed up with our friends at <a target="_blank" rel="noopener noreferrer" href="https://beaconcha.in/">beaconcha.in</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/ethstaker/">r/ethstaker</a> to create and distribute badges for validators</p>`,
    pageTitle: '🎖 Medalla Validators',
    pageText: `<p>To celebrate the launch of the Eth2.0 multiclient testnet Medalla, and to encourage as much community engagement as possible, we have teamed up with our friends at <a target="_blank" rel="noopener noreferrer" href="https://beaconcha.in/">beaconcha.in</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/ethstaker/">r/ethstaker</a> to create and distribute badges for validators</p>`,
    contractAddress: process.env.GATSBY_MEDALLA_AIRDROP_CONTRACT || '',
    addresses: medalla,
    eventIds: process.env.GATSBY_MEDALLA_EVENT_IDS
      ? process.env.GATSBY_MEDALLA_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/medalla',
    active: true,
    link: '/medalla',
  },
  halfRekt: {
    key: 'half-rekt',
    image: 'https://storage.googleapis.com/poapmedia/halfrekt-2020-logo-1601513643094.png',
    cardTitle: 'Half Rekt',
    cardText: `<p>You yoloed hard and somehow you only got #HalfRekt. Get this POAP to have an eternal reminder that you only live once</p>`,
    pageTitle: 'Half Rekt',
    pageTitleImage: 'https://storage.googleapis.com/poapmedia/halfrekt.png',
    pageText: `<p>You yoloed hard and somehow you only got #HalfRekt. Get this POAP to have an eternal reminder that you only live once</p><p>Note: only accounts that got refunded DAI are eligible for this token</p>`,
    contractAddress: process.env.GATSBY_HALFREKT_AIRDROP_CONTRACT || '',
    addresses: halfRekt,
    eventIds: process.env.GATSBY_HALFREKT_EVENT_IDS
      ? process.env.GATSBY_HALFREKT_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/half-rekt',
    active: true,
    link: '/half-rekt',
  },
  coinGecko: {
    key: 'coin-gecko',
    image:
      'https://storage.googleapis.com/poapmedia/coingecko-yam-yield-farmer-2020-logo-1602423064868.png',
    cardTitle: 'Coin Gecko Yield Farming',
    cardText: `<p>You've worked hard to collect candies (and of course yields across the DeFi-fields!). Here's a limited edition NFT CoinGecko is releasing together with POAP to commemorate you and your involvement in many of the yield farming projects in the space!</p>`,
    pageTitle: '🚜 Coin Gecko Yield Farming',
    pageText: `<p>You've worked hard to collect candies (and of course yields across the DeFi-fields!). Here's a limited edition NFT CoinGecko is releasing together with POAP to commemorate you and your involvement in many of the yield farming projects in the space!</p>`,
    contractAddress: process.env.GATSBY_COIN_GECKO_AIRDROP_CONTRACT || '',
    addresses: coinGecko,
    eventIds: process.env.GATSBY_COIN_GECKO_EVENT_IDS
      ? process.env.GATSBY_COIN_GECKO_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink:
      'https://github.com/poap-xyz/poap-delivery/tree/development/events/coin-gecko-yield-farming',
    active: true,
    link: '/coin-gecko',
  },
  yfiOGs: {
    key: 'yfi-og',
    image: 'https://storage.googleapis.com/poapmedia/i-played-4-yfi-2020-logo-1604247754471.png',
    cardTitle: 'I Played 4 YFI',
    cardText: `<p>This badge certifies that you were among the original elite that helped launch the yearn.finance protocol</p><p>You played, not paid, for your share of the OG 30,000 YFI.</p>`,
    pageTitle: '🏓 I Played 4 YFI',
    pageText: `<p>This badge certifies that you were among the original elite that helped launch the yearn.finance protocol. You played, not paid, for your share of the OG 30,000 YFI.</p><p>Yearn Finance thanks you for your visionary support. Wear this badge with honor.</p>`,
    contractAddress: process.env.GATSBY_YFI_OG_AIRDROP_CONTRACT || '',
    addresses: yfiOG,
    eventIds: process.env.GATSBY_YFI_OG_EVENT_IDS
      ? process.env.GATSBY_YFI_OG_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/i-played-4-yfi',
    active: true,
    link: '/yfi-og',
  },
  yCover: {
    key: 'ycover',
    image:
      'https://storage.googleapis.com/poapmedia/a-new-face-for-ycover-2020-logo-1604601079479.png',
    cardTitle: 'A New Face For yCover',
    cardText: `<p>yCover NFT had no face. That's why we launched a contest to find the the best artpiece to be the face of the NFT.</p><p>What's better than holding a piece of art as insurance? 
</p>`,
    pageTitle: '🎨 A New Face For yCover',
    pageText: `<p>yCover NFT had no face. That's why we launched a contest to find the the best artpiece to be the face of the NFT. What's better than holding a piece of art as insurance? 
</p><p>To thank all voters, we will award them with this POAP created by Cryptouf.</p>`,
    contractAddress: process.env.GATSBY_YCOVER_AIRDROP_CONTRACT || '',
    addresses: yCover,
    eventIds: process.env.GATSBY_YCOVER_EVENT_IDS
      ? process.env.GATSBY_YCOVER_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/ycover',
    active: true,
    link: '/ycover',
  },
  lumberjackers: {
    key: 'lumberjackers',
    image:
      'https://storage.googleapis.com/poapmedia/false-start-lumberjackers-2020-logo-1606514369388.png',
    cardTitle: 'False Start Lumberjackers',
    cardText: `<p>This POAP is to commemorate the valiant lumberjacks who deposited assets into the contracts and harvested the first $TREE token.</p>`,
    pageTitle: '🌳 False Start Lumberjackers',
    pageText: `<p>WhalerDAO released tree.finance twice on Friday November 20, 2020.</p><p>This POAP is to commemorate the valiant lumberjacks who deposited assets into the contracts and harvested the first $TREE token. Their contribution will never be forgotten because this POAP lives on to remind us of their sacrifice. .</p>`,
    contractAddress: process.env.GATSBY_LUMBERJACKERS_AIRDROP_CONTRACT || '',
    addresses: lumberjackers,
    eventIds: process.env.GATSBY_LUMBERJACKERS_EVENT_IDS
      ? process.env.GATSBY_LUMBERJACKERS_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/lumberjackers',
    active: true,
    link: '/lumberjackers',
  },
  keepStakers: {
    key: 'keep-stakers',
    image:
      'https://storage.googleapis.com/poapmedia/keep-network-mainnet-stakers-2020-logo-1607295999088.png',
    cardTitle: 'KEEP Network Mainnet Stakers',
    cardText: `<p>This is a POAP created for the first 112 mainnet ECDSA node runners on the KEEP Network.</p>`,
    pageTitle: '🏰 KEEP Network Mainnet Stakers',
    pageText: `<p>This is a POAP created for the first 112 mainnet ECDSA node runners on the KEEP Network.</p><p>These initial 100 participants created a private, decentralized network where users could mint tBTC.</p>`,
    contractAddress: process.env.GATSBY_KEEP_NETWORK_MAINNET_STAKERS_AIRDROP_CONTRACT || '',
    addresses: keepStakers,
    eventIds: process.env.GATSBY_KEEP_NETWORK_MAINNET_STAKERS_EVENT_IDS
      ? process.env.GATSBY_KEEP_NETWORK_MAINNET_STAKERS_EVENT_IDS.split(',').map((i) =>
          parseInt(i, 10),
        )
      : [],
    githubLink:
      'https://github.com/poap-xyz/poap-delivery/tree/development/events/keep-network-mainnet-stakers',
    active: true,
    link: '/keep-stakers',
  },
  eth2Genesis: {
    key: 'eth2-genesis',
    image:
      'https://storage.googleapis.com/poapmedia/beacon-chain-genesis-depositor-2020-logo-1609033712464.png',
    cardTitle: 'Beacon Chain Genesis Depositor',
    cardText: `<p>The Beacon Chain Genesis Depositor POAP is awarded to each unique address that submitted a 32 Ether deposit in the beacon chain genesis contract before November 24, 2020.</p>`,
    pageTitle: '⧫ Beacon Chain Genesis Depositor',
    pageText: `<p>The Beacon Chain Genesis Depositor POAP is awarded to each unique address that submitted a 32 Ether deposit in the beacon chain genesis contract before November 24, 2020 to be included in the beacon chain genesis on December 1, 2020.</p>`,
    contractAddress: process.env.GATSBY_ETH2_GENESIS_AIRDROP_CONTRACT || '',
    addresses: eth2Genesis,
    eventIds: process.env.GATSBY_ETH2_GENESIS_EVENT_IDS
      ? process.env.GATSBY_ETH2_GENESIS_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/eth2-genesis',
    active: true,
    link: '/eth2-genesis',
  },
  aaveV2Pioneers: {
    key: 'aave-v2-pioneers',
    image:
        'https://storage.googleapis.com/poapmedia/aave-v2-pionners-nft-2020-logo-1606988227748.png',
    cardTitle: 'AAVE V2 Pioneers',
    cardText: `<p>This limited NFT rewards the 100 first pioneers of Aave V2 protocol.</p>`,
    pageTitle: '👻 AAVE V2 Pioneers',
    pageText: `<p>This limited NFT rewards the 100 first pioneers of Aave V2 protocol. You're the first users of the Seamless finance Era, we're proud to have y'all on our side.</p>`,
    contractAddress: process.env.GATSBY_AAVE_V2_PIONEERS_AIRDROP_CONTRACT || '',
    addresses: aaveV2Pioneers,
    eventIds: process.env.GATSBY_AAVE_V2_PIONEERS_EVENT_IDS
        ? process.env.GATSBY_AAVE_V2_PIONEERS_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
        : [],
    githubLink: 'https://github.com/poap-xyz/poap-delivery/tree/development/events/aave-v2-pioneers',
    active: true,
    link: '/aave-v2-pioneers',
},
};

export default events;
