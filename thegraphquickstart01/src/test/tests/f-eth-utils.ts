import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  MinterAdded,
  MinterRemoved,
  Paused,
  PauserAdded,
  PauserRemoved,
  Transfer,
  Unpaused
} from "../generated/fETH/fETH"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createMinterAddedEvent(account: Address): MinterAdded {
  let minterAddedEvent = changetype<MinterAdded>(newMockEvent())

  minterAddedEvent.parameters = new Array()

  minterAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return minterAddedEvent
}

export function createMinterRemovedEvent(account: Address): MinterRemoved {
  let minterRemovedEvent = changetype<MinterRemoved>(newMockEvent())

  minterRemovedEvent.parameters = new Array()

  minterRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return minterRemovedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPauserAddedEvent(account: Address): PauserAdded {
  let pauserAddedEvent = changetype<PauserAdded>(newMockEvent())

  pauserAddedEvent.parameters = new Array()

  pauserAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pauserAddedEvent
}

export function createPauserRemovedEvent(account: Address): PauserRemoved {
  let pauserRemovedEvent = changetype<PauserRemoved>(newMockEvent())

  pauserRemovedEvent.parameters = new Array()

  pauserRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pauserRemovedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
