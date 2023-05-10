import { TokenList } from "@uniswap/token-lists";

const tokenList: TokenList = {
  name: "Superfluid Token List",
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  timestamp: "2023-04-18T14:51:02.710Z",
  tokens: [
    {
      address: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
      name: "Super USD Coin",
      symbol: "USDCx",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x1ba8603da702602a8657980e825a6daa03dee93a",
          },
          "10": {
            tokenAddress: "0x8430f084b939208e2eded1584889c9a66b90562f",
          },
          "100": {
            tokenAddress: "0x1234756ccf0660e866305289267211823ae86eec",
          },
          "137": {
            tokenAddress: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
          },
          "42161": {
            tokenAddress: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
      name: "USD Coin",
      symbol: "USDC",
      decimals: 6,
      chainId: 43114,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x6af916e2001bc4935e6d2f256363ed54eb8e20e0",
      name: "Super EUROe Stablecoin",
      symbol: "EUROex",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x820802fa8a99901f52e39acd21177b0be6ee2974",
        },
        bridgeInfo: {
          "137": {
            tokenAddress: "0x5e31d5bdd6c87edff8659d9ead9ce0013fb47184",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/euroe/icon.svg",
    },
    {
      address: "0x820802fa8a99901f52e39acd21177b0be6ee2974",
      name: "EUROe Stablecoin",
      symbol: "EUROe",
      decimals: 6,
      chainId: 43114,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/euroe/icon.svg",
    },
    {
      address: "0x7cd00c2b9a78f270b897457ab070274e4a17de83",
      name: "Super Dai Stablecoin",
      symbol: "DAI.ex",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
      name: "Dai Stablecoin",
      symbol: "DAI.e",
      decimals: 18,
      chainId: 43114,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0xa60c5bebccdb9738f63891bbdd7fec3e762f9098",
      name: "Super JoeToken",
      symbol: "JOEx",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/joe/icon.png",
    },
    {
      address: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
      name: "JoeToken",
      symbol: "JOE",
      decimals: 18,
      chainId: 43114,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/joe/icon.png",
    },
    {
      address: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "56": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "100": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "137": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "42161": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0xbe916845d8678b5d2f7ad79525a62d7c08abba7e",
      name: "Super AVAX",
      symbol: "AVAXx",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/avax/icon.svg",
    },
    {
      address: "0xdf37ee57b2efd215a6a8329d6b8b72064f09bbd0",
      name: "Super TetherToken",
      symbol: "USDtx",
      decimals: 18,
      chainId: 43114,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdt/icon.png",
    },
    {
      address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      name: "TetherToken",
      symbol: "USDt",
      decimals: 6,
      chainId: 43114,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdt/icon.png",
    },
    {
      address: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
      name: "Super USD Coin (Arb1)",
      symbol: "USDCx",
      decimals: 18,
      chainId: 42161,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x1ba8603da702602a8657980e825a6daa03dee93a",
          },
          "10": {
            tokenAddress: "0x8430f084b939208e2eded1584889c9a66b90562f",
          },
          "100": {
            tokenAddress: "0x1234756ccf0660e866305289267211823ae86eec",
          },
          "137": {
            tokenAddress: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
          },
          "43114": {
            tokenAddress: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
      name: "USD Coin (Arb1)",
      symbol: "USDC",
      decimals: 6,
      chainId: 42161,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 42161,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "56": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "100": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "137": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "43114": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0x521677a61d101a80ce0fb903b13cb485232774ee",
      name: "Super Dai Stablecoin",
      symbol: "DAIx",
      decimals: 18,
      chainId: 42161,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x4f228bf911ed67730e4b51b1f82ac291b49053ee",
          },
          "10": {
            tokenAddress: "0x7d342726b69c28d942ad8bfe6ac81b972349d524",
          },
          "137": {
            tokenAddress: "0x1305f6b6df9dc47159d12eb7ac2804d4a33173c2",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
      name: "Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
      chainId: 42161,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
      name: "Super ETH",
      symbol: "ETHx",
      decimals: 18,
      chainId: 42161,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
          },
          "5": {
            tokenAddress: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
          },
          "10": {
            tokenAddress: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
          },
          "100": {
            tokenAddress: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
          },
          "137": {
            tokenAddress: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0xefa54be8d63fd0d95edd7965d0bd7477c33995a8",
      name: "Super Rocket Pool Protocol",
      symbol: "RPLx",
      decimals: 18,
      chainId: 42161,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xb766039cc6db368759c1e56b79affe831d0cc507",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rpl/icon.png",
    },
    {
      address: "0xb766039cc6db368759c1e56b79affe831d0cc507",
      name: "Rocket Pool Protocol",
      symbol: "RPL",
      decimals: 18,
      chainId: 42161,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rpl/icon.png",
    },
    {
      address: "0x529a4116f160c833c61311569d6b33dff41fd657",
      name: "Super BNB",
      symbol: "BNBx",
      decimals: 18,
      chainId: 56,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bnb/icon.svg",
    },
    {
      address: "0x744786ab00ed5a0b77ca754eb6f3ec0607c7fa79",
      name: "Super Hey Reborn",
      symbol: "RBx",
      decimals: 18,
      chainId: 56,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x441bb79f2da0daf457bad3d401edb68535fb3faa",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rb/icon.png",
    },
    {
      address: "0x441bb79f2da0daf457bad3d401edb68535fb3faa",
      name: "Hey Reborn",
      symbol: "RB",
      decimals: 18,
      chainId: 56,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rb/icon.png",
    },
    {
      address: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 56,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "100": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "137": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "42161": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "43114": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0x62b8b11039fcfe5ab0c56e502b1c372a3d2a9c7a",
      name: "GoodDollar",
      symbol: "G$",
      decimals: 18,
      chainId: 42220,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/g$/icon.png",
    },
    {
      address: "0x671425ae1f272bc6f79bec3ed5c4b00e9c628240",
      name: "Super CELO",
      symbol: "CELOx",
      decimals: 18,
      chainId: 42220,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/celo/icon.svg",
    },
    {
      address: "0x0be89e17787c0ae021b5e4f84ae8444f900dd92c",
      name: "Super TDL Fake Token",
      symbol: "TDLx",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xea613e86842a6bbe2a7de22e1601af550bf3c372",
        },
        bridgeInfo: {
          "100": {
            tokenAddress: "0x66e454105ae553cfa87ad4dc4cdf128c841fcd73",
          },
          "137": {
            tokenAddress: "0xa794221d92d77490ff319e95da1461bdf2bd3953",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0xea613e86842a6bbe2a7de22e1601af550bf3c372",
      name: "TDL Fake Token",
      symbol: "TDL",
      decimals: 18,
      chainId: 5,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
      name: "Super ETH",
      symbol: "ETHx",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
          },
          "10": {
            tokenAddress: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
          },
          "100": {
            tokenAddress: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
          },
          "137": {
            tokenAddress: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
          },
          "42161": {
            tokenAddress: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0x7d3e32ae08f50387a83cf222e08d8ec26317d7aa",
      name: "Zaya Token",
      symbol: "ZYA",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/zaya/icon.svg",
    },
    {
      address: "0x8ae68021f6170e5a766be613cea0d75236ecca9a",
      name: "Super fUSDC Fake Token",
      symbol: "fUSDCx",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc94dd466416a7dfe166ab2cf916d3875c049ebb7",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xc94dd466416a7dfe166ab2cf916d3875c049ebb7",
      name: "fUSDC Fake Token",
      symbol: "fUSDC",
      decimals: 18,
      chainId: 5,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x95697ec24439e3eb7ba588c7b279b9b369236941",
      name: "Super fTUSD Fake Token",
      symbol: "fTUSDx",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x53d00397f03147a9bd9c40443a105a82780deaf1",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tusd/icon.svg",
    },
    {
      address: "0x53d00397f03147a9bd9c40443a105a82780deaf1",
      name: "fTUSD Fake Token",
      symbol: "fTUSD",
      decimals: 18,
      chainId: 5,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tusd/icon.svg",
    },
    {
      address: "0xcc48a0349077b91ab540d2e46addffb4a4a26251",
      name: "NTDL",
      symbol: "NTDL",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "100": {
            tokenAddress: "0x60fdb4d22e793353d98324d824034d66827f602e",
          },
          "137": {
            tokenAddress: "0xd735b487b9018eeada2cc0464db02aa4b90ca711",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ntdl/icon.svg",
    },
    {
      address: "0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00",
      name: "Super fDAI Fake Token",
      symbol: "fDAIx",
      decimals: 18,
      chainId: 5,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x88271d333c72e51516b67f5567c728e702b3eee8",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x88271d333c72e51516b67f5567c728e702b3eee8",
      name: "fDAI Fake Token",
      symbol: "fDAI",
      decimals: 18,
      chainId: 5,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x1234756ccf0660e866305289267211823ae86eec",
      name: "Super USD//C on xDai",
      symbol: "USDCx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x1ba8603da702602a8657980e825a6daa03dee93a",
          },
          "10": {
            tokenAddress: "0x8430f084b939208e2eded1584889c9a66b90562f",
          },
          "137": {
            tokenAddress: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
          },
          "42161": {
            tokenAddress: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
          },
          "43114": {
            tokenAddress: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
      name: "USD//C on xDai",
      symbol: "USDC",
      decimals: 6,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x263647097a185ee0a9ded3e3e46d7eb931c23dda",
      name: "Super Peerion",
      symbol: "IONx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xfa9454bbba1ddf83747bdc42bea8641475753c42",
        },
      },
    },
    {
      address: "0xfa9454bbba1ddf83747bdc42bea8641475753c42",
      name: "Peerion",
      symbol: "ION",
      decimals: 18,
      chainId: 100,
    },
    {
      address: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "56": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "137": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "42161": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "43114": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0x59988e47a3503aafaa0368b9def095c818fdca01",
      name: "Super xDAI",
      symbol: "xDAIx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
          underlyingTokenAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/xdai/icon.svg",
    },
    {
      address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
      name: "Wrapped XDAI",
      symbol: "WXDAI",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/xdai/icon.svg",
    },
    {
      address: "0x60fdb4d22e793353d98324d824034d66827f602e",
      name: "NTDL",
      symbol: "NTDL",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "5": {
            tokenAddress: "0xcc48a0349077b91ab540d2e46addffb4a4a26251",
          },
          "137": {
            tokenAddress: "0xd735b487b9018eeada2cc0464db02aa4b90ca711",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ntdl/icon.svg",
    },
    {
      address: "0x63e62989d9eb2d37dfdb1f93a22f063635b07d51",
      name: "Minerva Wallet SuperToken",
      symbol: "MIVA",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "137": {
            tokenAddress: "0xc0b2983a17573660053beeed6fdb1053107cf387",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/miva/icon.svg",
    },
    {
      address: "0x6689a8f4fdad6712888682c9ce81b26762389f40",
      name: "Commons WORK",
      symbol: "WORK",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x9c940356f5846eceff282d3ee8b33015d93502a9",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/work/icon.png",
    },
    {
      address: "0x9c940356f5846eceff282d3ee8b33015d93502a9",
      name: "Commons protoWORK on xDai",
      symbol: "protoWORK",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/work/icon.png",
    },
    {
      address: "0x66e454105ae553cfa87ad4dc4cdf128c841fcd73",
      name: "TDLx",
      symbol: "TDLx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xcd1f2f1a1d1ba631a06b957db77bb9d7b13bf861",
        },
        bridgeInfo: {
          "5": {
            tokenAddress: "0x0be89e17787c0ae021b5e4f84ae8444f900dd92c",
          },
          "137": {
            tokenAddress: "0xa794221d92d77490ff319e95da1461bdf2bd3953",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0xcd1f2f1a1d1ba631a06b957db77bb9d7b13bf861",
      name: "TDL Fake Token",
      symbol: "TDL",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0x7aeca73f38f8f33ab7ff067fed1268384d12324d",
      name: "Super Bright",
      symbol: "Brightx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x83ff60e2f93f8edd0637ef669c69d5fb4f64ca8e",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bright/icon.svg",
    },
    {
      address: "0x83ff60e2f93f8edd0637ef669c69d5fb4f64ca8e",
      name: "Bright on xDai",
      symbol: "BRIGHT",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bright/icon.svg",
    },
    {
      address: "0x7c78aa599bbaea6e8784880173eb74b2f9c46025",
      name: "Super STREETBASED Community Token",
      symbol: "SBCx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x3b6a1b76d772a771bf3fce802bead6ff196b84d5",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sbc/icon.png",
    },
    {
      address: "0x3b6a1b76d772a771bf3fce802bead6ff196b84d5",
      name: "STREETBASED Community Token",
      symbol: "SBC",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sbc/icon.png",
    },
    {
      address: "0x83ccc929c1131d2d18b001c05cfeed9f3364a506",
      name: "SuperSAVE",
      symbol: "SAVEx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x338d4527c9e7f7316c43581684bc510b851f832a",
        },
      },
    },
    {
      address: "0x338d4527c9e7f7316c43581684bc510b851f832a",
      name: "Save Coin from Mainnet",
      symbol: "SAVE",
      decimals: 18,
      chainId: 100,
    },
    {
      address: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
      name: "Super ETH",
      symbol: "ETHx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
          },
          "5": {
            tokenAddress: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
          },
          "10": {
            tokenAddress: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
          },
          "137": {
            tokenAddress: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
          },
          "42161": {
            tokenAddress: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
      name: "Wrapped Ether on xDai",
      symbol: "WETH",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0xa025df2bf4ff47ec458ab41e89d3a9538a768ea9",
      name: "Super WORKtest",
      symbol: "WORKtx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc8992645d060703fb1582c422c96e16941c7eb14",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/workt/icon.svg",
    },
    {
      address: "0xc8992645d060703fb1582c422c96e16941c7eb14",
      name: "Commons Work Test",
      symbol: "WORKt",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/workt/icon.svg",
    },
    {
      address: "0xa94c0e84b8f27deb34f50001d47d870b67e47466",
      name: "superAC",
      symbol: "ACx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x5f1f81de1d21b97a5d0d5d62d89bde9ddec27325",
        },
      },
    },
    {
      address: "0x5f1f81de1d21b97a5d0d5d62d89bde9ddec27325",
      name: "Adept Coin Governance on xDai",
      symbol: "AC",
      decimals: 18,
      chainId: 100,
    },
    {
      address: "0xac945dc430cef2bb8fb78b3cb5fbc936dd2c8ab6",
      name: "Super CoW Protocol Token from Mainnet",
      symbol: "COWx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x177127622c4a00f3d409b75571e12cb3c8973d3c",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/cow/icon.svg",
    },
    {
      address: "0x177127622c4a00f3d409b75571e12cb3c8973d3c",
      name: "CoW Protocol Token from Mainnet",
      symbol: "COW",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/cow/icon.svg",
    },
    {
      address: "0xc0712524b39323eb2437e69226b261d928629dc8",
      name: "Super Honey",
      symbol: "HNYx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x71850b7e9ee3f13ab46d67167341e4bdc905eef9",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/hny/icon.png",
    },
    {
      address: "0x71850b7e9ee3f13ab46d67167341e4bdc905eef9",
      name: "Honey",
      symbol: "HNY",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/hny/icon.png",
    },
    {
      address: "0xe83fd17028c2dd3ca4a9b75f2836d4558fe00686",
      name: "HAUSx",
      symbol: "HAUSx",
      decimals: 18,
      chainId: 100,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/haus/icon.svg",
    },
    {
      address: "0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb",
      name: "DAOhaus Token on xDai",
      symbol: "HAUS",
      decimals: 18,
      chainId: 100,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/haus/icon.svg",
    },
    {
      address: "0x1ba8603da702602a8657980e825a6daa03dee93a",
      name: "Super USD Coin",
      symbol: "USDCx",
      decimals: 18,
      chainId: 1,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0x8430f084b939208e2eded1584889c9a66b90562f",
          },
          "100": {
            tokenAddress: "0x1234756ccf0660e866305289267211823ae86eec",
          },
          "137": {
            tokenAddress: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
          },
          "42161": {
            tokenAddress: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
          },
          "43114": {
            tokenAddress: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      name: "USD Coin",
      symbol: "USDC",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x4f228bf911ed67730e4b51b1f82ac291b49053ee",
      name: "Super Dai Stablecoin",
      symbol: "DAIx",
      decimals: 18,
      chainId: 1,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0x7d342726b69c28d942ad8bfe6ac81b972349d524",
          },
          "137": {
            tokenAddress: "0x1305f6b6df9dc47159d12eb7ac2804d4a33173c2",
          },
          "42161": {
            tokenAddress: "0x521677a61d101a80ce0fb903b13cb485232774ee",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      name: "Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x8f6f22a962899ade3c46627df45d4a05622cebf2",
      name: "Super Swivel Governance Token",
      symbol: "SWIVx",
      decimals: 18,
      chainId: 1,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xbf30461210b37012783957d90dc26b95ce3b6f2d",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/swiv/icon.svg",
    },
    {
      address: "0xbf30461210b37012783957d90dc26b95ce3b6f2d",
      name: "Swivel Governance Token",
      symbol: "SWIV",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/swiv/icon.svg",
    },
    {
      address: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
      name: "Super ETH",
      symbol: "ETHx",
      decimals: 18,
      chainId: 1,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
        bridgeInfo: {
          "5": {
            tokenAddress: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
          },
          "10": {
            tokenAddress: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
          },
          "100": {
            tokenAddress: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
          },
          "137": {
            tokenAddress: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
          },
          "42161": {
            tokenAddress: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0xd70408b34ed121722631d647d37c4e6641ec363d",
      name: "Super Aragon Network Token",
      symbol: "ANTx",
      decimals: 18,
      chainId: 1,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ant/icon.svg",
    },
    {
      address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
      name: "Aragon Network Token",
      symbol: "ANT",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ant/icon.svg",
    },
    {
      address: "0x167832baf36d1ac0af9e8d8ad329fa418bed5cd9",
      name: "ABToken",
      symbol: "ABT",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/abt/icon.svg",
    },
    {
      address: "0x1828bff08bd244f7990eddcd9b19cc654b33cdb4",
      name: "Super Optimism",
      symbol: "OPx",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x4200000000000000000000000000000000000042",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/op/icon.svg",
    },
    {
      address: "0x4200000000000000000000000000000000000042",
      name: "Optimism",
      symbol: "OP",
      decimals: 18,
      chainId: 10,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/op/icon.svg",
    },
    {
      address: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
      name: "Super ETH",
      symbol: "ETHx",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
          },
          "5": {
            tokenAddress: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
          },
          "100": {
            tokenAddress: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
          },
          "137": {
            tokenAddress: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
          },
          "42161": {
            tokenAddress: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0x7d342726b69c28d942ad8bfe6ac81b972349d524",
      name: "Super Dai Stablecoin",
      symbol: "DAIx",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x4f228bf911ed67730e4b51b1f82ac291b49053ee",
          },
          "137": {
            tokenAddress: "0x1305f6b6df9dc47159d12eb7ac2804d4a33173c2",
          },
          "42161": {
            tokenAddress: "0x521677a61d101a80ce0fb903b13cb485232774ee",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
      name: "Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
      chainId: 10,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x8430f084b939208e2eded1584889c9a66b90562f",
      name: "Super USD Coin",
      symbol: "USDCx",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x1ba8603da702602a8657980e825a6daa03dee93a",
          },
          "100": {
            tokenAddress: "0x1234756ccf0660e866305289267211823ae86eec",
          },
          "137": {
            tokenAddress: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
          },
          "42161": {
            tokenAddress: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
          },
          "43114": {
            tokenAddress: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      name: "USD Coin",
      symbol: "USDC",
      decimals: 6,
      chainId: 10,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "56": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "100": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "137": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "42161": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "43114": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0xd782ac4ee247e0986522ca05c08cda330dfc14c4",
      name: "Bogotix",
      symbol: "BGX",
      decimals: 18,
      chainId: 10,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
    },
    {
      address: "0x00f22a2b5c40ce03fa4c96ba97605e5a40cc97d4",
      name: "CRE8R DAO",
      symbol: "xCRE8R",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x079202ad852ccc46d8e73815f10ff055049d3916",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/xcre8r/icon.svg",
    },
    {
      address: "0x079202ad852ccc46d8e73815f10ff055049d3916",
      name: "CRE8R DAO (PoS)",
      symbol: "CRE8R",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/xcre8r/icon.svg",
    },
    {
      address: "0x02ef6868d69707b6093a2962bb5fe5661fcc0deb",
      name: "Super STASIS EURS",
      symbol: "EURSx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xe111178a87a3bff0c8d18decba5798827539ae99",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eurs/icon.png",
    },
    {
      address: "0xe111178a87a3bff0c8d18decba5798827539ae99",
      name: "STASIS EURS Token (PoS)",
      symbol: "EURS",
      decimals: 2,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eurs/icon.png",
    },
    {
      address: "0x094ed09f072596c34c5c0b197dceb0da6b04c580",
      name: "Super NEAR",
      symbol: "NEARx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x72bd80445b0db58ebe3e8db056529d4c5faf6f2f",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/near/icon.png",
    },
    {
      address: "0x72bd80445b0db58ebe3e8db056529d4c5faf6f2f",
      name: "NEAR",
      symbol: "NEAR",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/near/icon.png",
    },
    {
      address: "0x12c294107772b10815307c05989dabd71c21670e",
      name: "Stake DAO Token (PoS)",
      symbol: "SDTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sdt/icon.jpg",
    },
    {
      address: "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
      name: "Stake DAO Token (PoS)",
      symbol: "SDT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sdt/icon.jpg",
    },
    {
      address: "0x1305f6b6df9dc47159d12eb7ac2804d4a33173c2",
      name: "Super DAI (PoS)",
      symbol: "DAIx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x4f228bf911ed67730e4b51b1f82ac291b49053ee",
          },
          "10": {
            tokenAddress: "0x7d342726b69c28d942ad8bfe6ac81b972349d524",
          },
          "42161": {
            tokenAddress: "0x521677a61d101a80ce0fb903b13cb485232774ee",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      name: "(PoS) Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dai/icon.svg",
    },
    {
      address: "0x1963e341ff5a75c41ca5ac400c828e636b70546e",
      name: "DallorX",
      symbol: "DUSx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x867d46fd484358a6f25655a705aa6ad804e6c6eb",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dus/icon.svg",
    },
    {
      address: "0x867d46fd484358a6f25655a705aa6ad804e6c6eb",
      name: "Dallor",
      symbol: "DUS",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dus/icon.svg",
    },
    {
      address: "0x19ca69c66768b487d28226c0a60ab2b2aa8e5c5c",
      name: "REX Shirt 2023",
      symbol: "rexSHIRT",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rexshirt/icon.svg",
    },
    {
      address: "0x1adca32b906883e474aebcba5708b41f3645f941",
      name: "SuperMOCA",
      symbol: "MOCAx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xce899f26928a2b21c6a2fddd393ef37c61dba918",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/moca/icon.jpeg",
    },
    {
      address: "0xce899f26928a2b21c6a2fddd393ef37c61dba918",
      name: "Museum of Crypto Art",
      symbol: "MOCA",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/moca/icon.jpeg",
    },
    {
      address: "0x229c5d13452dc302499b5c113768a0db0c9d5c05",
      name: "Super BlackPool Token (PoS)",
      symbol: "BPTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6863bd30c9e313b264657b107352ba246f8af8e0",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bpt/icon.svg",
    },
    {
      address: "0x6863bd30c9e313b264657b107352ba246f8af8e0",
      name: "BlackPool Token (PoS)",
      symbol: "BPT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bpt/icon.svg",
    },
    {
      address: "0x263026e7e53dbfdce5ae55ade22493f828922965",
      name: "Ricochet",
      symbol: "RIC",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ric/icon.svg",
    },
    {
      address: "0x27e1e4e6bc79d93032abef01025811b7e4727e85",
      name: "Super WETH (PoS)",
      symbol: "ETHx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0xc22bea0be9872d8b7b3933cec70ece4d53a900da",
          },
          "5": {
            tokenAddress: "0x5943f705abb6834cad767e6e4bb258bc48d9c947",
          },
          "10": {
            tokenAddress: "0x4ac8bd1bdae47beef2d1c6aa62229509b962aa0d",
          },
          "100": {
            tokenAddress: "0x9757d68a4273635c69d93b84ee3cdac2304dd467",
          },
          "42161": {
            tokenAddress: "0xe6c8d111337d0052b9d88bf5d7d55b7f8385acd3",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eth/icon.svg",
    },
    {
      address: "0x2b47ee85a85b18be029af94df52fcb52c54725f4",
      name: "superSTAK ",
      symbol: "STAKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x46a5d492788f8afdfc743ab7d7bd13f996249ed5",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/stak/icon.png",
    },
    {
      address: "0x46a5d492788f8afdfc743ab7d7bd13f996249ed5",
      name: "Jigstack (PoS)",
      symbol: "STAK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/stak/icon.png",
    },
    {
      address: "0x2c530af1f088b836fa0dca23c7ea50e669508c4c",
      name: "Super MAKER (PoS)",
      symbol: "MKRx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6f7c932e7684666c9fd1d44527765433e01ff61d",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mkr/icon.svg",
    },
    {
      address: "0x6f7c932e7684666c9fd1d44527765433e01ff61d",
      name: "MAKER (PoS)",
      symbol: "MKR",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mkr/icon.svg",
    },
    {
      address: "0x2d4dc956fbd0044a4eba945e8bbaf98a14025c2d",
      name: "Streaming IbAlluo ETH",
      symbol: "StIbAlluoEth",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc677b0918a96ad258a68785c2a3955428dea7e50",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuoeth/icon.svg",
    },
    {
      address: "0xc677b0918a96ad258a68785c2a3955428dea7e50",
      name: "Interest Bearing Alluo ETH",
      symbol: "IbAlluoETH",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuoeth/icon.svg",
    },
    {
      address: "0x2e12d38c6aa87cb68ce96c044b9a68dd98233ceb",
      name: "Super Dbeats Token",
      symbol: "DBEATx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x92e918ea7aa872f91bf7ec9bcd248a5920c9f3cb",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dbeat/icon.svg",
    },
    {
      address: "0x92e918ea7aa872f91bf7ec9bcd248a5920c9f3cb",
      name: "Dbeats Token",
      symbol: "DBEAT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dbeat/icon.svg",
    },
    {
      address: "0x3038b359240dff5ccd42dffd21f12b428034be38",
      name: "Super agEUR",
      symbol: "agEURx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ageur/icon.png",
    },
    {
      address: "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4",
      name: "agEUR",
      symbol: "agEUR",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ageur/icon.png",
    },
    {
      address: "0x32cefdf2b3df73bdebaa7cd3b0135b3a79d28dcc",
      name: "Super Request Token",
      symbol: "REQx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/req/icon.svg",
    },
    {
      address: "0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762",
      name: "Request",
      symbol: "REQ",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/req/icon.svg",
    },
    {
      address: "0x3862c15cdc4c38517aa4c6f94197a93253502168",
      name: "Super Sunny Jaycer Token",
      symbol: "SUNNYx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xd1d410db734d634414594898b39608b27f166aab",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sunny/icon.svg",
    },
    {
      address: "0xd1d410db734d634414594898b39608b27f166aab",
      name: "Sunny Jaycer Token",
      symbol: "SUNNY",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sunny/icon.svg",
    },
    {
      address: "0x3ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3",
      name: "Super MATIC",
      symbol: "MATICx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Native Asset",
          underlyingTokenAddress: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/matic/icon.svg",
    },
    {
      address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      name: "Wrapped Matic",
      symbol: "WMATIC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/matic/icon.svg",
    },
    {
      address: "0x3d9cc088bd9357e5941b68d26d6d09254a69949d",
      name: "Super MTA",
      symbol: "MTAx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf501dd45a1198c2e1b5aef5314a68b9006d842e0",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mta/icon.png",
    },
    {
      address: "0xf501dd45a1198c2e1b5aef5314a68b9006d842e0",
      name: "Meta (PoS)",
      symbol: "MTA",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mta/icon.png",
    },
    {
      address: "0x3e70e15c189e1ffe8ff44d713605528dc1701b63",
      name: "Streaming IbAlluo BTC",
      symbol: "StIbAlluoBTC",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf272ff86c86529504f0d074b210e95fc4cfcdce2",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuobtc/icon.svg",
    },
    {
      address: "0xf272ff86c86529504f0d074b210e95fc4cfcdce2",
      name: "Interest Bearing Alluo BTC",
      symbol: "IbAlluoBTC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuobtc/icon.svg",
    },
    {
      address: "0x4086ebf75233e8492f1bcda41c7f2a8288c2fb92",
      name: "Super WBTC (PoS)",
      symbol: "WBTCx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/wbtc/icon.svg",
    },
    {
      address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      name: "(PoS) Wrapped BTC",
      symbol: "WBTC",
      decimals: 8,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/wbtc/icon.svg",
    },
    {
      address: "0x49765f8fcf0a1cd4f98da906f0974a9085d43e51",
      name: "Super XSGD",
      symbol: "XSGDx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xdc3326e71d45186f113a2f448984ca0e8d201995",
        },
      },
    },
    {
      address: "0xdc3326e71d45186f113a2f448984ca0e8d201995",
      name: "XSGD",
      symbol: "XSGD",
      decimals: 6,
      chainId: 137,
    },
    {
      address: "0x4bde23854e7c81218463f6c8f331b46144e98eac",
      name: "Super jEUR",
      symbol: "jEURx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jeur/icon.svg",
    },
    {
      address: "0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c",
      name: "Jarvis Synthetic Euro",
      symbol: "jEUR",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jeur/icon.svg",
    },
    {
      address: "0x513412fcd5e0da4bed9102017164b84c06e557d4",
      name: "Super Dood",
      symbol: "Doodx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x8c36336211916c58860f1edf20b0f50ea66d8bd5",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dood/icon.png",
    },
    {
      address: "0x8c36336211916c58860f1edf20b0f50ea66d8bd5",
      name: "Doodle 4081",
      symbol: "Dood",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/dood/icon.png",
    },
    {
      address: "0x5d6fdc854b46e8b237bd2ccc2714cfa3d18cf58e",
      name: "Super Alongside Crypto Market Index",
      symbol: "AMKTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xb87904db461005fc716a6bf9f2d451c33b10b80b",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/amkt/icon.png",
    },
    {
      address: "0xb87904db461005fc716a6bf9f2d451c33b10b80b",
      name: "Alongside Crypto Market Index (PoS)",
      symbol: "AMKT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/amkt/icon.png",
    },
    {
      address: "0x5e31d5bdd6c87edff8659d9ead9ce0013fb47184",
      name: "Super EUROe Stablecoin",
      symbol: "EUROex",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x820802fa8a99901f52e39acd21177b0be6ee2974",
        },
        bridgeInfo: {
          "43114": {
            tokenAddress: "0x6af916e2001bc4935e6d2f256363ed54eb8e20e0",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/euroe/icon.svg",
    },
    {
      address: "0x820802fa8a99901f52e39acd21177b0be6ee2974",
      name: "EUROe Stablecoin",
      symbol: "EUROe",
      decimals: 6,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/euroe/icon.svg",
    },
    {
      address: "0x61a7b6f0a7737d9bd38fdeaf1d4160e16bf23043",
      name: "SuperWork",
      symbol: "WORKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6002410dda2fb88b4d0dc3c1d562f7761191ea80",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/work/icon.png",
    },
    {
      address: "0x6002410dda2fb88b4d0dc3c1d562f7761191ea80",
      name: "The Employment Commons Work Token (PoS)",
      symbol: "WORK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/work/icon.png",
      extensions: {
        bridgeInfo: {
          "100": {
            tokenAddress: "0x6689a8f4fdad6712888682c9ce81b26762389f40",
          },
        },
      },
    },
    {
      address: "0x6328c1c2e258a314bdac5227e9c7d212312297ad",
      name: "Super jGBP",
      symbol: "jGBPx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x767058f11800fba6a682e73a6e79ec5eb74fac8c",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jgbp/icon.png",
    },
    {
      address: "0x767058f11800fba6a682e73a6e79ec5eb74fac8c",
      name: "Jarvis Synthetic British Pound",
      symbol: "jGBP",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jgbp/icon.png",
    },
    {
      address: "0x64059efad287b57d8df9c313d56f6c1a5c945b94",
      name: "Super jMXN",
      symbol: "jMXNx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xbd1fe73e1f12bd2bc237de9b626f056f21f86427",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jmxn/icon.svg",
    },
    {
      address: "0xbd1fe73e1f12bd2bc237de9b626f056f21f86427",
      name: "Jarvis Synthetic Mexican Peso",
      symbol: "jMXN",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jmxn/icon.svg",
    },
    {
      address: "0x72a9bae5ce6de9816aadcbc24daa09f5d169a980",
      name: "Monerium EUR emoney",
      symbol: "EURex",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x18ec0a6e18e5bc3784fdd3a3634b31245ab704f6",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eure/icon.svg",
    },
    {
      address: "0x18ec0a6e18e5bc3784fdd3a3634b31245ab704f6",
      name: "Monerium EUR emoney",
      symbol: "EURe",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/eure/icon.svg",
    },
    {
      address: "0x782b2725593b18c8453568f3ffb2645b6cb5033e",
      name: "Super jCAD",
      symbol: "jCADx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x8ca194a3b22077359b5732de53373d4afc11dee3",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jcad/icon.png",
    },
    {
      address: "0x8ca194a3b22077359b5732de53373d4afc11dee3",
      name: "Jarvis Synthetic Canadian Dollar",
      symbol: "jCAD",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jcad/icon.png",
    },
    {
      address: "0x7893304db2c9e5dab18fd5b41855ea5a40fb070d",
      name: "Super jBGN",
      symbol: "jBGNx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x60e91fc3a60362ca44aea0263dbc4b96302f6ade",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jbgn/icon.png",
    },
    {
      address: "0x60e91fc3a60362ca44aea0263dbc4b96302f6ade",
      name: "Jarvis Synthetic Bulgarian Lev",
      symbol: "jBGN",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jbgn/icon.png",
    },
    {
      address: "0x7d35eab5f5fdf6b458b18c29d0d61092835f9e99",
      name: "Super Signal Token",
      symbol: "SIGNALx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x9b532ffa57631d77163be75e965e6adfc3b81510",
        },
      },
    },
    {
      address: "0x9b532ffa57631d77163be75e965e6adfc3b81510",
      name: "RADAR",
      symbol: "SIGNAL",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0x7f078f02a77e91e67ee592faed23d1cfcb390a60",
      name: "Super Crosschain IOTX ",
      symbol: "CIOTXx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x300211def2a644b036a9bdd3e58159bb2074d388",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ciotx/icon.svg",
    },
    {
      address: "0x300211def2a644b036a9bdd3e58159bb2074d388",
      name: "Crosschain IOTX",
      symbol: "CIOTX",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ciotx/icon.svg",
    },
    {
      address: "0x8c9eada20fed455ae2a8f002a76dffe279a9d737",
      name: "Super jXOF",
      symbol: "jXOFx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x4a1e068bc23faec08a5817a2a58258e3378d36f0",
        },
      },
    },
    {
      address: "0x4a1e068bc23faec08a5817a2a58258e3378d36f0",
      name: "Jarvis Synthetic Franc CFA (UEMOA)",
      symbol: "jXOF",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0x8ef4f0c0753048a39b4bc4eb3f545fdae00618b7",
      name: "Super stake dao Curve.fi amDAI/amUSDC/a",
      symbol: "sdam3CRVx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x7d60f21072b585351dfd5e8b17109458d97ec120",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sdam3crv/icon.svg",
    },
    {
      address: "0x7d60f21072b585351dfd5e8b17109458d97ec120",
      name: "stake dao Curve.fi amDAI/amUSDC/amUSDT",
      symbol: "sdam3CRV",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/sdam3crv/icon.svg",
    },
    {
      address: "0x9308a7116106269eb11834df494efd00d244cf8e",
      name: "Astro Gold Lite",
      symbol: "ALITE",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/alite/icon.svg",
    },
    {
      address: "0x9556b40e816e2890fdaffb2ffd47f6493f240781",
      name: "Super Kitty Party Reward Token (PoS)",
      symbol: "KPTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x7d369731e3d7f86417aa86ef4be26e309080bd2f",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/kpt/icon.svg",
    },
    {
      address: "0x7d369731e3d7f86417aa86ef4be26e309080bd2f",
      name: "Kitty Party Reward Token (PoS)",
      symbol: "KPT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/kpt/icon.svg",
    },
    {
      address: "0x96eac3913bab431c28895f02cf5c56ad2dab8439",
      name: "Super Curve DAO Token",
      symbol: "CRVx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x172370d5cd63279efa6d502dab29171933a610af",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/crv/icon.png",
    },
    {
      address: "0x172370d5cd63279efa6d502dab29171933a610af",
      name: "CRV (PoS)",
      symbol: "CRV",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/crv/icon.png",
    },
    {
      address: "0x992446b88a7e62c7235bd88108f44543c1887c1f",
      name: "MAI (miMATIC)",
      symbol: "MAIx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mimatic/icon.svg",
    },
    {
      address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
      name: "miMATIC",
      symbol: "miMATIC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mimatic/icon.svg",
    },
    {
      address: "0xa1bd23b582c12c22e5e264a0a69847ca0ed9f2b0",
      name: "Super ChainLink Token",
      symbol: "LINKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/link/icon.png",
    },
    {
      address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
      name: "ChainLink Token",
      symbol: "LINK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/link/icon.png",
    },
    {
      address: "0xa6810e06fb8c93b2c53c0d6415c885719cba6eb5",
      name: "Super KHIZA",
      symbol: "KHIZAx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x25856d46748ee959f99a0fbbb5312c73473cb533",
        },
      },
    },
    {
      address: "0x25856d46748ee959f99a0fbbb5312c73473cb533",
      name: "Khiza DAO",
      symbol: "KHIZA",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0xa794221d92d77490ff319e95da1461bdf2bd3953",
      name: "TDLx",
      symbol: "TDLx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xcd1f2f1a1d1ba631a06b957db77bb9d7b13bf861",
        },
        bridgeInfo: {
          "5": {
            tokenAddress: "0x0be89e17787c0ae021b5e4f84ae8444f900dd92c",
          },
          "100": {
            tokenAddress: "0x66e454105ae553cfa87ad4dc4cdf128c841fcd73",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0xcd1f2f1a1d1ba631a06b957db77bb9d7b13bf861",
      name: "TDL Fake Token",
      symbol: "TDL",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/tdl/icon.svg",
    },
    {
      address: "0xab0b048e8b60eb9e8c7a2d46634326143393f2ea",
      name: "Super mUSD",
      symbol: "mUSDx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xe840b73e5287865eec17d250bfb1536704b43b21",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mstable-usd-polygon-pos/icon.png",
    },
    {
      address: "0xe840b73e5287865eec17d250bfb1536704b43b21",
      name: "mUSD",
      symbol: "mStableUSD(PolygonP",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mstable-usd-polygon-pos/icon.png",
    },
    {
      address: "0xad0ffbb4e45c42a45a6206383ce2adf9102cdcb9",
      name: "Super jPHP",
      symbol: "jPHPx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x486880fb16408b47f928f472f57bec55ac6089d1",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jphp/icon.png",
    },
    {
      address: "0x486880fb16408b47f928f472f57bec55ac6089d1",
      name: "Jarvis Synthetic Philippine Peso",
      symbol: "jPHP",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jphp/icon.png",
    },
    {
      address: "0xaff1ce7832a1c7655803533dab391920cafe467f",
      name: "Super FLOAT",
      symbol: "FLOATx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf0ae1efde60bab0a830673747138f12367858e8d",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/float/icon.svg",
    },
    {
      address: "0xf0ae1efde60bab0a830673747138f12367858e8d",
      name: "Float Protocol: FLOAT (PoS)",
      symbol: "FLOAT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/float/icon.svg",
    },
    {
      address: "0xb63e38d21b31719e6df314d3d2c351df0d4a9162",
      name: "Super Idle (PoS)",
      symbol: "IDLEx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc25351811983818c9fe6d8c580531819c8ade90f",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/idle/icon.png",
    },
    {
      address: "0xc25351811983818c9fe6d8c580531819c8ade90f",
      name: "Idle (PoS)",
      symbol: "IDLE",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/idle/icon.png",
    },
    {
      address: "0xb683fb34a77c06931ba62d804252d1f60596a36a",
      name: "Super Spork",
      symbol: "SPORKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/spork/icon.png",
    },
    {
      address: "0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39",
      name: "The SporkDAO Token (PoS)",
      symbol: "SPORK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/spork/icon.png",
    },
    {
      address: "0xb7d60973cc27324dcae837d89d7bd9c5f15e3833",
      name: "Super Slatan ROTI Token",
      symbol: "ROTIx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x13b4bd4c0719f9f46df35bfc234213b4df6e9b7c",
        },
      },
    },
    {
      address: "0x13b4bd4c0719f9f46df35bfc234213b4df6e9b7c",
      name: "Slatan ROTI Token",
      symbol: "ROTI",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
      name: "Own a fraction",
      symbol: "FRACTION",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "10": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "56": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
          "100": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "42161": {
            tokenAddress: "0x2bf2ba13735160624a0feae98f6ac8f70885ea61",
          },
          "43114": {
            tokenAddress: "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/fraction/icon.svg",
    },
    {
      address: "0xc0b2983a17573660053beeed6fdb1053107cf387",
      name: "Minerva Wallet SuperToken",
      symbol: "MIVA",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "100": {
            tokenAddress: "0x63e62989d9eb2d37dfdb1f93a22f063635b07d51",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/miva/icon.svg",
    },
    {
      address: "0xc49c15350f001efee91e154f03bddf38cfd0d96e",
      name: "Super Adept Camp Doge Coin",
      symbol: "ACDCx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x1f02ec2dd0ff3e31ca893aec6c3585fe88243df3",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/acdc/icon.svg",
    },
    {
      address: "0x1f02ec2dd0ff3e31ca893aec6c3585fe88243df3",
      name: "Adept Camp Doge Coin",
      symbol: "ACDC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/acdc/icon.svg",
    },
    {
      address: "0xcaa7349cea390f89641fe306d93591f87595dc1f",
      name: "Super USDC (PoS)",
      symbol: "USDCx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        },
        bridgeInfo: {
          "1": {
            tokenAddress: "0x1ba8603da702602a8657980e825a6daa03dee93a",
          },
          "10": {
            tokenAddress: "0x8430f084b939208e2eded1584889c9a66b90562f",
          },
          "100": {
            tokenAddress: "0x1234756ccf0660e866305289267211823ae86eec",
          },
          "42161": {
            tokenAddress: "0x1dbc1809486460dcd189b8a15990bca3272ee04e",
          },
          "43114": {
            tokenAddress: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      name: "USD Coin (PoS)",
      symbol: "USDC",
      decimals: 6,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdc/icon.svg",
    },
    {
      address: "0xcae73e9eee8a01b8b7f94b59133e3821f21470ab",
      name: "Stacker Ventures Token",
      symbol: "STACKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xccbe9b810d6574701d324fd6dbe0a1b68f9d5bf7",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/stack/icon.svg",
    },
    {
      address: "0xccbe9b810d6574701d324fd6dbe0a1b68f9d5bf7",
      name: "Stacker Ventures Token (PoS)",
      symbol: "STACK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/stack/icon.svg",
    },
    {
      address: "0xcb5676568febb4e4f0dca9407318836e7a973183",
      name: "Super Instadapp",
      symbol: "INSTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf50d05a1402d0adafa880d36050736f9f6ee7dee",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/inst/icon.svg",
    },
    {
      address: "0xf50d05a1402d0adafa880d36050736f9f6ee7dee",
      name: "Instadapp (PoS)",
      symbol: "INST",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/inst/icon.svg",
    },
    {
      address: "0xcf75b3b2d305690f4d70d8aeaa36e9f7813e806d",
      name: "Super jXAF",
      symbol: "jXAFx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x98fab5d1366de24f152ea683a1f23338351c47ea",
        },
      },
    },
    {
      address: "0x98fab5d1366de24f152ea683a1f23338351c47ea",
      name: "Jarvis Synthetic Franc CFA (CEMAC)",
      symbol: "jXAF",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0xd735b487b9018eeada2cc0464db02aa4b90ca711",
      name: "NTDL",
      symbol: "NTDL",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
        bridgeInfo: {
          "5": {
            tokenAddress: "0xcc48a0349077b91ab540d2e46addffb4a4a26251",
          },
          "100": {
            tokenAddress: "0x60fdb4d22e793353d98324d824034d66827f602e",
          },
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/ntdl/icon.svg",
    },
    {
      address: "0xd89c35b586eadfbde1a3b2d36fb5746c6d3601bc",
      name: "Super Metavault Trade Token",
      symbol: "MVXx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x2760e46d9bb43dafcbecaad1f64b93207f9f0ed7",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mvx/icon.png",
    },
    {
      address: "0x2760e46d9bb43dafcbecaad1f64b93207f9f0ed7",
      name: "Metavault Trade",
      symbol: "MVX",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/mvx/icon.png",
    },
    {
      address: "0xd98a3eabb78a759868d5a35677ffa99a78f33ec7",
      name: "Super Artizen Token",
      symbol: "ARTx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xd7f3aac7557c213b035c19bd89bd693396acccd6",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/art/icon.svg",
    },
    {
      address: "0xd7f3aac7557c213b035c19bd89bd693396acccd6",
      name: "Artizen Token",
      symbol: "ART",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/art/icon.svg",
    },
    {
      address: "0xe04ad5d86c40d53a12357e1ba2a9484f60db0da5",
      name: "Super Wrapped Matic",
      symbol: "WMATICx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/matic/icon.svg",
    },
    {
      address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      name: "Wrapped Matic",
      symbol: "WMATIC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/matic/icon.svg",
    },
    {
      address: "0xe127d2d7b2ce51130429e32d22d908e8d96a3247",
      name: "Super jSGD",
      symbol: "jSGDx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xa926db7a4cc0cb1736d5ac60495ca8eb7214b503",
        },
      },
    },
    {
      address: "0xa926db7a4cc0cb1736d5ac60495ca8eb7214b503",
      name: "Jarvis Synthetic Singapore Dollar",
      symbol: "jSGD",
      decimals: 18,
      chainId: 137,
    },
    {
      address: "0xe199f1b01dd3e8a1c43b62279feb20547a2eb3ef",
      name: "Streaming IbAlluo EUR",
      symbol: "StIbAlluoEUR",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc9d8556645853c465d1d5e7d2c81a0031f0b8a92",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuoeur/icon.svg",
    },
    {
      address: "0xc9d8556645853c465d1d5e7d2c81a0031f0b8a92",
      name: "Interest Bearing Alluo EUR",
      symbol: "IbAlluoEUR",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuoeur/icon.svg",
    },
    {
      address: "0xe1c042c91fa08875323e57978c9b9fb413297cf2",
      name: "Super IoTeX",
      symbol: "IOTXx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf6372cdb9c1d3674e83842e3800f2a62ac9f3c66",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iotx/icon.svg",
    },
    {
      address: "0xf6372cdb9c1d3674e83842e3800f2a62ac9f3c66",
      name: "IoTeX Network (PoS)",
      symbol: "IOTX",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iotx/icon.svg",
    },
    {
      address: "0xe1ca10e6a10c0f72b74df6b7339912babfb1f8b5",
      name: "superQI",
      symbol: "QIx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/qi/icon.svg",
    },
    {
      address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
      name: "Qi Dao",
      symbol: "QI",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/qi/icon.svg",
    },
    {
      address: "0xe2d04ab74eed9627c828b3fc10e5fc96fae70348",
      name: "Super jCHF",
      symbol: "jCHFx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xbd1463f02f61676d53fd183c2b19282bff93d099",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jchf/icon.svg",
    },
    {
      address: "0xbd1463f02f61676d53fd183c2b19282bff93d099",
      name: "Jarvis Synthetic Swiss Franc",
      symbol: "jCHF",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jchf/icon.svg",
    },
    {
      address: "0xe88f7c019dd3feb5e738681730fb150e62814670",
      name: "Super CREEKS",
      symbol: "CRKx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xf122a63f9fd807fa28a3495ad822ad84c934793d",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/crk/icon.svg",
    },
    {
      address: "0xf122a63f9fd807fa28a3495ad822ad84c934793d",
      name: "CREEKS",
      symbol: "CRK",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/crk/icon.svg",
    },
    {
      address: "0xe91d640fcaea9602cf94c0d48a251a7f6d946953",
      name: "REX Hat 2023",
      symbol: "rexHAT",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Pure",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/rexhat/icon.svg",
    },
    {
      address: "0xe9e759b969b991f2bfae84308385405b9ab01541",
      name: "Streaming IbAlluo USD",
      symbol: "StIbAlluoUSD",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xc2dbaaea2efa47ebda3e572aa0e55b742e408bf6",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuousd/icon.svg",
    },
    {
      address: "0xc2dbaaea2efa47ebda3e572aa0e55b742e408bf6",
      name: "Interest Bearing Alluo USD",
      symbol: "IbAlluoUSD",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/iballuousd/icon.svg",
    },
    {
      address: "0xeb5748f9798b11af79f892f344f585e3a88aa784",
      name: "Super IdleWETH [Best yield]",
      symbol: "idleWETHx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xfda25d931258df948ffecb66b5518299df6527c4",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/idlewethyield/icon.svg",
    },
    {
      address: "0xfda25d931258df948ffecb66b5518299df6527c4",
      name: "IdleWETH [Best yield]",
      symbol: "idleWETHYield",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/idlewethyield/icon.svg",
    },
    {
      address: "0xfac83774854237b6e31c4b051b91015e403956d3",
      name: "Astro Gold",
      symbol: "AGOLD",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/agold/icon.svg",
    },
    {
      address: "0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe",
      name: "PlanetIX",
      symbol: "IXT",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/agold/icon.svg",
    },
    {
      address: "0xfbb291570de4b87353b1e0f586df97a1ed856470",
      name: "Super JPY Coin (PoS)",
      symbol: "JPYCx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jpyc/icon.svg",
    },
    {
      address: "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
      name: "JPY Coin (PoS)",
      symbol: "JPYC",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/jpyc/icon.svg",
    },
    {
      address: "0xfd0577c4707367ff9b637f219388919d3be37592",
      name: "Super Gains Network",
      symbol: "GNSx",
      decimals: 18,
      chainId: 137,
      extensions: {
        superTokenInfo: {
          type: "Wrapper",
          underlyingTokenAddress: "0xe5417af564e4bfda1c483642db72007871397896",
        },
      },
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/gns/icon.png",
    },
    {
      address: "0xe5417af564e4bfda1c483642db72007871397896",
      name: "Gains Network",
      symbol: "GNS",
      decimals: 18,
      chainId: 137,
      logoURI:
        "https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/gns/icon.png",
    },
  ],
};

export default tokenList;
