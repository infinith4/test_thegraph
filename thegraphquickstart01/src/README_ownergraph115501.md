0xac344d02874336701b2fb7612823997816b1f23e
0x8504d64f3d6Ef4Cb3daE06f306e3A90aeb2B4264
0x8504d64f3d6Ef4Cb3daE06f306e3A90aeb2B4264


```
graph init --studio ownergraph115501
```

https://sepolia.etherscan.io/address/0xac344d02874336701b2fb7612823997816b1f23e

0xac344d02874336701b2fb7612823997816b1f23e

abi file はetherscan からコピーして作成する。

./0xac344d_abi.json を指定する。

ac344dContract

✔ Ethereum network · sepolia
✔ Contract address · 0xac344d02874336701b2fb7612823997816b1f23e
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · false
✔ ABI file (path) · ./0xac344d_abi.json
✔ Start Block · 0
✔ Contract Name · ac344dContract
✔ Index contract events as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
Add another contract? (y/n): 
Subgraph ownergraph115501 created in ownergraph115501

Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd ownergraph115501` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.

----

cd ownergraph115501

https://thegraph.com/studio/

thegraph のダッシュボードでsubgraph を作成しておく。

DEPLOY_KEY を作成したsubgraph: ownergraph01 のdeploy key に置き換える

graph auth --studio <DEPLOY_KEY>


yarn build
yarn codegen
yarn deploy

versionは v0.0.1 とでもしておく。



graph init \
  --product subgraph-studio
  --from-contract 0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD \
  --network fantom-testnet \
  --abi ./abi.json \
  hellothegraph01


graph init --contract-name Token --index-events --product subgraph-studio --from-contract 0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7