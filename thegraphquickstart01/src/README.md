0x8Ccb7518F91dA94A2a67f4fc909109bA68DfB60e
0xВ5e9cA64e563eC60938B82f3261871aFB4687312
0xE88Df35e01e3e33Df38FB0B5e324282feCeb20c2
Охас344d02874336701b2fb7612823997816b1f23e
0x8504d64f3d6Ef4Cb3daE06f306e3A90aeb2B4264
0x8504d64f3d6Ef4Cb3daE06f306e3A90aeb2B4264



graph init --studio hellothegraph01

----


yarn global add @graphprotocol/graph-cli

graph init --studio <SUBGRAPH_SLUG>


graph init --studio 0x5ca1ea5549e4e7cb64ae35225e11865d2572b3f9


0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD

```
➜  /src graph init --studio test                                      
 ›   Warning: In next major version, this flag will be removed. By default we will deploy to the Graph Studio. Learn more about Sunrise of 
 ›   Decentralized Data https://thegraph.com/blog/unveiling-updated-sunrise-decentralized-data/
 ›   Warning: In next major version, this flag will be removed. By default we will deploy to the Graph Studio. Learn more about Sunrise of 
 ›   Decentralized Data https://thegraph.com/blog/unveiling-updated-sunrise-decentralized-data/
 ›   Warning: In next major version, this flag will be removed. By default we will stop initializing a Git repository.
✔ Protocol · ethereum
✔ Subgraph slug · test
✔ Directory to create the subgraph in · test
Ethereum network · fantom
✔ Contract address · 0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD
✔ Fetching ABI from Etherscan
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
✔ Do you want to retry? (Y/n) · true
✔ Fetching Start Block
✔ Fetching Contract Name
✔ Start Block · 1413000
✔ Contract Name · fETH
✔ Index contract events as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
Add another contract? (y/n): Add another contract? (y/n): 
Subgraph test created in test

Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd test` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.

```


graph auth --studio <DEPLOY_KEY>

graph deploy --studio <SUBGRAPH_SLUG>


graph init \
  --product subgraph-studio
  --from-contract 0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD \
  --network fantom-testnet \
  --abi ./abi.json \
  hellothegraph01


graph init --contract-name Token --index-events --product subgraph-studio --from-contract 0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7