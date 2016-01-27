# cli-timer [![NPM version](https://img.shields.io/npm/v/cli-timer.svg)](https://npmjs.com/package/cli-timer) [![NPM downloads](https://img.shields.io/npm/dm/cli-timer.svg)](https://npmjs.com/package/cli-timer) [![Build Status](https://img.shields.io/circleci/project/egoist/cli-timer/master.svg)](https://circleci.com/gh/egoist/cli-timer)

> timer in command line

[![asciicast](https://asciinema.org/a/307y5sm3pgz8u1p80t5dhgrns.png)](https://asciinema.org/a/307y5sm3pgz8u1p80t5dhgrns)

## CLI

```
$ npm install -g cli-timer
```

## Usage

```bash
# start recording from ...
cli-timer on
# => Start at Wed Jan 27 2016 11:11:02 GMT+0800 (CST)

# the time since the time started
cli-timer tick
# => 29.206 seconds
cli-timer tick
# => 33.321 seconds

# show the timer in live mode
# then the program won't exit until you press ctrl+c
cli-timer log
```

## Node.js API

```js
var timer = require('cli-timer')

timer('on')

timer('tick')

timer('log')
```

## License

MIT © [EGOIST](https://github.com/egoist)
