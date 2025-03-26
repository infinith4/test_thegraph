

# 前提

npm
Metamask と アカウント
Event スマートコントラクト

```
npm install -g @graphprotocol/graph-cli
```

```
graph init
```

以下のように指定する。

```
✔ Protocol · ethereum
✔ Subgraph slug · helloownerthegraph01
✔ Directory to create the subgraph in · helloownerthegraph01
✔ Ethereum network · mainnet
✔ Contract address · 0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb
✔ ABI file (path) · [FULL PATH]/abi.json
✔ Start Block · 3914495
✔ Contract Name · CryptoPunksMarket
✔ Index contract events as entities (Y/n) · true
Add another contract? (y/n): n
Subgraph helloownerthegraph01 created in helloownerthegraph01
```

https://thegraph.com/studio で ```Create a Subgraph``` をクリックする。

サブグラフを作成する。


以下のコマンドを実行する。

```[DEPLOY KEY]``` は https://thegraph.com/studio で取得したDEPLOY KEY を指定する。


```
graph auth --studio [DEPLOY KEY]

cd helloownerthegraph01

graph codegen && graph build

yarn deploy
```

