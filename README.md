# heartbleed

Node.js wrapper for heartbleed API using request/promises.


## Usage:

### 1. Install:

```bash
$ npm i heartbleed -S
```

### 2. Use:

```javascript
var heartbleed = require("heartbleed");

heartbleed("github.com").then(function (data) {
  console.log(JSON.stringify(data, null, 2));
}, function (err) {
  console.error(err);
});
```

### 3. Output:
```bash
$ node index
```

```json
{
  "code": 1,
  "data": "",
  "error": "",
  "host": "github.com",
  "status": "safe"
}
```
