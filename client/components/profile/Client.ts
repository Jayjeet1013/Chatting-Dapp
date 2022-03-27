import { Dispatch, SetStateAction } from 'react'
import { GiEarthAmerica } from 'react-icons/gi'

import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'


import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'


const ceramic = new CeramicClient('https://your-ceramic-node.com')


async function load(id) {
  return await ceramic.loadStream(id)
}


const API_URL = 'https://your-ceramic-node.com'

const ceramic = new CeramicClient(API_URL)



async function authenticateCeramic(seed) {
 
  const provider = new Ed25519Provider(seed)
 
  const did = new DID({ provider, resolver: getResolver() })
  
  await did.authenticate()
  
  ceramic.did = did
}
