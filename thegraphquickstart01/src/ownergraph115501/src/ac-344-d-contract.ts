import {
  ApprovalForAll as ApprovalForAllEvent,
  ClaimConditionsUpdated as ClaimConditionsUpdatedEvent,
  ContractURIUpdated as ContractURIUpdatedEvent,
  DefaultRoyalty as DefaultRoyaltyEvent,
  Initialized as InitializedEvent,
  MaxTotalSupplyUpdated as MaxTotalSupplyUpdatedEvent,
  OperatorRestriction as OperatorRestrictionEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  PlatformFeeInfoUpdated as PlatformFeeInfoUpdatedEvent,
  PrimarySaleRecipientUpdated as PrimarySaleRecipientUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  RoyaltyForToken as RoyaltyForTokenEvent,
  SaleRecipientForTokenUpdated as SaleRecipientForTokenUpdatedEvent,
  TokensClaimed as TokensClaimedEvent,
  TokensLazyMinted as TokensLazyMintedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/ac344dContract/ac344dContract"
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
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimConditionsUpdated(
  event: ClaimConditionsUpdatedEvent
): void {
  let entity = new ClaimConditionsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  //entity.claimConditions = event.params.claimConditions
  entity.resetEligibility = event.params.resetEligibility

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractURIUpdated(event: ContractURIUpdatedEvent): void {
  let entity = new ContractURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevURI = event.params.prevURI
  entity.newURI = event.params.newURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultRoyalty(event: DefaultRoyaltyEvent): void {
  let entity = new DefaultRoyalty(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRoyaltyRecipient = event.params.newRoyaltyRecipient
  entity.newRoyaltyBps = event.params.newRoyaltyBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxTotalSupplyUpdated(
  event: MaxTotalSupplyUpdatedEvent
): void {
  let entity = new MaxTotalSupplyUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.maxTotalSupply = event.params.maxTotalSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorRestriction(
  event: OperatorRestrictionEvent
): void {
  let entity = new OperatorRestriction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.restriction = event.params.restriction

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevOwner = event.params.prevOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlatformFeeInfoUpdated(
  event: PlatformFeeInfoUpdatedEvent
): void {
  let entity = new PlatformFeeInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFeeRecipient = event.params.platformFeeRecipient
  entity.platformFeeBps = event.params.platformFeeBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimarySaleRecipientUpdated(
  event: PrimarySaleRecipientUpdatedEvent
): void {
  let entity = new PrimarySaleRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyForToken(event: RoyaltyForTokenEvent): void {
  let entity = new RoyaltyForToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.royaltyRecipient = event.params.royaltyRecipient
  entity.royaltyBps = event.params.royaltyBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSaleRecipientForTokenUpdated(
  event: SaleRecipientForTokenUpdatedEvent
): void {
  let entity = new SaleRecipientForTokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.saleRecipient = event.params.saleRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensClaimed(event: TokensClaimedEvent): void {
  let entity = new TokensClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimConditionIndex = event.params.claimConditionIndex
  entity.claimer = event.params.claimer
  entity.receiver = event.params.receiver
  entity.tokenId = event.params.tokenId
  entity.quantityClaimed = event.params.quantityClaimed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensLazyMinted(event: TokensLazyMintedEvent): void {
  let entity = new TokensLazyMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTokenId = event.params.startTokenId
  entity.endTokenId = event.params.endTokenId
  entity.baseURI = event.params.baseURI
  entity.encryptedBaseURI = event.params.encryptedBaseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ac344dContract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.ac344dContract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
