/* Autogenerated file. Edit at your own risk */
import { z } from 'zod'
import { Chain } from '../core/constants/chains'
import { IProtocolAdapter } from '../types/IProtocolAdapter'
import { ProtocolAdapterParams } from '../types/adapter'
import { AaveV2ATokenPoolAdapter } from './aave-v2/products/a-token/aaveV2ATokenAdapter'
import { AaveV2StableDebtTokenPoolAdapter } from './aave-v2/products/stable-debt-token/aaveV2StableDebtTokenAdapter'
import { AaveV2VariableDebtTokenPoolAdapter } from './aave-v2/products/variable-debt-token/aaveV2VariableDebtTokenAdapter'
import {
  AaveV3ATokenPoolAdapter,
  WriteActionInputs as AaveV3ATokenWriteActionInputs,
} from './aave-v3/products/a-token/aaveV3ATokenAdapter'
import { AaveV3StableDebtTokenPoolAdapter } from './aave-v3/products/stable-debt-token/aaveV3StableDebtTokenAdapter'
import { AaveV3VariableDebtTokenPoolAdapter } from './aave-v3/products/variable-debt-token/aaveV3VariableDebtTokenAdapter'
import { AngleProtocolSavingsAdapter } from './angle-protocol/products/savings/angleProtocolSavingsAdapter'
import { BeefyCowTokenAdapter } from './beefy/products/cow-token/beefyCowTokenAdapter'
import { BeefyMooTokenAdapter } from './beefy/products/moo-token/beefyMooTokenAdapter'
import { BeefyRcowTokenAdapter } from './beefy/products/rcow-token/beefyRcowTokenAdapter'
import { BeefyRmooTokenAdapter } from './beefy/products/rmoo-token/beefyRmooTokenAdapter'
import { CarbonDeFiStrategiesAdapter } from './carbon-defi/products/strategies/carbonDeFiStrategiesAdapter'
import { ChimpExchangePoolAdapter } from './chimp-exchange/products/pool/chimpExchangePoolAdapter'
import {
  CompoundV2BorrowMarketAdapter,
  WriteActionInputs as CompoundV2BorrowMarketWriteActionInputs,
} from './compound-v2/products/borrow-market/compoundV2BorrowMarketAdapter'
import {
  CompoundV2SupplyMarketAdapter,
  WriteActionInputs as CompoundV2SupplyMarketWriteActionInputs,
} from './compound-v2/products/supply-market/compoundV2SupplyMarketAdapter'
import { ConvexCvxcrvWrapperAdapter } from './convex/products/cvxcrv-wrapper/convexCvxcrvWrapperAdapter'
import { ConvexPoolAdapter } from './convex/products/pool/convexPoolAdapter'
import { ConvexSidechainStakingAdapter } from './convex/products/sidechain-staking/convexSidechainStakingAdapter'
import { ConvexStakingAdapter } from './convex/products/staking/convexStakingAdapter'
import { CurvePoolAdapter } from './curve/products/pool/curvePoolAdapter'
import { CurveStakingAdapter } from './curve/products/staking/curveStakingAdapter'
import { CurveVotingEscrowAdapter } from './curve/products/voting-escrow/curveVotingEscrowAdapter'
import { DeriPoolAdapter } from './deri/products/pool/deriPoolAdapter'
import { EthenaStakedUsdeAdapter } from './ethena/products/staked-usde/ethenaStakedUsdeAdapter'
import { FluxBorrowMarketAdapter } from './flux/products/borrow-market/fluxBorrowMarketAdapter'
import { FluxSupplyMarketAdapter } from './flux/products/supply-market/fluxSupplyMarketAdapter'
import { GmxGlpAdapter } from './gmx/products/glp/gmxGlpAdapter'
import { IZiSwapPoolAdapter } from './iziswap/products/pool/iZiSwapPoolAdapter'
import { LidoStEthAdapter } from './lido/products/st-eth/lidoStEthAdapter'
import { LidoWstEthAdapter } from './lido/products/wst-eth/lidoWstEthAdapter'
import { LynexAlgebraAdapter } from './lynex/products/algebra/lynexAlgebralAdapter'
import { LynexClassicAdapter } from './lynex/products/classic/lynexClassicAdapter'
import { MakerSDaiAdapter } from './maker/products/s-dai/makerSDaiAdapter'
import {
  MendiFinanceBorrowMarketAdapter,
  WriteActionInputs as MendiFinanceBorrowMarketWriteActionInputs,
} from './mendi-finance/products/borrow-market/mendiFinanceBorrowMarketAdapter'
import {
  MendiFinanceSupplyMarketAdapter,
  WriteActionInputs as MendiFinanceSupplyMarketWriteActionInputs,
} from './mendi-finance/products/supply-market/mendiFinanceSupplyMarketAdapter'
import { MorphoAaveV2OptimizerBorrowAdapter } from './morpho-aave-v2/products/optimizer-borrow/morphoAaveV2OptimizerBorrowAdapter'
import { MorphoAaveV2OptimizerSupplyAdapter } from './morpho-aave-v2/products/optimizer-supply/morphoAaveV2OptimizerSupplyAdapter'
import { MorphoAaveV3OptimizerBorrowAdapter } from './morpho-aave-v3/products/optimizer-borrow/morphoAaveV3OptimizerBorrowAdapter'
import { MorphoAaveV3OptimizerSupplyAdapter } from './morpho-aave-v3/products/optimizer-supply/morphoAaveV3OptimizerSupplyAdapter'
import { MorphoBlueMarketBorrowAdapter } from './morpho-blue/products/market-borrow/morphoBlueMarketBorrowAdapter'
import { MorphoBlueMarketSupplyAdapter } from './morpho-blue/products/market-supply/morphoBlueMarketSupplyAdapter'
import { MorphoCompoundV2OptimizerBorrowAdapter } from './morpho-compound-v2/products/optimizer-borrow/morphoCompoundV2OptimizerBorrowAdapter'
import { MorphoCompoundV2OptimizerSupplyAdapter } from './morpho-compound-v2/products/optimizer-supply/morphoCompoundV2OptimizerSupplyAdapter'
import { PancakeswapV2PoolAdapter } from './pancakeswap-v2/products/pool/pancakeswapV2PoolAdapter'

import { MountainProtocolUsdmAdapter } from './mountain-protocol/products/usdm/mountainProtocolUsdmAdapter'
import { MountainProtocolWUsdmAdapter } from './mountain-protocol/products/wusdm/mountainProtocolWUsdmAdapter'
import { PricesV2UsdAdapter } from './prices-v2/products/usd/pricesV2UsdAdapter'
import { Protocol } from './protocols'
import { QuickswapV2PoolAdapter } from './quickswap-v2/products/pool/quickswapV2PoolAdapter'
import { RocketPoolRethAdapter } from './rocket-pool/products/reth/rocketPoolRethAdapter'
import { SonneBorrowMarketAdapter } from './sonne/products/borrow-market/sonneBorrowMarketAdapter'
import { SonneSupplyMarketAdapter } from './sonne/products/supply-market/sonneSupplyMarketAdapter'
import { StakeWiseOsEthAdapter } from './stakewise/products/os-eth/stakeWiseOsEthAdapter'
import { StargatePoolAdapter } from './stargate/products/pool/stargatePoolAdapter'
import { StargateVotingEscrowAdapter } from './stargate/products/voting-escrow/stargateVotingEscrowAdapter'
import { SushiswapV2PoolAdapter } from './sushiswap-v2/products/pool/sushiswapV2PoolAdapter'
import { SwellSwEthAdapter } from './swell/products/sw-eth/swellSwEthAdapter'
import { SyncSwapPoolAdapter } from './syncswap/products/pool/syncSwapPoolAdapter'
import { UniswapV2PoolAdapter } from './uniswap-v2/products/pool/uniswapV2PoolAdapter'
import { UniswapV3PoolAdapter } from './uniswap-v3/products/pool/uniswapV3PoolAdapter'
import { XfaiDexAdapter } from './xfai/products/dex/xfaiDexAdapter'

import {
  SparkV1SpTokenAdapter,
  WriteActionInputs as SparkV1SpTokenWriteActionInputs,
} from './spark-v1/products/sp-token/sparkV1SpTokenAdapter'

import { SparkV1VariableDebtTokenPoolAdapter } from './spark-v1/products/variable-debt-token/sparkV1VariableDebtTokenAdapter'

import { PendleYieldTokenAdapter } from './pendle/products/yield-token/pendleYieldTokenAdapter'

import { PendlePrincipleTokenAdapter } from './pendle/products/principle-token/pendlePrincipleTokenAdapter'

import { PendleStandardisedYieldTokenAdapter } from './pendle/products/standardised-yield-token/pendleStandardisedYieldTokenAdapter'

import { PendleLpTokenAdapter } from './pendle/products/lp-token/pendleLpTokenAdapter'

import { RenzoEzEthAdapter } from './renzo/products/ez-eth/renzoEzEthAdapter'

import { SolvSolvBtcAdapter } from './solv/products/solv-btc/solvSolvBtcAdapter'

import { MorphoBlueVaultAdapter } from './morpho-blue/products/vault/morphoBlueVaultAdapter'
import { SolvYieldMarketAdapter } from './solv/products/yield-market/solvYieldMarketAdapter'

import {
  ZeroLendATokenPoolAdapter,
  WriteActionInputs as ZerolendATokenWriteActionInputs,
} from './zerolend/products/a-token/zerolendATokenAdapter'
import { ZeroLendStableDebtTokenPoolAdapter } from './zerolend/products/stable-debt-token/zerolendStableDebtTokenAdapter'
import { ZeroLendVariableDebtTokenPoolAdapter } from './zerolend/products/variable-debt-token/zerolendVariableDebtTokenAdapter'

import { StargateFarmAdapter } from './stargate/products/farm/stargateFarmAdapter'

import { StargatePoolV2Adapter } from './stargate/products/pool-v2/stargatePoolV2Adapter'

import { StargateFarmV2Adapter } from './stargate/products/farm-v2/stargateFarmV2Adapter'

import { EtherFiEEthAdapter } from './etherfi/products/e-eth/etherFiEEthAdapter'

import { EtherFiWeEthAdapter } from './etherfi/products/we-eth/etherFiWeEthAdapter'

import { EtherFiLiquidAdapter } from './etherfi/products/liquid/etherFiLiquidAdapter'

import { EtherFiL2Adapter } from './etherfi/products/l2/etherFiL2Adapter'

import { EthenaLpStakingAdapter } from './ethena/products/lp-staking/ethenaLpStakingAdapter'

import { EthenaStakedEnaAdapter } from './ethena/products/staked-ena/ethenaStakedEnaAdapter'

export const supportedProtocols: Record<
  Protocol,
  Partial<
    Record<Chain, (new (input: ProtocolAdapterParams) => IProtocolAdapter)[]>
  >
> = {
  [Protocol.AaveV2]: {
    [Chain.Ethereum]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.AaveV3]: {
    [Chain.Ethereum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Base]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Arbitrum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    // [Chain.Fantom]: [
    //   AaveV3ATokenPoolAdapter,
    //   AaveV3StableDebtTokenPoolAdapter,
    //   AaveV3VariableDebtTokenPoolAdapter,
    // ],
    [Chain.Optimism]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.AngleProtocol]: {
    [Chain.Ethereum]: [AngleProtocolSavingsAdapter],
    [Chain.Optimism]: [AngleProtocolSavingsAdapter],
    [Chain.Polygon]: [AngleProtocolSavingsAdapter],
    [Chain.Arbitrum]: [AngleProtocolSavingsAdapter],
    [Chain.Linea]: [AngleProtocolSavingsAdapter],
    // [Chain.Bsc]: [AngleProtocolSavingsAdapter],
    [Chain.Avalanche]: [AngleProtocolSavingsAdapter],
    [Chain.Base]: [AngleProtocolSavingsAdapter],
  },

  [Protocol.Beefy]: {
    [Chain.Ethereum]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    [Chain.Optimism]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    // [Chain.Bsc]: [
    //   BeefyCowTokenAdapter,
    //   BeefyMooTokenAdapter,
    //   BeefyRcowTokenAdapter,
    //   BeefyRmooTokenAdapter,
    // ],
    [Chain.Polygon]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    // [Chain.Fantom]: [
    //   BeefyCowTokenAdapter,
    //   BeefyMooTokenAdapter,
    //   BeefyRcowTokenAdapter,
    //   BeefyRmooTokenAdapter,
    // ],
    [Chain.Base]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    [Chain.Arbitrum]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    [Chain.Avalanche]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
    [Chain.Linea]: [
      BeefyCowTokenAdapter,
      BeefyMooTokenAdapter,
      BeefyRcowTokenAdapter,
      BeefyRmooTokenAdapter,
    ],
  },

  [Protocol.CarbonDeFi]: {
    [Chain.Ethereum]: [CarbonDeFiStrategiesAdapter],
  },

  [Protocol.ChimpExchange]: {
    [Chain.Linea]: [ChimpExchangePoolAdapter],
  },

  [Protocol.CompoundV2]: {
    [Chain.Ethereum]: [
      CompoundV2SupplyMarketAdapter,
      CompoundV2BorrowMarketAdapter,
    ],
  },

  [Protocol.Convex]: {
    [Chain.Ethereum]: [
      ConvexPoolAdapter,
      ConvexStakingAdapter,
      ConvexCvxcrvWrapperAdapter,
    ],

    [Chain.Polygon]: [ConvexSidechainStakingAdapter],

    [Chain.Arbitrum]: [ConvexSidechainStakingAdapter],
  },

  [Protocol.Curve]: {
    [Chain.Ethereum]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveVotingEscrowAdapter,
    ],
    [Chain.Polygon]: [CurvePoolAdapter, CurveStakingAdapter],
    // [Chain.Fantom]: [CurvePoolAdapter, CurveStakingAdapter],
    [Chain.Arbitrum]: [CurvePoolAdapter, CurveStakingAdapter],
    [Chain.Avalanche]: [CurvePoolAdapter, CurveStakingAdapter],
    [Chain.Optimism]: [CurvePoolAdapter, CurveStakingAdapter],
    [Chain.Base]: [CurvePoolAdapter, CurveStakingAdapter],
  },

  [Protocol.Deri]: {
    // [Chain.Bsc]: [DeriPoolAdapter], Disabled until we can support getting all logs for BSC
    [Chain.Arbitrum]: [DeriPoolAdapter],
    [Chain.Linea]: [DeriPoolAdapter],
  },

  [Protocol.Ethena]: {
    [Chain.Ethereum]: [
      EthenaStakedUsdeAdapter,
      EthenaLpStakingAdapter,
      EthenaStakedEnaAdapter,
    ],
  },

  [Protocol.EtherFi]: {
    [Chain.Ethereum]: [
      EtherFiEEthAdapter,
      EtherFiWeEthAdapter,
      EtherFiLiquidAdapter,
    ],

    [Chain.Base]: [EtherFiL2Adapter],
    [Chain.Linea]: [EtherFiL2Adapter],
  },

  [Protocol.Flux]: {
    [Chain.Ethereum]: [FluxSupplyMarketAdapter, FluxBorrowMarketAdapter],
  },

  [Protocol.Gmx]: {
    [Chain.Arbitrum]: [GmxGlpAdapter],
    [Chain.Avalanche]: [GmxGlpAdapter],
  },

  [Protocol.IZiSwap]: {
    // [Chain.Bsc]: [IZiSwapPoolAdapter],
    [Chain.Base]: [IZiSwapPoolAdapter],
    [Chain.Arbitrum]: [IZiSwapPoolAdapter],
    [Chain.Linea]: [IZiSwapPoolAdapter],
  },

  [Protocol.Lido]: {
    [Chain.Ethereum]: [LidoStEthAdapter, LidoWstEthAdapter],
  },

  [Protocol.Lynex]: {
    [Chain.Linea]: [LynexAlgebraAdapter, LynexClassicAdapter],
  },

  [Protocol.Maker]: {
    [Chain.Ethereum]: [MakerSDaiAdapter],
  },

  [Protocol.MendiFinance]: {
    [Chain.Linea]: [
      MendiFinanceSupplyMarketAdapter,
      MendiFinanceBorrowMarketAdapter,
    ],
  },

  [Protocol.MorphoAaveV2]: {
    [Chain.Ethereum]: [
      MorphoAaveV2OptimizerBorrowAdapter,
      MorphoAaveV2OptimizerSupplyAdapter,
    ],
  },

  [Protocol.MorphoAaveV3]: {
    [Chain.Ethereum]: [
      MorphoAaveV3OptimizerSupplyAdapter,
      MorphoAaveV3OptimizerBorrowAdapter,
    ],
  },

  [Protocol.MorphoBlue]: {
    [Chain.Ethereum]: [
      MorphoBlueMarketSupplyAdapter,
      MorphoBlueMarketBorrowAdapter,
      MorphoBlueVaultAdapter,
    ],
    [Chain.Base]: [
      MorphoBlueMarketSupplyAdapter,
      MorphoBlueMarketBorrowAdapter,
      MorphoBlueVaultAdapter,
    ],
  },

  [Protocol.MorphoCompoundV2]: {
    [Chain.Ethereum]: [
      MorphoCompoundV2OptimizerSupplyAdapter,
      MorphoCompoundV2OptimizerBorrowAdapter,
    ],
  },

  [Protocol.MountainProtocol]: {
    [Chain.Ethereum]: [
      MountainProtocolUsdmAdapter,
      MountainProtocolWUsdmAdapter,
    ],
    [Chain.Optimism]: [
      MountainProtocolUsdmAdapter,
      MountainProtocolWUsdmAdapter,
    ],
    [Chain.Polygon]: [
      MountainProtocolUsdmAdapter,
      MountainProtocolWUsdmAdapter,
    ],
    [Chain.Arbitrum]: [
      MountainProtocolUsdmAdapter,
      MountainProtocolWUsdmAdapter,
    ],
    [Chain.Base]: [MountainProtocolUsdmAdapter, MountainProtocolWUsdmAdapter],
  },

  [Protocol.PancakeswapV2]: {
    [Chain.Ethereum]: [PancakeswapV2PoolAdapter],
    // [Chain.Bsc]: [PancakeswapV2PoolAdapter],
    [Chain.Base]: [PancakeswapV2PoolAdapter],
    [Chain.Arbitrum]: [PancakeswapV2PoolAdapter],
    [Chain.Linea]: [PancakeswapV2PoolAdapter],
  },

  [Protocol.Pendle]: {
    [Chain.Ethereum]: [
      PendleYieldTokenAdapter,
      PendlePrincipleTokenAdapter,
      PendleStandardisedYieldTokenAdapter,
      PendleLpTokenAdapter,
    ],
    [Chain.Arbitrum]: [
      PendleYieldTokenAdapter,
      PendlePrincipleTokenAdapter,
      PendleStandardisedYieldTokenAdapter,
      PendleLpTokenAdapter,
    ],
    // [Chain.Bsc]: [
    //   PendleYieldTokenAdapter,
    //   PendlePrincipleTokenAdapter,
    //   PendleStandardisedYieldTokenAdapter,
    //   PendleLpTokenAdapter,
    // ],
    [Chain.Optimism]: [
      PendleYieldTokenAdapter,
      PendlePrincipleTokenAdapter,
      PendleStandardisedYieldTokenAdapter,
      PendleLpTokenAdapter,
    ],
  },

  [Protocol.PricesV2]: {
    [Chain.Ethereum]: [PricesV2UsdAdapter],
    [Chain.Polygon]: [PricesV2UsdAdapter],
    [Chain.Arbitrum]: [PricesV2UsdAdapter],
    // [Chain.Bsc]: [PricesV2UsdAdapter],
    [Chain.Optimism]: [PricesV2UsdAdapter],
    [Chain.Avalanche]: [PricesV2UsdAdapter],
    [Chain.Base]: [PricesV2UsdAdapter],
  },

  [Protocol.QuickswapV2]: {
    [Chain.Polygon]: [QuickswapV2PoolAdapter],
  },

  [Protocol.Renzo]: {
    [Chain.Ethereum]: [RenzoEzEthAdapter],
    // [Chain.Bsc]: [RenzoEzEthAdapter],
    [Chain.Base]: [RenzoEzEthAdapter],
    [Chain.Arbitrum]: [RenzoEzEthAdapter],
    [Chain.Linea]: [RenzoEzEthAdapter],
  },

  [Protocol.RocketPool]: {
    [Chain.Ethereum]: [RocketPoolRethAdapter],
  },

  [Protocol.Solv]: {
    [Chain.Ethereum]: [SolvSolvBtcAdapter],
    // [Chain.Bsc]: [SolvSolvBtcAdapter, SolvYieldMarketAdapter],
    [Chain.Arbitrum]: [SolvSolvBtcAdapter, SolvYieldMarketAdapter],
    [Chain.Avalanche]: [SolvSolvBtcAdapter],
  },

  [Protocol.Sonne]: {
    [Chain.Optimism]: [SonneSupplyMarketAdapter, SonneBorrowMarketAdapter],
    [Chain.Base]: [SonneSupplyMarketAdapter, SonneBorrowMarketAdapter],
  },

  [Protocol.SparkV1]: {
    [Chain.Ethereum]: [
      SparkV1SpTokenAdapter,
      SparkV1VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.StakeWise]: {
    [Chain.Ethereum]: [StakeWiseOsEthAdapter],
  },

  [Protocol.Stargate]: {
    [Chain.Ethereum]: [
      StargatePoolAdapter,
      StargateVotingEscrowAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    [Chain.Optimism]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    // [Chain.Bsc]: [
    //   StargatePoolAdapter,
    //   StargateFarmAdapter,
    //   StargatePoolV2Adapter,
    //   StargateFarmV2Adapter,
    // ],
    [Chain.Polygon]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    //     [Chain.Fantom]: [StargatePoolAdapter, StargateFarmAdapter],
    [Chain.Base]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    [Chain.Arbitrum]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    [Chain.Avalanche]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
    [Chain.Linea]: [
      StargatePoolAdapter,
      StargateFarmAdapter,
      StargatePoolV2Adapter,
      StargateFarmV2Adapter,
    ],
  },

  [Protocol.SushiswapV2]: {
    [Chain.Ethereum]: [SushiswapV2PoolAdapter],
    // [Chain.Bsc]: [SushiswapV2PoolAdapter],
    [Chain.Polygon]: [SushiswapV2PoolAdapter],
    // [Chain.Fantom]: [SushiswapV2PoolAdapter],
    [Chain.Base]: [SushiswapV2PoolAdapter],
    [Chain.Arbitrum]: [SushiswapV2PoolAdapter],
    [Chain.Avalanche]: [SushiswapV2PoolAdapter],
  },

  [Protocol.Swell]: {
    [Chain.Ethereum]: [SwellSwEthAdapter],
  },

  [Protocol.SyncSwap]: {
    [Chain.Linea]: [SyncSwapPoolAdapter],
  },

  [Protocol.UniswapV2]: {
    [Chain.Ethereum]: [UniswapV2PoolAdapter],
    [Chain.Optimism]: [UniswapV2PoolAdapter],
    // [Chain.Bsc]: [UniswapV2PoolAdapter],
    [Chain.Polygon]: [UniswapV2PoolAdapter],
    [Chain.Base]: [UniswapV2PoolAdapter],
    [Chain.Arbitrum]: [UniswapV2PoolAdapter],
    [Chain.Avalanche]: [UniswapV2PoolAdapter],
  },

  [Protocol.UniswapV3]: {
    [Chain.Ethereum]: [UniswapV3PoolAdapter],
    [Chain.Arbitrum]: [UniswapV3PoolAdapter],
    [Chain.Optimism]: [UniswapV3PoolAdapter],
    [Chain.Polygon]: [UniswapV3PoolAdapter],
    // [Chain.Bsc]: [UniswapV3PoolAdapter],
    [Chain.Base]: [UniswapV3PoolAdapter],
  },

  [Protocol.Xfai]: {
    [Chain.Linea]: [XfaiDexAdapter],
  },

  [Protocol.ZeroLend]: {
    [Chain.Ethereum]: [
      ZeroLendATokenPoolAdapter,
      ZeroLendStableDebtTokenPoolAdapter,
      ZeroLendVariableDebtTokenPoolAdapter,
    ],
    [Chain.Linea]: [
      ZeroLendATokenPoolAdapter,
      ZeroLendStableDebtTokenPoolAdapter,
      ZeroLendVariableDebtTokenPoolAdapter,
    ],
  },
}

export const WriteActionInputs = {
  AaveV3ATokenWriteActionInputs,
  CompoundV2SupplyMarketWriteActionInputs,
  CompoundV2BorrowMarketWriteActionInputs,
  SparkV1SpTokenWriteActionInputs,
  MendiFinanceSupplyMarketWriteActionInputs,
  MendiFinanceBorrowMarketWriteActionInputs,
}

export const GetTransactionParamsSchema = z.union([
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.AaveV3),
      productId: z.literal('a-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('deposit'),
      inputs: WriteActionInputs['AaveV3ATokenWriteActionInputs']['deposit'],
    }),
    z.object({
      protocolId: z.literal(Protocol.AaveV3),
      productId: z.literal('a-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('withdraw'),
      inputs: WriteActionInputs['AaveV3ATokenWriteActionInputs']['withdraw'],
    }),
    z.object({
      protocolId: z.literal(Protocol.AaveV3),
      productId: z.literal('a-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('borrow'),
      inputs: WriteActionInputs['AaveV3ATokenWriteActionInputs']['borrow'],
    }),
    z.object({
      protocolId: z.literal(Protocol.AaveV3),
      productId: z.literal('a-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('repay'),
      inputs: WriteActionInputs['AaveV3ATokenWriteActionInputs']['repay'],
    }),
  ]),
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.CompoundV2),
      productId: z.literal('supply-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('deposit'),
      inputs:
        WriteActionInputs['CompoundV2SupplyMarketWriteActionInputs']['deposit'],
    }),
    z.object({
      protocolId: z.literal(Protocol.CompoundV2),
      productId: z.literal('supply-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('withdraw'),
      inputs:
        WriteActionInputs['CompoundV2SupplyMarketWriteActionInputs'][
          'withdraw'
        ],
    }),
  ]),
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.CompoundV2),
      productId: z.literal('borrow-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('borrow'),
      inputs:
        WriteActionInputs['CompoundV2BorrowMarketWriteActionInputs']['borrow'],
    }),
    z.object({
      protocolId: z.literal(Protocol.CompoundV2),
      productId: z.literal('borrow-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('repay'),
      inputs:
        WriteActionInputs['CompoundV2BorrowMarketWriteActionInputs']['repay'],
    }),
  ]),
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.SparkV1),
      productId: z.literal('sp-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('deposit'),
      inputs: WriteActionInputs['SparkV1SpTokenWriteActionInputs']['deposit'],
    }),
    z.object({
      protocolId: z.literal(Protocol.SparkV1),
      productId: z.literal('sp-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('withdraw'),
      inputs: WriteActionInputs['SparkV1SpTokenWriteActionInputs']['withdraw'],
    }),
    z.object({
      protocolId: z.literal(Protocol.SparkV1),
      productId: z.literal('sp-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('borrow'),
      inputs: WriteActionInputs['SparkV1SpTokenWriteActionInputs']['borrow'],
    }),
    z.object({
      protocolId: z.literal(Protocol.SparkV1),
      productId: z.literal('sp-token'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('repay'),
      inputs: WriteActionInputs['SparkV1SpTokenWriteActionInputs']['repay'],
    }),
  ]),
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.MendiFinance),
      productId: z.literal('supply-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('deposit'),
      inputs:
        WriteActionInputs['MendiFinanceSupplyMarketWriteActionInputs'][
          'deposit'
        ],
    }),
    z.object({
      protocolId: z.literal(Protocol.MendiFinance),
      productId: z.literal('supply-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('withdraw'),
      inputs:
        WriteActionInputs['MendiFinanceSupplyMarketWriteActionInputs'][
          'withdraw'
        ],
    }),
  ]),
  z.discriminatedUnion('action', [
    z.object({
      protocolId: z.literal(Protocol.MendiFinance),
      productId: z.literal('borrow-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('borrow'),
      inputs:
        WriteActionInputs['MendiFinanceBorrowMarketWriteActionInputs'][
          'borrow'
        ],
    }),
    z.object({
      protocolId: z.literal(Protocol.MendiFinance),
      productId: z.literal('borrow-market'),
      chainId: z.nativeEnum(Chain),
      action: z.literal('repay'),
      inputs:
        WriteActionInputs['MendiFinanceBorrowMarketWriteActionInputs']['repay'],
    }),
  ]),
])
export type GetTransactionParams = z.infer<typeof GetTransactionParamsSchema>
