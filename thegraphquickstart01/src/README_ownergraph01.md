0x8Ccb7518F91dA94A2a67f4fc909109bA68DfB60e
0xВ5e9cA64e563eC60938B82f3261871aFB4687312
0xE88Df35e01e3e33Df38FB0B5e324282feCeb20c2



```
graph init --studio ownergraph01
```

0x8Ccb7518F91dA94A2a67f4fc909109bA68DfB60e

abi file はetherscan からコピーして作成する。

./0x8Ccb_abi.json を指定する。


Start Block はコントラクトか作成されたブロックを指定しないと同期するまで時間がかかる。

Ethereum network · sepolia
✔ Contract address · 0x8Ccb7518F91dA94A2a67f4fc909109bA68DfB60e
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Contract Name: Failed to fetch contract source code
✔ Do you want to retry? (Y/n) · false
✔ ABI file (path) · ./0x8Ccb_abi.json
✔ Start Block · 0
✔ Contract Name · UserNFTContract
✔ Index contract events as entities (Y/n) · true




Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd ownergraph01` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.

----

cd ownergraph01

thegraph のダッシュボードでsubgraph を作成しておく。

DEPLOY_KEY を作成したsubgraph: ownergraph01 のdeploy key に置き換える

graph auth --studio <DEPLOY_KEY>


yarn build
yarn codegen
yarn deploy

versionはv0.0.1 とでもしておく。


ダッシュボードでSynced になるまで待つ。


https://thegraph.com/studio/subgraph/ownergraph01/playground


```
{
  transfers(
    first: 100
    orderBy: blockNumber
    orderDirection: desc
  ) {
    id
    tokenId
    transactionHash
    from
    to
  }
}
```


https://sepolia.etherscan.io/address/0x8ccb7518f91da94a2a67f4fc909109ba68dfb60e


```
{
  "data": {
    "transfers": [
      {
        "id": "0x6c964ef5fb542463db84f01feccaea4257d714ce34590cc1990b37ba092dcf203f000000",
        "tokenId": "4",
        "transactionHash": "0x6c964ef5fb542463db84f01feccaea4257d714ce34590cc1990b37ba092dcf20",
        "from": "0x8b352d20fe2df6da40d2e574bc129707e12b6961",
        "to": "0xcebc36de334ce12dfd08f4c39e833016263ba5b0"
      },
      {
        "id": "0x7ad555e6f1cfb99425ee2ca148c75dd462fe6bdd1d52a3290d4996ffee6aaaf254000000",
        "tokenId": "5",
        "transactionHash": "0x7ad555e6f1cfb99425ee2ca148c75dd462fe6bdd1d52a3290d4996ffee6aaaf2",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0xb56efdcf968f6af7829a41f1b09d78e868952ff2"
      },
      {
        "id": "0xd67eee0f6c838cbf0d8f43913b36b237b8bf0381f7497261d6d6c64e69a0240030000000",
        "tokenId": "4",
        "transactionHash": "0xd67eee0f6c838cbf0d8f43913b36b237b8bf0381f7497261d6d6c64e69a02400",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0x8b352d20fe2df6da40d2e574bc129707e12b6961"
      },
      {
        "id": "0x1d0f453c241599b54b7366f4fd6ee1f7e55cb4e36bc2942952d3b917d0b02b5045000000",
        "tokenId": "3",
        "transactionHash": "0x1d0f453c241599b54b7366f4fd6ee1f7e55cb4e36bc2942952d3b917d0b02b50",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0x8b352d20fe2df6da40d2e574bc129707e12b6961"
      },
      {
        "id": "0x3520d47318c071ed3343e02f911d18ec4978b64ff3ef215d4c95466f8a1512393d000000",
        "tokenId": "2",
        "transactionHash": "0x3520d47318c071ed3343e02f911d18ec4978b64ff3ef215d4c95466f8a151239",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0xc53225dd7fc437342fb4869654595591cfa3efa0"
      },
      {
        "id": "0x343a7dcbd354ae0d24ecfc18d5f87b70e6aa6c08dc583bca8b4cb6ac988c5fce34000000",
        "tokenId": "1",
        "transactionHash": "0x343a7dcbd354ae0d24ecfc18d5f87b70e6aa6c08dc583bca8b4cb6ac988c5fce",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0xc53225dd7fc437342fb4869654595591cfa3efa0"
      }
    ]
  }
}
```




https://sepolia.etherscan.io/token/0x8ccb7518f91da94a2a67f4fc909109ba68dfb60e?a=4


```
{
  transfers(
    first: 10
    orderBy: blockNumber
    orderDirection: desc
    where: { tokenId : 4}
  ) {
    id
    tokenId
    transactionHash
    from
    to
    blockNumber
  }
}
```


```
{
  "data": {
    "transfers": [
      {
        "id": "0x6c964ef5fb542463db84f01feccaea4257d714ce34590cc1990b37ba092dcf203f000000",
        "tokenId": "4",
        "transactionHash": "0x6c964ef5fb542463db84f01feccaea4257d714ce34590cc1990b37ba092dcf20",
        "from": "0x8b352d20fe2df6da40d2e574bc129707e12b6961",
        "to": "0xcebc36de334ce12dfd08f4c39e833016263ba5b0",
        "blockNumber": "7933946"
      },
      {
        "id": "0xd67eee0f6c838cbf0d8f43913b36b237b8bf0381f7497261d6d6c64e69a0240030000000",
        "tokenId": "4",
        "transactionHash": "0xd67eee0f6c838cbf0d8f43913b36b237b8bf0381f7497261d6d6c64e69a02400",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0x8b352d20fe2df6da40d2e574bc129707e12b6961",
        "blockNumber": "4723583"
      }
    ]
  }
}
```