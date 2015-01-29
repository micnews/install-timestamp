## SYNOPSIS
Post-install script that generates unique installation timestamp easily accessible by application. Timestamp includes current date from `Date.now()` and some random bits.

## USAGE

1. Install this package:

```bash
npm install install-timestamp --save
```

2. Add postinstall script to your `package.json`:

```json
"scripts": {
  "postinstall": "install-timestamp",
},
```

3. Read timestamp:

```js
var installTimestamp = require('install-timestamp');
var ts = installTimestamp();
console.log(ts);
```

##LICENSE

MIT
