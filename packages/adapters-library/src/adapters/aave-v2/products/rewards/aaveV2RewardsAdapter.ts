import { getAddress } from 'ethers'
import { AdaptersController } from '../../../../core/adaptersController'
import { Chain } from '../../../../core/constants/chains'
import { CacheToDb } from '../../../../core/decorators/cacheToDb'
import { NotImplementedError } from '../../../../core/errors/errors'
import { CustomJsonRpcProvider } from '../../../../core/provider/CustomJsonRpcProvider'
import { Helpers } from '../../../../scripts/helpers'
import {
  IProtocolAdapter,
  ProtocolToken,
} from '../../../../types/IProtocolAdapter'
import {
  GetEventsInput,
  GetPositionsInput,
  GetTotalValueLockedInput,
  MovementsByBlock,
  PositionType,
  ProtocolAdapterParams,
  ProtocolDetails,
  ProtocolPosition,
  ProtocolTokenTvl,
  TokenType,
  UnwrapExchangeRate,
  UnwrapInput,
} from '../../../../types/adapter'
import { AAVE_ICON_URL } from '../../../aave-v3/products/rewards/aaveV3RewardsAdapter'
import { Protocol } from '../../../protocols'
import { StakedTokenIncentivesController__factory } from '../../contracts'

export class AaveV2RewardsAdapter implements IProtocolAdapter {
  productId = 'rewards'
  protocolId: Protocol
  chainId: Chain
  helpers: Helpers

  adapterSettings = {
    enablePositionDetectionByProtocolTokenTransfer: false,
    includeInUnwrap: false,
  }

  private provider: CustomJsonRpcProvider

  adaptersController: AdaptersController

  constructor({
    provider,
    chainId,
    protocolId,
    adaptersController,
    helpers,
  }: ProtocolAdapterParams) {
    this.provider = provider
    this.chainId = chainId
    this.protocolId = protocolId
    this.adaptersController = adaptersController
    this.helpers = helpers
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'Aave v2 Reward',
      description: 'Aave v2 defi adapter for rewards',
      siteUrl: 'https://aave.com/',
      iconUrl: AAVE_ICON_URL,
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToDb
  async getProtocolTokens(): Promise<ProtocolToken[]> {
    const stakedTokensIncentiveControllerAddress = getAddress(
      '0xd784927ff2f95ba542bfc824c8a8a98f3495f6b5',
    )

    const stakedTokensIncentiveController =
      StakedTokenIncentivesController__factory.connect(
        stakedTokensIncentiveControllerAddress,
        this.provider,
      )

    const rewardTokenAddress =
      await stakedTokensIncentiveController.REWARD_TOKEN()

    const rewardToken = await this.helpers.getTokenMetadata(rewardTokenAddress)

    return [
      {
        ...rewardToken,
        name: 'Aave v2 Rewards',
        symbol: 'Rewards',
        address: stakedTokensIncentiveControllerAddress,
        underlyingTokens: [rewardToken],
      },
    ]
  }

  async getPositions({
    userAddress,
    blockNumber,
    protocolTokenAddresses,
  }: GetPositionsInput): Promise<ProtocolPosition[]> {
    const { underlyingTokens, ...protocolToken } = (
      await this.getProtocolTokens()
    )[0]!

    if (
      protocolTokenAddresses &&
      !protocolTokenAddresses.includes(protocolToken.address)
    ) {
      return []
    }

    const stakedTokensIncentiveController =
      StakedTokenIncentivesController__factory.connect(
        protocolToken.address,
        this.provider,
      )

    const rewardAmount =
      await stakedTokensIncentiveController.getUserUnclaimedRewards(
        userAddress,
        { blockTag: blockNumber },
      )

    return [
      {
        ...protocolToken,
        type: TokenType.Protocol,
        balanceRaw: rewardAmount,
        tokens: [
          {
            ...underlyingTokens[0]!,
            type: TokenType.UnderlyingClaimable,
            balanceRaw: rewardAmount,
          },
        ],
      },
    ]
  }

  async getWithdrawals({
    protocolTokenAddress,
    fromBlock,
    toBlock,
    userAddress,
  }: GetEventsInput): Promise<MovementsByBlock[]> {
    throw new NotImplementedError()
  }

  async getDeposits({
    protocolTokenAddress,
    fromBlock,
    toBlock,
    userAddress,
  }: GetEventsInput): Promise<MovementsByBlock[]> {
    throw new NotImplementedError()
  }

  async getTotalValueLocked({
    protocolTokenAddresses,
    blockNumber,
  }: GetTotalValueLockedInput): Promise<ProtocolTokenTvl[]> {
    throw new NotImplementedError()
  }

  async unwrap({
    protocolTokenAddress,
    tokenId,
    blockNumber,
  }: UnwrapInput): Promise<UnwrapExchangeRate> {
    throw new NotImplementedError()
  }
}
