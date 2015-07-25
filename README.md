# Ser-node

Ser-node is a node SDK of [idear iii api](http://api.ser.ideas.iii.org.tw/docs/), you can referece official document and usage [link](http://api.ser.ideas.iii.org.tw/docs/).

We support full stack function for Node.js developer and JavaScript developer can use, it is a project of [Ideas Tech 2015](http://hack2015.ideas.iii.org.tw/).

## install

```
npm install ser-node
```
## usage

### init ser-node

```
var SerNode = require("ser-node")
var serNode = new SerNode({
  id: "SER_ID",
  secret_key: "SECRET_KEY"
});
```
### then have to get `token`

```
serNode.getToken().then(function (data) {
  // do sth here
});
```

### start use API running

```
  serNode.request("top_article/ptt", {
    period: 10
  })
  .then(function (result) {
    
    // get result data
  });
```

## npm

 * [ser-node](https://www.npmjs.com/package/ser-node)

# Auth

 * [clonn](https://github.com/clonn)

# license

MIT
