/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  EthenaLpStaking,
  EthenaLpStakingInterface,
} from "../EthenaLpStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CantRenounceOwnership",
    type: "error",
  },
  {
    inputs: [],
    name: "CooldownNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEpoch",
    type: "error",
  },
  {
    inputs: [],
    name: "InvariantBroken",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxCooldownExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "StakeLimitExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "newEpoch",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "previousEpoch",
        type: "uint8",
      },
    ],
    name: "NewEpoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "epoch",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint248",
        name: "stakeLimit",
        type: "uint248",
      },
      {
        indexed: false,
        internalType: "uint104",
        name: "cooldown",
        type: "uint104",
      },
    ],
    name: "StakeParametersUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensRescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentEpoch",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "newEpoch",
        type: "uint8",
      },
    ],
    name: "setEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint104",
        name: "amount",
        type: "uint104",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakeParametersByToken",
    outputs: [
      {
        internalType: "uint8",
        name: "epoch",
        type: "uint8",
      },
      {
        internalType: "uint248",
        name: "stakeLimit",
        type: "uint248",
      },
      {
        internalType: "uint104",
        name: "totalStaked",
        type: "uint104",
      },
      {
        internalType: "uint104",
        name: "totalCoolingDown",
        type: "uint104",
      },
      {
        internalType: "uint48",
        name: "cooldown",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "stakedAmount",
        type: "uint256",
      },
      {
        internalType: "uint152",
        name: "coolingDownAmount",
        type: "uint152",
      },
      {
        internalType: "uint104",
        name: "cooldownStartTimestamp",
        type: "uint104",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint104",
        name: "amount",
        type: "uint104",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "epoch",
        type: "uint8",
      },
      {
        internalType: "uint248",
        name: "stakeLimit",
        type: "uint248",
      },
      {
        internalType: "uint48",
        name: "cooldown",
        type: "uint48",
      },
    ],
    name: "updateStakeParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint104",
        name: "amount",
        type: "uint104",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class EthenaLpStaking__factory {
  static readonly abi = _abi;
  static createInterface(): EthenaLpStakingInterface {
    return new Interface(_abi) as EthenaLpStakingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EthenaLpStaking {
    return new Contract(address, _abi, runner) as unknown as EthenaLpStaking;
  }
}
