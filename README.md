# Ser-node

[![Build Status](https://travis-ci.org/clonn/ser-node.svg?branch=master)](https://travis-ci.org/clonn/ser-node)

Ser-node is a node SDK of [idear iii api](http://api.ser.ideas.iii.org.tw/docs/), you can referece official document and usage [link](http://api.ser.ideas.iii.org.tw/docs/).

We support full stack function for Node.js developer and JavaScript developer can use, it is a project of [Ideas Tech 2015](http://hack2015.ideas.iii.org.tw/).

## install

```
npm install ser-node
```
## usage

### import / require Ser-Node module

```
var SerNode = require("ser-node");
```

### init ser-node

```
var serNode = new SerNode({
  id: "SER_ID",
  secret_key: "SECRET_KEY"
});
```
### then have to get `token`

```
serNode.connect();
```

### start use API running

```
  serNode.connect(function () {
    serNode.request("top_article/ptt", {
      period: 10
    })
    .then(function (result) {

      // get result data
    });
  });

```

or

```
serNode.connect().then(function () {

  serNode.request("top_article/ptt", {
    period: 10
  })
  .then(function (result) {

    // get result data
  });

})
```

## npm

 * [ser-node](https://www.npmjs.com/package/ser-node)

# Auth

 * [clonn](https://github.com/clonn)

# license

MIT
