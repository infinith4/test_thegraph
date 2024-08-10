StorageContract01

sepolia
Contract address
0x133d9d34e4c083cf94dbeec76a09737f262cde8b

https://sepolia.etherscan.io/address/0x133d9d34e4c083cf94dbeec76a09737f262cde8b

StorageContract01


npm i -g @graphprotocol/graph-cli@0.80.0

## Owner01Contract

sepolia
Contract address
0x8a8ac492985c92fe36525a192bf22e44cedf9005

https://sepolia.etherscan.io/address/0x8a8ac492985c92fe36525a192bf22e44cedf9005

./sepolia_owner_abi.json

Owner01Contract


```
hiroshi@hiroshinoMac-mini thegraphquickstart03 % graph init --studio helloownerthegraph01
 ›   Warning: In next major version, this flag will be removed. By default we will 
 ›   deploy to the Graph Studio. Learn more about Sunrise of Decentralized Data 
 ›   https://thegraph.com/blog/unveiling-updated-sunrise-decentralized-data/
 ›   Warning: In next major version, this flag will be removed. By default we will 
 ›   deploy to the Graph Studio. Learn more about Sunrise of Decentralized Data 
 ›   https://thegraph.com/blog/unveiling-updated-sunrise-decentralized-data/
 ›   Warning: In next major version, this flag will be removed. By default we will stop
 ›    initializing a Git repository.
✔ Protocol · ethereum
✔ Subgraph slug · helloownerthegraph01
✔ Directory to create the subgraph in · helloownerthegraph01
✔ Ethereum network · sepolia
✔ Contract address · 0x8a8ac492985c92fe36525a192bf22e44cedf9005
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
✔ Do you want to retry? (Y/n) · true
✔ Fetching Start Block
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · true
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · false
✔ ABI file (path) · ./sepolia_owner_abi.json
✔ Start Block · 6431455
✔ Contract Name · Owner01Contract
✔ Index contract events as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
Add another contract? (y/n): 
Subgraph helloownerthegraph01 created in helloownerthegraph01

Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd helloownerthegraph01` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.
```


https://note.com/nftstudio/n/n7cd3ae77d5ab#TtteN

yarn global add truffle@5.11.5 ganache-cli@6.12.2


ganache-cli -h 0.0.0.0


git clone https://github.com/graphprotocol/graph-node/


cd graph-node/docker



./setup.sh

docker-compose.yml

docker-compose up

