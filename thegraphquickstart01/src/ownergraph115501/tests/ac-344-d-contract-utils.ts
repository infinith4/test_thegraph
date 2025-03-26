import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  ClaimConditionsUpdated,
  ContractURIUpdated,
  DefaultRoyalty,
  Initialized,
  MaxTotalSupplyUpdated,
  OperatorRestriction,
  OwnerUpdated,
  PlatformFeeInfoUpdated,
  PrimarySaleRecipientUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RoyaltyForToken,
  SaleRecipientForTokenUpdated,
  TokensClaimed,
  TokensLazyMinted,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/ac344dContract/ac344dContract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createClaimConditionsUpdatedEvent(
  tokenId: BigInt,
  claimConditions: Array<ethereum.Tuple>,
  resetEligibility: boolean
): ClaimConditionsUpdated {
  let claimConditionsUpdatedEvent = changetype<ClaimConditionsUpdated>(
    newMockEvent()
  )

  claimConditionsUpdatedEvent.parameters = new Array()

  claimConditionsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  claimConditionsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "claimConditions",
      ethereum.Value.fromTupleArray(claimConditions)
    )
  )
  claimConditionsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "resetEligibility",
      ethereum.Value.fromBoolean(resetEligibility)
    )
  )

  return claimConditionsUpdatedEvent
}

export function createContractURIUpdatedEvent(
  prevURI: string,
  newURI: string
): ContractURIUpdated {
  let contractUriUpdatedEvent = changetype<ContractURIUpdated>(newMockEvent())

  contractUriUpdatedEvent.parameters = new Array()

  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("prevURI", ethereum.Value.fromString(prevURI))
  )
  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("newURI", ethereum.Value.fromString(newURI))
  )

  return contractUriUpdatedEvent
}

export function createDefaultRoyaltyEvent(
  newRoyaltyRecipient: Address,
  newRoyaltyBps: BigInt
): DefaultRoyalty {
  let defaultRoyaltyEvent = changetype<DefaultRoyalty>(newMockEvent())

  defaultRoyaltyEvent.parameters = new Array()

  defaultRoyaltyEvent.parameters.push(
    new ethereum.EventParam(
      "newRoyaltyRecipient",
      ethereum.Value.fromAddress(newRoyaltyRecipient)
    )
  )
  defaultRoyaltyEvent.parameters.push(
    new ethereum.EventParam(
      "newRoyaltyBps",
      ethereum.Value.fromUnsignedBigInt(newRoyaltyBps)
    )
  )

  return defaultRoyaltyEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMaxTotalSupplyUpdatedEvent(
  tokenId: BigInt,
  maxTotalSupply: BigInt
): MaxTotalSupplyUpdated {
  let maxTotalSupplyUpdatedEvent = changetype<MaxTotalSupplyUpdated>(
    newMockEvent()
  )

  maxTotalSupplyUpdatedEvent.parameters = new Array()

  maxTotalSupplyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  maxTotalSupplyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxTotalSupply",
      ethereum.Value.fromUnsignedBigInt(maxTotalSupply)
    )
  )

  return maxTotalSupplyUpdatedEvent
}

export function createOperatorRestrictionEvent(
  restriction: boolean
): OperatorRestriction {
  let operatorRestrictionEvent = changetype<OperatorRestriction>(newMockEvent())

  operatorRestrictionEvent.parameters = new Array()

  operatorRestrictionEvent.parameters.push(
    new ethereum.EventParam(
      "restriction",
      ethereum.Value.fromBoolean(restriction)
    )
  )

  return operatorRestrictionEvent
}

export function createOwnerUpdatedEvent(
  prevOwner: Address,
  newOwner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("prevOwner", ethereum.Value.fromAddress(prevOwner))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createPlatformFeeInfoUpdatedEvent(
  platformFeeRecipient: Address,
  platformFeeBps: BigInt
): PlatformFeeInfoUpdated {
  let platformFeeInfoUpdatedEvent = changetype<PlatformFeeInfoUpdated>(
    newMockEvent()
  )

  platformFeeInfoUpdatedEvent.parameters = new Array()

  platformFeeInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFeeRecipient",
      ethereum.Value.fromAddress(platformFeeRecipient)
    )
  )
  platformFeeInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFeeBps",
      ethereum.Value.fromUnsignedBigInt(platformFeeBps)
    )
  )

  return platformFeeInfoUpdatedEvent
}

export function createPrimarySaleRecipientUpdatedEvent(
  recipient: Address
): PrimarySaleRecipientUpdated {
  let primarySaleRecipientUpdatedEvent =
    changetype<PrimarySaleRecipientUpdated>(newMockEvent())

  primarySaleRecipientUpdatedEvent.parameters = new Array()

  primarySaleRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return primarySaleRecipientUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRoyaltyForTokenEvent(
  tokenId: BigInt,
  royaltyRecipient: Address,
  royaltyBps: BigInt
): RoyaltyForToken {
  let royaltyForTokenEvent = changetype<RoyaltyForToken>(newMockEvent())

  royaltyForTokenEvent.parameters = new Array()

  royaltyForTokenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  royaltyForTokenEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyRecipient",
      ethereum.Value.fromAddress(royaltyRecipient)
    )
  )
  royaltyForTokenEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyBps",
      ethereum.Value.fromUnsignedBigInt(royaltyBps)
    )
  )

  return royaltyForTokenEvent
}

export function createSaleRecipientForTokenUpdatedEvent(
  tokenId: BigInt,
  saleRecipient: Address
): SaleRecipientForTokenUpdated {
  let saleRecipientForTokenUpdatedEvent =
    changetype<SaleRecipientForTokenUpdated>(newMockEvent())

  saleRecipientForTokenUpdatedEvent.parameters = new Array()

  saleRecipientForTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  saleRecipientForTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "saleRecipient",
      ethereum.Value.fromAddress(saleRecipient)
    )
  )

  return saleRecipientForTokenUpdatedEvent
}

export function createTokensClaimedEvent(
  claimConditionIndex: BigInt,
  claimer: Address,
  receiver: Address,
  tokenId: BigInt,
  quantityClaimed: BigInt
): TokensClaimed {
  let tokensClaimedEvent = changetype<TokensClaimed>(newMockEvent())

  tokensClaimedEvent.parameters = new Array()

  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimConditionIndex",
      ethereum.Value.fromUnsignedBigInt(claimConditionIndex)
    )
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "quantityClaimed",
      ethereum.Value.fromUnsignedBigInt(quantityClaimed)
    )
  )

  return tokensClaimedEvent
}

export function createTokensLazyMintedEvent(
  startTokenId: BigInt,
  endTokenId: BigInt,
  baseURI: string,
  encryptedBaseURI: Bytes
): TokensLazyMinted {
  let tokensLazyMintedEvent = changetype<TokensLazyMinted>(newMockEvent())

  tokensLazyMintedEvent.parameters = new Array()

  tokensLazyMintedEvent.parameters.push(
    new ethereum.EventParam(
      "startTokenId",
      ethereum.Value.fromUnsignedBigInt(startTokenId)
    )
  )
  tokensLazyMintedEvent.parameters.push(
    new ethereum.EventParam(
      "endTokenId",
      ethereum.Value.fromUnsignedBigInt(endTokenId)
    )
  )
  tokensLazyMintedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )
  tokensLazyMintedEvent.parameters.push(
    new ethereum.EventParam(
      "encryptedBaseURI",
      ethereum.Value.fromBytes(encryptedBaseURI)
    )
  )

  return tokensLazyMintedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
