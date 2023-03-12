/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CazzPayOracleInterface extends ethers.utils.Interface {
  functions: {
    "addOwner(address)": FunctionFragment;
    "approvedPriceFeedSigner()": FunctionFragment;
    "getMaxBlockTimestampDelay()": FunctionFragment;
    "getMaxDataTimestampDelay()": FunctionFragment;
    "getPriceOfTokenInCzpWithTokenAddress(address)": FunctionFragment;
    "getPriceOfTokenInCzpWithTokenSymbol(string)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "isSignerAuthorized(address)": FunctionFragment;
    "isTimestampValid(uint256)": FunctionFragment;
    "removeOwner(address)": FunctionFragment;
    "setApprovedPriceFeedSigner(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approvedPriceFeedSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxBlockTimestampDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxDataTimestampDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOfTokenInCzpWithTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOfTokenInCzpWithTokenSymbol",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isSignerAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTimestampValid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "removeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setApprovedPriceFeedSigner",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedPriceFeedSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxBlockTimestampDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxDataTimestampDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOfTokenInCzpWithTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOfTokenInCzpWithTokenSymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSignerAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTimestampValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedPriceFeedSigner",
    data: BytesLike
  ): Result;

  events: {};
}

export class CazzPayOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CazzPayOracleInterface;

  functions: {
    addOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedPriceFeedSigner(overrides?: CallOverrides): Promise<[string]>;

    getMaxBlockTimestampDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxDataTimestampDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriceOfTokenInCzpWithTokenAddress(
      _tokenContractAddr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceOfTokenInCzpWithTokenSymbol(
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isOwner(
      _ownerToVerify: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSignerAuthorized(
      _receivedSigner: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTimestampValid(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeOwner(
      _ownerToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedPriceFeedSigner(
      _newApprovedPriceFeedSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedPriceFeedSigner(overrides?: CallOverrides): Promise<string>;

  getMaxBlockTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxDataTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getPriceOfTokenInCzpWithTokenAddress(
    _tokenContractAddr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceOfTokenInCzpWithTokenSymbol(
    _tokenSymbol: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isOwner(_ownerToVerify: string, overrides?: CallOverrides): Promise<boolean>;

  isSignerAuthorized(
    _receivedSigner: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTimestampValid(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeOwner(
    _ownerToRemove: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedPriceFeedSigner(
    _newApprovedPriceFeedSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    approvedPriceFeedSigner(overrides?: CallOverrides): Promise<string>;

    getMaxBlockTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxDataTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOfTokenInCzpWithTokenAddress(
      _tokenContractAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceOfTokenInCzpWithTokenSymbol(
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      _ownerToVerify: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSignerAuthorized(
      _receivedSigner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTimestampValid(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeOwner(
      _ownerToRemove: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovedPriceFeedSigner(
      _newApprovedPriceFeedSigner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedPriceFeedSigner(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxBlockTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxDataTimestampDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOfTokenInCzpWithTokenAddress(
      _tokenContractAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceOfTokenInCzpWithTokenSymbol(
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      _ownerToVerify: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSignerAuthorized(
      _receivedSigner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTimestampValid(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeOwner(
      _ownerToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedPriceFeedSigner(
      _newApprovedPriceFeedSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedPriceFeedSigner(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxBlockTimestampDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxDataTimestampDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceOfTokenInCzpWithTokenAddress(
      _tokenContractAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceOfTokenInCzpWithTokenSymbol(
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      _ownerToVerify: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSignerAuthorized(
      _receivedSigner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTimestampValid(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeOwner(
      _ownerToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedPriceFeedSigner(
      _newApprovedPriceFeedSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
