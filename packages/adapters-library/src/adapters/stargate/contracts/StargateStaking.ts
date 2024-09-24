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

export interface StargateStakingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "balanceOf"
      | "claim"
      | "deposit"
      | "depositTo"
      | "emergencyWithdraw"
      | "isPool"
      | "owner"
      | "renounceOwnership"
      | "rewarder"
      | "setPool"
      | "tokens(uint256,uint256)"
      | "tokens()"
      | "tokensLength"
      | "totalSupply"
      | "transferOwnership"
      | "withdraw"
      | "withdrawToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposit"
      | "OwnershipTransferred"
      | "PoolSet"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isPool", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPool",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokens()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToAndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokens(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToAndCall",
    data: BytesLike
  ): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    from: string,
    to: string,
    amount: bigint
  ];
  export interface OutputObject {
    token: string;
    from: string;
    to: string;
    amount: bigint;
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

export namespace PoolSetEvent {
  export type InputTuple = [
    token: AddressLike,
    rewarder: AddressLike,
    exists: boolean
  ];
  export type OutputTuple = [token: string, rewarder: string, exists: boolean];
  export interface OutputObject {
    token: string;
    rewarder: string;
    exists: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    withUpdate: boolean
  ];
  export type OutputTuple = [
    token: string,
    from: string,
    to: string,
    amount: bigint,
    withUpdate: boolean
  ];
  export interface OutputObject {
    token: string;
    from: string;
    to: string;
    amount: bigint;
    withUpdate: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface StargateStaking extends BaseContract {
  connect(runner?: ContractRunner | null): StargateStaking;
  waitForDeployment(): Promise<this>;

  interface: StargateStakingInterface;

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

  balanceOf: TypedContractMethod<
    [token: AddressLike, user: AddressLike],
    [bigint],
    "view"
  >;

  claim: TypedContractMethod<[lpTokens: AddressLike[]], [void], "nonpayable">;

  deposit: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  depositTo: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  emergencyWithdraw: TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  isPool: TypedContractMethod<[token: AddressLike], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "view">;

  rewarder: TypedContractMethod<[token: AddressLike], [string], "view">;

  setPool: TypedContractMethod<
    [token: AddressLike, newRewarder: AddressLike],
    [void],
    "nonpayable"
  >;

  "tokens(uint256,uint256)": TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [string[]],
    "view"
  >;

  "tokens()": TypedContractMethod<[], [string[]], "view">;

  tokensLength: TypedContractMethod<[], [bigint], "view">;

  totalSupply: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawToAndCall: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [token: AddressLike, user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[lpTokens: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositTo"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isPool"
  ): TypedContractMethod<[token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "view">;
  getFunction(
    nameOrSignature: "rewarder"
  ): TypedContractMethod<[token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "setPool"
  ): TypedContractMethod<
    [token: AddressLike, newRewarder: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tokens(uint256,uint256)"
  ): TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokens()"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "tokensLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawToAndCall"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PoolSet"
  ): TypedContractEvent<
    PoolSetEvent.InputTuple,
    PoolSetEvent.OutputTuple,
    PoolSetEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,address,address,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
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

    "PoolSet(address,address,bool)": TypedContractEvent<
      PoolSetEvent.InputTuple,
      PoolSetEvent.OutputTuple,
      PoolSetEvent.OutputObject
    >;
    PoolSet: TypedContractEvent<
      PoolSetEvent.InputTuple,
      PoolSetEvent.OutputTuple,
      PoolSetEvent.OutputObject
    >;

    "Withdraw(address,address,address,uint256,bool)": TypedContractEvent<
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
