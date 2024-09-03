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

export declare namespace IOpenFundRedemptionConcrete {
  export type RedeemInfoStruct = {
    poolId: BytesLike;
    currency: AddressLike;
    createTime: BigNumberish;
    nav: BigNumberish;
  };

  export type RedeemInfoStructOutput = [
    poolId: string,
    currency: string,
    createTime: bigint,
    nav: bigint
  ] & { poolId: string; currency: string; createTime: bigint; nav: bigint };
}

export interface OpenFundRedemptionConcreteInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdmin"
      | "admin"
      | "allocatedCurrencyBalance"
      | "burnOnlyDelegate"
      | "claimOnlyDelegate"
      | "claimableValue"
      | "createSlotOnlyDelegate"
      | "delegate"
      | "getRedeemInfo"
      | "getRedeemNav"
      | "initialize"
      | "isSlotValid"
      | "mintOnlyDelegate(uint256,uint256,uint256)"
      | "mintOnlyDelegate(address,address,address,uint256,uint256,uint256)"
      | "pendingAdmin"
      | "repayOnlyDelegate"
      | "repayWithBalanceOnlyDelegate"
      | "setDelegate"
      | "setPendingAdmin"
      | "setRedeemNavOnlyDelegate"
      | "slotCurrencyBalance"
      | "slotInitialValue"
      | "slotRepaidCurrencyAmount"
      | "slotTotalValue"
      | "transferOnlyDelegate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "NewAdmin"
      | "NewDelegate"
      | "NewPendingAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allocatedCurrencyBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burnOnlyDelegate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimOnlyDelegate",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSlotOnlyDelegate",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "delegate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRedeemInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemNav",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSlotValid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOnlyDelegate(uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOnlyDelegate(address,address,address,uint256,uint256,uint256)",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayOnlyDelegate",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayWithBalanceOnlyDelegate",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelegate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRedeemNavOnlyDelegate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slotCurrencyBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slotInitialValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slotRepaidCurrencyAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slotTotalValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOnlyDelegate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocatedCurrencyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSlotOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemNav",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSlotValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintOnlyDelegate(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintOnlyDelegate(address,address,address,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayWithBalanceOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRedeemNavOnlyDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slotCurrencyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slotInitialValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slotRepaidCurrencyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slotTotalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOnlyDelegate",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewAdminEvent {
  export type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [oldAdmin: string, newAdmin: string];
  export interface OutputObject {
    oldAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewDelegateEvent {
  export type InputTuple = [old_: AddressLike, new_: AddressLike];
  export type OutputTuple = [old_: string, new_: string];
  export interface OutputObject {
    old_: string;
    new_: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewPendingAdminEvent {
  export type InputTuple = [
    oldPendingAdmin: AddressLike,
    newPendingAdmin: AddressLike
  ];
  export type OutputTuple = [oldPendingAdmin: string, newPendingAdmin: string];
  export interface OutputObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OpenFundRedemptionConcrete extends BaseContract {
  connect(runner?: ContractRunner | null): OpenFundRedemptionConcrete;
  waitForDeployment(): Promise<this>;

  interface: OpenFundRedemptionConcreteInterface;

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

  acceptAdmin: TypedContractMethod<[], [void], "nonpayable">;

  admin: TypedContractMethod<[], [string], "view">;

  allocatedCurrencyBalance: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  burnOnlyDelegate: TypedContractMethod<
    [tokenId_: BigNumberish, burnValue_: BigNumberish],
    [void],
    "nonpayable"
  >;

  claimOnlyDelegate: TypedContractMethod<
    [
      tokenId_: BigNumberish,
      slot_: BigNumberish,
      currency_: AddressLike,
      claimValue_: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  claimableValue: TypedContractMethod<
    [tokenId_: BigNumberish],
    [bigint],
    "view"
  >;

  createSlotOnlyDelegate: TypedContractMethod<
    [txSender_: AddressLike, inputSlotInfo_: BytesLike],
    [bigint],
    "nonpayable"
  >;

  delegate: TypedContractMethod<[], [string], "view">;

  getRedeemInfo: TypedContractMethod<
    [slot_: BigNumberish],
    [IOpenFundRedemptionConcrete.RedeemInfoStructOutput],
    "view"
  >;

  getRedeemNav: TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  isSlotValid: TypedContractMethod<[slot_: BigNumberish], [boolean], "view">;

  "mintOnlyDelegate(uint256,uint256,uint256)": TypedContractMethod<
    [arg0: BigNumberish, slot_: BigNumberish, mintValue_: BigNumberish],
    [void],
    "nonpayable"
  >;

  "mintOnlyDelegate(address,address,address,uint256,uint256,uint256)": TypedContractMethod<
    [
      txSender_: AddressLike,
      currency_: AddressLike,
      mintTo_: AddressLike,
      slot_: BigNumberish,
      tokenId_: BigNumberish,
      amount_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  repayOnlyDelegate: TypedContractMethod<
    [
      txSender_: AddressLike,
      slot_: BigNumberish,
      currency_: AddressLike,
      repayCurrencyAmount_: BigNumberish
    ],
    [void],
    "payable"
  >;

  repayWithBalanceOnlyDelegate: TypedContractMethod<
    [
      txSender_: AddressLike,
      slot_: BigNumberish,
      currency_: AddressLike,
      repayCurrencyAmount_: BigNumberish
    ],
    [void],
    "payable"
  >;

  setDelegate: TypedContractMethod<
    [newDelegate_: AddressLike],
    [void],
    "nonpayable"
  >;

  setPendingAdmin: TypedContractMethod<
    [newPendingAdmin_: AddressLike],
    [void],
    "nonpayable"
  >;

  setRedeemNavOnlyDelegate: TypedContractMethod<
    [slot_: BigNumberish, nav_: BigNumberish],
    [void],
    "nonpayable"
  >;

  slotCurrencyBalance: TypedContractMethod<
    [slot_: BigNumberish],
    [bigint],
    "view"
  >;

  slotInitialValue: TypedContractMethod<
    [slot_: BigNumberish],
    [bigint],
    "view"
  >;

  slotRepaidCurrencyAmount: TypedContractMethod<
    [slot_: BigNumberish],
    [bigint],
    "view"
  >;

  slotTotalValue: TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;

  transferOnlyDelegate: TypedContractMethod<
    [
      fromTokenId_: BigNumberish,
      toTokenId_: BigNumberish,
      fromTokenBalance_: BigNumberish,
      transferValue_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allocatedCurrencyBalance"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burnOnlyDelegate"
  ): TypedContractMethod<
    [tokenId_: BigNumberish, burnValue_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimOnlyDelegate"
  ): TypedContractMethod<
    [
      tokenId_: BigNumberish,
      slot_: BigNumberish,
      currency_: AddressLike,
      claimValue_: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimableValue"
  ): TypedContractMethod<[tokenId_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "createSlotOnlyDelegate"
  ): TypedContractMethod<
    [txSender_: AddressLike, inputSlotInfo_: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delegate"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRedeemInfo"
  ): TypedContractMethod<
    [slot_: BigNumberish],
    [IOpenFundRedemptionConcrete.RedeemInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRedeemNav"
  ): TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isSlotValid"
  ): TypedContractMethod<[slot_: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "mintOnlyDelegate(uint256,uint256,uint256)"
  ): TypedContractMethod<
    [arg0: BigNumberish, slot_: BigNumberish, mintValue_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintOnlyDelegate(address,address,address,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      txSender_: AddressLike,
      currency_: AddressLike,
      mintTo_: AddressLike,
      slot_: BigNumberish,
      tokenId_: BigNumberish,
      amount_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pendingAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "repayOnlyDelegate"
  ): TypedContractMethod<
    [
      txSender_: AddressLike,
      slot_: BigNumberish,
      currency_: AddressLike,
      repayCurrencyAmount_: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "repayWithBalanceOnlyDelegate"
  ): TypedContractMethod<
    [
      txSender_: AddressLike,
      slot_: BigNumberish,
      currency_: AddressLike,
      repayCurrencyAmount_: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setDelegate"
  ): TypedContractMethod<[newDelegate_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[newPendingAdmin_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRedeemNavOnlyDelegate"
  ): TypedContractMethod<
    [slot_: BigNumberish, nav_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "slotCurrencyBalance"
  ): TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "slotInitialValue"
  ): TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "slotRepaidCurrencyAmount"
  ): TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "slotTotalValue"
  ): TypedContractMethod<[slot_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOnlyDelegate"
  ): TypedContractMethod<
    [
      fromTokenId_: BigNumberish,
      toTokenId_: BigNumberish,
      fromTokenBalance_: BigNumberish,
      transferValue_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "NewAdmin"
  ): TypedContractEvent<
    NewAdminEvent.InputTuple,
    NewAdminEvent.OutputTuple,
    NewAdminEvent.OutputObject
  >;
  getEvent(
    key: "NewDelegate"
  ): TypedContractEvent<
    NewDelegateEvent.InputTuple,
    NewDelegateEvent.OutputTuple,
    NewDelegateEvent.OutputObject
  >;
  getEvent(
    key: "NewPendingAdmin"
  ): TypedContractEvent<
    NewPendingAdminEvent.InputTuple,
    NewPendingAdminEvent.OutputTuple,
    NewPendingAdminEvent.OutputObject
  >;

  filters: {
    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "NewAdmin(address,address)": TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;
    NewAdmin: TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;

    "NewDelegate(address,address)": TypedContractEvent<
      NewDelegateEvent.InputTuple,
      NewDelegateEvent.OutputTuple,
      NewDelegateEvent.OutputObject
    >;
    NewDelegate: TypedContractEvent<
      NewDelegateEvent.InputTuple,
      NewDelegateEvent.OutputTuple,
      NewDelegateEvent.OutputObject
    >;

    "NewPendingAdmin(address,address)": TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;
    NewPendingAdmin: TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;
  };
}