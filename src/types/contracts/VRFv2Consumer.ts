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
} from "../common";

export interface VRFv2ConsumerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "chooseWiner"
      | "data"
      | "getRequestStatus"
      | "lastRequestId"
      | "listAdd"
      | "manager"
      | "owner"
      | "payTicket"
      | "rawFulfillRandomWords"
      | "requestIds"
      | "requestRandomWords"
      | "result"
      | "s_requests"
      | "transferOwnership"
      | "winner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "RequestFulfilled"
      | "RequestSent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "chooseWiner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "data", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getRequestStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listAdd",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payTicket", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requestIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "result", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "s_requests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "winner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chooseWiner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequestStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "result", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "s_requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestFulfilledEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    randomWords: BigNumberish[]
  ];
  export type OutputTuple = [requestId: bigint, randomWords: bigint[]];
  export interface OutputObject {
    requestId: bigint;
    randomWords: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestSentEvent {
  export type InputTuple = [requestId: BigNumberish, numWords: BigNumberish];
  export type OutputTuple = [requestId: bigint, numWords: bigint];
  export interface OutputObject {
    requestId: bigint;
    numWords: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VRFv2Consumer extends BaseContract {
  connect(runner?: ContractRunner | null): VRFv2Consumer;
  waitForDeployment(): Promise<this>;

  interface: VRFv2ConsumerInterface;

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

  chooseWiner: TypedContractMethod<[], [void], "nonpayable">;

  data: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { start: bigint; end: bigint }],
    "view"
  >;

  getRequestStatus: TypedContractMethod<
    [_requestId: BigNumberish],
    [[boolean, bigint[]] & { fulfilled: boolean; randomWords: bigint[] }],
    "view"
  >;

  lastRequestId: TypedContractMethod<[], [bigint], "view">;

  listAdd: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  manager: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  payTicket: TypedContractMethod<[], [void], "payable">;

  rawFulfillRandomWords: TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  requestIds: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  requestRandomWords: TypedContractMethod<[], [bigint], "nonpayable">;

  result: TypedContractMethod<[], [bigint], "view">;

  s_requests: TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { fulfilled: boolean; exists: boolean }],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  winner: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "chooseWiner"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "data"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { start: bigint; end: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRequestStatus"
  ): TypedContractMethod<
    [_requestId: BigNumberish],
    [[boolean, bigint[]] & { fulfilled: boolean; randomWords: bigint[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "lastRequestId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "listAdd"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payTicket"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "rawFulfillRandomWords"
  ): TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestIds"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "requestRandomWords"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "result"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "s_requests"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { fulfilled: boolean; exists: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "winner"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RequestFulfilled"
  ): TypedContractEvent<
    RequestFulfilledEvent.InputTuple,
    RequestFulfilledEvent.OutputTuple,
    RequestFulfilledEvent.OutputObject
  >;
  getEvent(
    key: "RequestSent"
  ): TypedContractEvent<
    RequestSentEvent.InputTuple,
    RequestSentEvent.OutputTuple,
    RequestSentEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
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

    "RequestFulfilled(uint256,uint256[])": TypedContractEvent<
      RequestFulfilledEvent.InputTuple,
      RequestFulfilledEvent.OutputTuple,
      RequestFulfilledEvent.OutputObject
    >;
    RequestFulfilled: TypedContractEvent<
      RequestFulfilledEvent.InputTuple,
      RequestFulfilledEvent.OutputTuple,
      RequestFulfilledEvent.OutputObject
    >;

    "RequestSent(uint256,uint32)": TypedContractEvent<
      RequestSentEvent.InputTuple,
      RequestSentEvent.OutputTuple,
      RequestSentEvent.OutputObject
    >;
    RequestSent: TypedContractEvent<
      RequestSentEvent.InputTuple,
      RequestSentEvent.OutputTuple,
      RequestSentEvent.OutputObject
    >;
  };
}
