/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface EthenaLpStakingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "currentEpoch"
      | "owner"
      | "pendingOwner"
      | "renounceOwnership"
      | "rescueTokens"
      | "setEpoch"
      | "stake"
      | "stakeParametersByToken"
      | "stakes"
      | "transferOwnership"
      | "unstake"
      | "updateStakeParameters"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "NewEpoch"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "Stake"
      | "StakeParametersUpdated"
      | "TokensRescued"
      | "Unstake"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueTokens",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeParametersByToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakes",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStakeParameters",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEpoch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeParametersByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStakeParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace NewEpochEvent {
  export type InputTuple = [
    newEpoch: BigNumberish,
    previousEpoch: BigNumberish
  ];
  export type OutputTuple = [newEpoch: bigint, previousEpoch: bigint];
  export interface OutputObject {
    newEpoch: bigint;
    previousEpoch: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeEvent {
  export type InputTuple = [
    user: AddressLike,
    lpToken: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, lpToken: string, amount: bigint];
  export interface OutputObject {
    user: string;
    lpToken: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeParametersUpdatedEvent {
  export type InputTuple = [
    lpToken: AddressLike,
    epoch: BigNumberish,
    stakeLimit: BigNumberish,
    cooldown: BigNumberish
  ];
  export type OutputTuple = [
    lpToken: string,
    epoch: bigint,
    stakeLimit: bigint,
    cooldown: bigint
  ];
  export interface OutputObject {
    lpToken: string;
    epoch: bigint;
    stakeLimit: bigint;
    cooldown: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensRescuedEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, amount: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnstakeEvent {
  export type InputTuple = [
    user: AddressLike,
    lpToken: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, lpToken: string, amount: bigint];
  export interface OutputObject {
    user: string;
    lpToken: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    lpToken: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, lpToken: string, amount: bigint];
  export interface OutputObject {
    user: string;
    lpToken: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EthenaLpStaking extends BaseContract {
  connect(runner?: ContractRunner | null): EthenaLpStaking;
  waitForDeployment(): Promise<this>;

  interface: EthenaLpStakingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  currentEpoch: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "view">;

  rescueTokens: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setEpoch: TypedContractMethod<[newEpoch: BigNumberish], [void], "nonpayable">;

  stake: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakeParametersByToken: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        epoch: bigint;
        stakeLimit: bigint;
        totalStaked: bigint;
        totalCoolingDown: bigint;
        cooldown: bigint;
      }
    ],
    "view"
  >;

  stakes: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint] & {
        stakedAmount: bigint;
        coolingDownAmount: bigint;
        cooldownStartTimestamp: bigint;
      }
    ],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unstake: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateStakeParameters: TypedContractMethod<
    [
      token: AddressLike,
      epoch: BigNumberish,
      stakeLimit: BigNumberish,
      cooldown: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "view">;
  getFunction(
    nameOrSignature: "rescueTokens"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEpoch"
  ): TypedContractMethod<[newEpoch: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeParametersByToken"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        epoch: bigint;
        stakeLimit: bigint;
        totalStaked: bigint;
        totalCoolingDown: bigint;
        cooldown: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint] & {
        stakedAmount: bigint;
        coolingDownAmount: bigint;
        cooldownStartTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateStakeParameters"
  ): TypedContractMethod<
    [
      token: AddressLike,
      epoch: BigNumberish,
      stakeLimit: BigNumberish,
      cooldown: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "NewEpoch"
  ): TypedContractEvent<
    NewEpochEvent.InputTuple,
    NewEpochEvent.OutputTuple,
    NewEpochEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Stake"
  ): TypedContractEvent<
    StakeEvent.InputTuple,
    StakeEvent.OutputTuple,
    StakeEvent.OutputObject
  >;
  getEvent(
    key: "StakeParametersUpdated"
  ): TypedContractEvent<
    StakeParametersUpdatedEvent.InputTuple,
    StakeParametersUpdatedEvent.OutputTuple,
    StakeParametersUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TokensRescued"
  ): TypedContractEvent<
    TokensRescuedEvent.InputTuple,
    TokensRescuedEvent.OutputTuple,
    TokensRescuedEvent.OutputObject
  >;
  getEvent(
    key: "Unstake"
  ): TypedContractEvent<
    UnstakeEvent.InputTuple,
    UnstakeEvent.OutputTuple,
    UnstakeEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "NewEpoch(uint8,uint8)": TypedContractEvent<
      NewEpochEvent.InputTuple,
      NewEpochEvent.OutputTuple,
      NewEpochEvent.OutputObject
    >;
    NewEpoch: TypedContractEvent<
      NewEpochEvent.InputTuple,
      NewEpochEvent.OutputTuple,
      NewEpochEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Stake(address,address,uint256)": TypedContractEvent<
      StakeEvent.InputTuple,
      StakeEvent.OutputTuple,
      StakeEvent.OutputObject
    >;
    Stake: TypedContractEvent<
      StakeEvent.InputTuple,
      StakeEvent.OutputTuple,
      StakeEvent.OutputObject
    >;

    "StakeParametersUpdated(address,uint8,uint248,uint104)": TypedContractEvent<
      StakeParametersUpdatedEvent.InputTuple,
      StakeParametersUpdatedEvent.OutputTuple,
      StakeParametersUpdatedEvent.OutputObject
    >;
    StakeParametersUpdated: TypedContractEvent<
      StakeParametersUpdatedEvent.InputTuple,
      StakeParametersUpdatedEvent.OutputTuple,
      StakeParametersUpdatedEvent.OutputObject
    >;

    "TokensRescued(address,address,uint256)": TypedContractEvent<
      TokensRescuedEvent.InputTuple,
      TokensRescuedEvent.OutputTuple,
      TokensRescuedEvent.OutputObject
    >;
    TokensRescued: TypedContractEvent<
      TokensRescuedEvent.InputTuple,
      TokensRescuedEvent.OutputTuple,
      TokensRescuedEvent.OutputObject
    >;

    "Unstake(address,address,uint256)": TypedContractEvent<
      UnstakeEvent.InputTuple,
      UnstakeEvent.OutputTuple,
      UnstakeEvent.OutputObject
    >;
    Unstake: TypedContractEvent<
      UnstakeEvent.InputTuple,
      UnstakeEvent.OutputTuple,
      UnstakeEvent.OutputObject
    >;

    "Withdraw(address,address,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
