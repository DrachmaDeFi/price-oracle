
const { UniLpCalcParams } = require("../../utils/constants");

/**
 * Defining a config
 * - underlying - address
 * - priceSource
 * - LP pair address (only for first base config)
 * - symbol (optional)
 * 
 * NOTE - The first config is treated as the base config. For metis it should be Metis/stableCoin
 * 
 * Defining price source
 * 0 - FIXED_USD          -> implies the fixedPrice is a constant multiple of the USD price (which is 1)
 * 1 - UNISWAP            -> implies the price is fetched from uniswap
 * 2 - POSTER             -> implies the price is posted externally
 * 3 - EXTERNAL_ORACLE    -> implies the price is read externally
 * 4 - REPOINT            -> implies the price is repointed to other asset's price
 * 5 - UNI_V2_LP          -> implies the price is computed as UniV2 LP pair
 * 6 - CURVE_LP           -> implies the price is computed as Curve Finance LP
 * 
 */

module.exports = {
  twapWindow: "3600",   // in seconds
  baseAsset: "Metis",
  UniswapV2Router: "0x1E876cCe41B7b844FDe09E38Fa1cf00f213bFf56",
  basePriceDecimals: "6",
  tokenConfigs: [
    // base config - Metis/USDC
    {
      underlying: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      priceSource: "1",
      uniswapMarket: "0x5Ae3ee7fBB3Cb28C17e7ADc3a6Ae605ae2465091",
    },
    // CONFIG
    {
      underlying: "0x78EBD93A6F804BCDa52307C1103e57b3e62656bA",
      priceSource: "0",
      fixedPrice: "1",
    },
    // Drachma USDC USDT LP
    {
      underlying: "0xF3f03c110e01dE844fE8a608063bDC9b6c6cdC9f",
      priceSource: "0",
      fixedPrice: "1",
    },
    // Drachma USDC USDO LP
    {
      underlying: "0x2bDB2B67470bF45682A05b4453fA3C135b3087c4",
      priceSource: "0",
      fixedPrice: "1",
      symbol: "Drachma USDC USDO LP",
    },
    // CONFIG Token V2
    {
      underlying: "0xB5BC84024BC3D4Cae2D441C6a6093aE54636BBC7",
      priceSource: "0",
      fixedPrice: "1",
      symbol: "CONFIG Token V2",
    },
  ],

  cTokenConfigs: {
    cTokens: [
      "0x62a0ef15C5c4459219fE75C41375B79B4e1D9a8a",   // kConfig Token
      "0xFf138EDD7f3338306585782227C1bE4F0F3e7371",   // kDrachma USDC USDT LP  
      "0x3163D664C46a0A269a2C9E96936A7fD9947e4621",   // kDrachma USDC USDO LP
      "0x28BB6f0c75EfB0109092fD3b159B0f7ED56492E3",   // kCONFIG Token V2
    ],
  }
};