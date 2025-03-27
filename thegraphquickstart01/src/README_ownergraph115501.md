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
graph auth --studio 567a3656dd818dc2e05f98e494dd3d23

yarn build
yarn codegen
yarn deploy

versionは v0.0.1 とでもしておく。


```
{
  transferSingles(
    first: 5
    orderBy: blockNumber
    orderDirection: desc
  ){
    id
    blockNumber
    transactionHash
    from
    to
    ac344dContract_id
    value
  }
  
  
  transferBatches(
    first: 5
    orderBy: blockNumber
    orderDirection: desc
  ){
    id
    blockNumber
    transactionHash
    from
    to
    ids
  }
}
```


```
{
  "data": {
    "transferSingles": [
      {
        "id": "0x01227353f5e213a9cdae2b4bf6a1a87a38bc35072d49c9895d72dbe8c84123b108000000",
        "blockNumber": "6794097",
        "transactionHash": "0x01227353f5e213a9cdae2b4bf6a1a87a38bc35072d49c9895d72dbe8c84123b1",
        "from": "0x063977dd3cb791dc0883526c02971615e28bc384",
        "to": "0x76e32bdb97eae1a7b3b5ca78bc20f521e7250a1c",
        "ac344dContract_id": "0",
        "value": "1"
      }
    ],
    "transferBatches": []
  }
}
```