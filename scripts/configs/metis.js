
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
  twapWindow: "1200",   // in seconds
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
    // USDO
    {
      underlying: "0x5801D0e1C7D977D78E4890880B8E579eb4943276",
      priceSource: "0",
      fixedPrice: "1",
    },
    // USDC
    {
      underlying: "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
      priceSource: "0",
      fixedPrice: "1",
    },
    // USDT
    {
      underlying: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
      priceSource: "0",
      fixedPrice: "1",
    },
    // BUSD
    {
      underlying: "0x12d84f1cfe870ca9c9df9785f8954341d7fbb249",
      priceSource: "0",
      fixedPrice: "1",
    },
    // DAI
    {
      underlying: "0x4651B38e7ec14BB3db731369BFE5B08F2466Bd0A",
      priceSource: "0",
      fixedPrice: "1",
    },
    // ETH
    {
      underlying: "0x420000000000000000000000000000000000000a",
      priceSource: "1",
    },
    // WBTC
    {
      underlying: "0xa5B55ab1dAF0F8e1EFc0eB1931a957fd89B918f4",
      priceSource: "1",
    },
  ],

  cTokenConfigs: {
    cTokens: [
    ],
  }
};