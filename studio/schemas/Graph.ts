specVersion: 0.0.4
import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
import { Gravatar } from '../generated/schema'
description: Gravatar for Ethereum

     export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

type Gravatar @entity {
  id: ID!
  owner: Bytes
  displayName: String
  imageUrl: String
  accepted: Boolean
}

type GravatarAccepted @entity {
  id: ID!
  owner: Bytes
  displayName: String
  imageUrl: String
}

type GravatarDeclined @entity {
  id: ID!
  owner: Bytes
  displayName: String
  imageUrl: String
}

type Transaction @entity {
  id: ID!
  transactionReceipt: TransactionReceipt
}

type TransactionReceipt @entity {
  id: ID!
  transaction: Transaction
}

type Token @entity {
  id: ID!
  tokenBalances: [TokenBalance!]! @derivedFrom(field: "token")
}

type TokenBalance @entity {
  id: ID!
  amount: Int!
  token: Token!
}
type Organization @entity {
  id: ID!
  name: String!
  members: [UserOrganization]! @derivedFrom(field: "organization")
}

type User @entity {
  id: ID!
  name: String!
  organizations: [UserOrganization!] @derivedFrom(field: "user")
}

type UserOrganization @entity {
  id: ID! # Set to `${user.id}-${organization.id}`
  user: User!
  organization: Organization!
}

query usersWithOrganizations {
  users {
    organizations {
      # this is a UserOrganization entity
      organization {
        name
      }
    }
  }
}

